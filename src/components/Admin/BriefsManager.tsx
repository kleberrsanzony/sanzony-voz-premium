"use client";

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Mic, LogOut, Upload, Award, RefreshCw, Shield,
  ChevronDown, ChevronUp, Trash2, Pencil, Save, X,
  CheckCircle2, AlertTriangle, Loader2, Send, ExternalLink,
  Phone, User, FileText, Info, MessageSquare, Hash as HashIcon,
  Copy, Volume2, FileDown, Link2, RotateCcw
} from 'lucide-react';
import AdminStats from '@/components/AdminStats';
import BriefWorkflow from '@/components/Admin/BriefWorkflow';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { BriefStatus, STATUS_FLOW, STATUS_ORDER } from '@/services/statusService';
import { sendViaLink, sendPtt, sendDocument, autoSend, buildDeliveryMessage } from '@/services/whatsappService';
import { automationService, AutomationStep } from '@/services/automationService';

// ── Types ──────────────────────────────────────────────────────────────────────

interface Brief {
  id: string;
  nome: string;
  empresa: string | null;
  email: string;
  whatsapp: string;
  tipo_locucao: string;
  texto: string;
  tom: string | null;
  regiao: string | null;
  periodo: string | null;
  status: BriefStatus;
  audio_url: string | null;
  audio_filename: string | null;
  hash_sha256: string | null;
  numero_certificado: string | null;
  certificado_url: string | null;
  qr_code_url: string | null;
  created_at: string;
  updated_at: string;
}

type FilterKey = 'all' | 'fila_producao' | 'negociacao' | 'entregue';

// ── Helpers ──────────────────────────────────────────────────────────────────

const AutoResultPanel = ({ steps, success, message, onClose }: { steps: AutomationStep[], success: boolean, message: string, onClose: () => void }) => (
  <div
    className={`border rounded-xl p-4 space-y-3 text-sm ${success ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-red-500/40 bg-red-500/5'
      }`}
  >
    <div className="flex items-start justify-between gap-2">
      <div className="flex items-center gap-2 font-bold">
        {success ? (
          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
        ) : (
          <AlertTriangle className="h-4 w-4 text-red-400 shrink-0" />
        )}
        <span className={success ? 'text-emerald-400' : 'text-red-400'}>{message}</span>
      </div>
      <button onClick={onClose} className="text-muted-foreground hover:text-foreground shrink-0">
        <X className="h-4 w-4" />
      </button>
    </div>
    <ul className="space-y-1.5 pl-6">
      {steps.map((step, i) => (
        <li key={i} className="flex items-start gap-2">
          {step.status === 'ok' && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />}
          {step.status === 'error' && <AlertTriangle className="h-3.5 w-3.5 text-red-400 shrink-0 mt-0.5" />}
          {step.status === 'skipped' && <div className="h-3.5 w-3.5 rounded-full border border-muted-foreground shrink-0 mt-0.5" />}
          <span className={step.status === 'error' ? 'text-red-300' : 'text-muted-foreground'}>
            <span className="font-medium text-foreground">{step.label}</span>
            {step.detail && <> — {step.detail}</>}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const StatusBadge = ({ status }: { status: BriefStatus }) => {
  const cfg = STATUS_FLOW[status];
  return (
    <span className={`inline-flex items-center text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${cfg.color}`}>
      {cfg.label}
    </span>
  );
};

const FILTER_TABS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'fila_producao', label: 'Em Produção' },
  { key: 'negociacao', label: 'Negociação' },
  { key: 'entregue', label: 'Entregues' },
];

export default function BriefsManager() {
  const [briefs, setBriefs] = useState<Brief[]>([]);
  const [expandedBrief, setExpandedBrief] = useState<string | null>(null);
  const [editingBrief, setEditingBrief] = useState<string | null>(null);
  const [editData, setEditDataState] = useState<Record<string, Partial<Brief>>>({});
  const editDataRef = useRef<Record<string, Partial<Brief>>>({});
  const [filter, setFilter] = useState<FilterKey>('all');
  const [loadingBriefId, setLoadingBriefId] = useState<string | null>(null);
  const [autoResult, setAutoResult] = useState<Record<string, { success: boolean; message: string; steps: AutomationStep[] }>>({});
  const { toast } = useToast();
  const autoViewRef = useRef<Set<string>>(new Set());

  const setEditData = (briefId: string, update: Partial<Brief>) => {
    setEditDataState((prev) => {
      const next = { ...prev, [briefId]: { ...(prev[briefId] || {}), ...update } };
      editDataRef.current = next;
      return next;
    });
  };

  const fetchBriefs = async () => {
    const { data, error } = await supabase
      .from('briefs')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Erro ao carregar pedidos', description: error.message, variant: 'destructive' });
    } else {
      setBriefs((data as Brief[]) || []);
    }
  };

  useEffect(() => {
    fetchBriefs();

    // Realtime: instant updates via WebSocket
    const channel = supabase
      .channel('briefs-realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'briefs' }, () => {
        fetchBriefs();
      })
      .subscribe();

    // Polling fallback (30s safety net)
    const pollInterval = setInterval(fetchBriefs, 30000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(pollInterval);
    };
  }, []);

  const updateStatus = async (briefId: string, status: BriefStatus) => {
    const { error } = await supabase.from('briefs').update({ status }).eq('id', briefId);
    if (error) throw error;
  };

  useEffect(() => {
    if (!expandedBrief) return;
    const brief = briefs.find((b) => b.id === expandedBrief);
    if (!brief || brief.status !== 'recebido') return;
    if (autoViewRef.current.has(brief.id)) return;

    autoViewRef.current.add(brief.id);
    updateStatus(brief.id, 'visualizado').then(() => fetchBriefs()).catch(console.error);
  }, [expandedBrief, briefs]);

  const withBriefLoading = async (briefId: string, fn: () => Promise<void>) => {
    setLoadingBriefId(briefId);
    try { await fn(); } finally { setLoadingBriefId(null); }
  };

  const handleStatusAction = async (brief: Brief) => {
    await withBriefLoading(brief.id, async () => {
      if (brief.status === 'pronto_envio') {
        const result = sendViaLink({ nome: brief.nome, whatsapp: brief.whatsapp, numero_certificado: brief.numero_certificado, certificado_url: brief.certificado_url });
        if (result.url) {
          window.open(result.url, '_blank');
          await updateStatus(brief.id, 'entregue');
          await fetchBriefs();
        } else {
          toast({ title: 'Erro', description: result.error, variant: 'destructive' });
        }
        return;
      }
      const res = await automationService.manualAdvance(brief.id, brief.status, brief as any);
      await fetchBriefs();
    });
  };

  const generateFileHash = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const generateCertNumber = async (): Promise<string> => {
    const { data: seq, error: seqError } = await supabase.rpc('nextval_cert_seq');
    if (seqError) throw new Error(`Falha ao gerar sequência: ${seqError.message}`);

    const now = new Date();
    const year = now.getFullYear();
    const month = now.toLocaleString('pt-BR', { month: 'short' }).toUpperCase().replace('.', '');
    const paddedSeq = String(seq).padStart(3, '0');

    return `SVZ-${year}-${month}-${paddedSeq}`;
  };

  const handleAudioUpload = async (brief: Brief, file: File) => {
    await withBriefLoading(brief.id, async () => {
      // 1. Generate hash and cert number locally
      const hash = await generateFileHash(file);
      const certNumber = brief.numero_certificado || await generateCertNumber();

      // 2. Upload to storage
      const filePath = `${brief.id}/${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage.from('audio-files').upload(filePath, file);
      if (uploadError) {
        toast({ title: 'Erro upload', description: uploadError.message, variant: 'destructive' });
        return;
      }

      // 3. Update brief with basic metadata
      const { error: updateError } = await supabase.from('briefs').update({
        audio_url: filePath,
        audio_filename: file.name,
        hash_sha256: hash,
        numero_certificado: certNumber
      }).eq('id', brief.id);

      if (updateError) {
        toast({ title: 'Erro ao salvar metadados', description: updateError.message, variant: 'destructive' });
        return;
      }

      // 4. Run automation flow
      const result = await automationService.runPostUploadFlow(brief.id, {
        ...brief,
        audio_url: filePath,
        audio_filename: file.name,
        hash_sha256: hash,
        numero_certificado: certNumber
      } as any);

      setAutoResult((prev) => ({ ...prev, [brief.id]: result }));
      await fetchBriefs();
    });
  };

  const deleteBrief = async (briefId: string) => {
    await withBriefLoading(briefId, async () => {
      const { error } = await supabase.from('briefs').delete().eq('id', briefId);
      if (error) {
        toast({ title: 'Erro', description: error.message, variant: 'destructive' });
        return;
      }
      setExpandedBrief(null);
      fetchBriefs();
    });
  };

  const startEditing = (brief: Brief) => {
    const initial: Partial<Brief> = {
      nome: brief.nome,
      empresa: brief.empresa,
      email: brief.email,
      whatsapp: brief.whatsapp,
      tipo_locucao: brief.tipo_locucao,
      texto: brief.texto,
      tom: brief.tom,
      regiao: brief.regiao,
      periodo: brief.periodo,
    };
    setEditingBrief(brief.id);
    setEditData(brief.id, initial);
  };

  const saveEditing = async (briefId: string) => {
    const current = editDataRef.current[briefId] || {};
    await withBriefLoading(briefId, async () => {
      const { error } = await supabase.from('briefs').update(current).eq('id', briefId);
      if (error) {
        toast({ title: 'Erro', description: error.message, variant: 'destructive' });
        return;
      }
      setEditingBrief(null);
      fetchBriefs();
    });
  };

  const filteredBriefs = briefs.filter((b) => {
    if (filter === 'fila_producao') return ['fila_producao', 'em_producao', 'em_revisao', 'pronto_envio'].includes(b.status);
    if (filter === 'negociacao') return ['negociacao', 'aguardando_pagamento'].includes(b.status);
    if (filter === 'entregue') return b.status === 'entregue';
    return true;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="font-serif text-2xl font-bold">
            <span className="text-gradient-gold">Pedidos</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">{briefs.length} pedido{briefs.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-secondary/30 p-1 rounded-lg border border-border gap-0.5">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${filter === tab.key ? 'bg-card text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button onClick={fetchBriefs} className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"><RefreshCw className="h-4 w-4 text-muted-foreground" /></button>
        </div>
      </div>

      <AdminStats briefs={briefs} />

      {filteredBriefs.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground bg-card border border-border rounded-xl">
          <MessageSquare className="h-8 w-8 mx-auto mb-3 opacity-30" />
          <p className="text-sm">Nenhum pedido nesta categoria.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredBriefs.map((brief) => {
            const isExpanded = expandedBrief === brief.id;
            const isEditing = editingBrief === brief.id;
            const cfg = STATUS_FLOW[brief.status];
            const result = autoResult[brief.id];

            return (
              <div key={brief.id} className={`bg-card border rounded-xl overflow-hidden transition-all duration-200 ${isExpanded ? 'border-primary/30 shadow-lg' : 'border-border hover:border-border/80'}`}>
                <button onClick={() => setExpandedBrief(isExpanded ? null : brief.id)} className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${cfg.color.split(' ')[0].replace('/15', '/70')}`} />
                    <div className="min-w-0">
                      <p className="font-semibold truncate">{brief.nome}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <StatusBadge status={brief.status} />
                        <span className="text-xs text-muted-foreground truncate">{brief.tipo_locucao}</span>
                      </div>
                    </div>
                  </div>
                  {isExpanded ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                </button>

                {isExpanded && (
                  <div className="border-t border-border">
                    {/* Action Toolbar */}
                    <div className="px-5 py-3 flex items-center gap-2 bg-secondary/20 border-b border-border/50">
                      {isEditing ? (
                        <>
                          <Button size="sm" onClick={() => saveEditing(brief.id)} className="bg-gold text-black h-8 hover:bg-gold/90">
                            <Save className="h-3.5 w-3.5 mr-1" /> Salvar
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => setEditingBrief(null)} className="h-8 shadow-none">
                            <X className="h-3.5 w-3.5 mr-1" /> Cancelar
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" variant="outline" onClick={() => startEditing(brief)} className="h-8 border-white/10 hover:bg-white/5">
                          <Pencil className="h-3.5 w-3.5 mr-1" /> Editar dados
                        </Button>
                      )}

                      <div className="flex-1" />

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button size="sm" variant="ghost" className="h-8 text-muted-foreground hover:text-red-400">
                            <Trash2 className="h-3.5 w-3.5" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-card border-border">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-white">Apagar pedido?</AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground">
                              Esta ação remove permanentemente o briefing de <strong>{brief.nome}</strong>. Não pode ser desfeita.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="bg-secondary border-border text-white hover:bg-secondary/80">Cancelar</AlertDialogCancel>
                            <AlertDialogAction onClick={() => deleteBrief(brief.id)} className="bg-red-500 text-white hover:bg-red-600">
                              Apagar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>

                    <div className="p-5">
                      <div className="grid md:grid-cols-5 gap-6">
                        <div className="md:col-span-3 space-y-5">
                          <BriefWorkflow
                            status={brief.status}
                            onActionClick={() => handleStatusAction(brief)}
                            loading={loadingBriefId === brief.id}
                            onAudioUpload={(file) => handleAudioUpload(brief, file)}
                          />

                          {result && <AutoResultPanel {...result} onClose={() => setAutoResult(prev => { const n = { ...prev }; delete n[brief.id]; return n; })} />}

                          <div className="bg-secondary/20 border border-border rounded-xl p-4">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                              <FileText className="h-3 w-3" /> Texto do Briefing
                            </h3>
                            {isEditing ? (
                              <Textarea
                                value={editData[brief.id]?.texto || ''}
                                onChange={(e) => setEditData(brief.id, { texto: e.target.value })}
                                rows={6}
                                className="text-sm bg-black/40 border-white/10"
                              />
                            ) : (
                              <p className="text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">{brief.texto}</p>
                            )}
                          </div>
                        </div>

                        <div className="md:col-span-2 space-y-4">
                          <div className="bg-secondary/20 border border-border rounded-xl p-4 space-y-3">
                            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                              <User className="h-3 w-3" /> Cliente
                            </h3>
                            {isEditing ? (
                              <div className="space-y-3">
                                <div>
                                  <label className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 block font-bold">Nome</label>
                                  <Input value={editData[brief.id]?.nome || ''} onChange={(e) => setEditData(brief.id, { nome: e.target.value })} className="h-8 text-sm bg-black/40 border-white/10" />
                                </div>
                                <div>
                                  <label className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 block font-bold">E-mail</label>
                                  <Input value={editData[brief.id]?.email || ''} onChange={(e) => setEditData(brief.id, { email: e.target.value })} className="h-8 text-sm bg-black/40 border-white/10" />
                                </div>
                                <div>
                                  <label className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 block font-bold">WhatsApp</label>
                                  <Input value={editData[brief.id]?.whatsapp || ''} onChange={(e) => setEditData(brief.id, { whatsapp: e.target.value })} className="h-8 text-sm bg-black/40 border-white/10" />
                                </div>
                                <div>
                                  <label className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 block font-bold">Empresa</label>
                                  <Input value={editData[brief.id]?.empresa || ''} onChange={(e) => setEditData(brief.id, { empresa: e.target.value })} className="h-8 text-sm bg-black/40 border-white/10" />
                                </div>
                                <div className="pt-2 grid grid-cols-3 gap-2 border-t border-white/5 mt-2">
                                  <div>
                                    <label className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 block font-bold">Tom</label>
                                    <Input value={editData[brief.id]?.tom || ''} onChange={(e) => setEditData(brief.id, { tom: e.target.value })} className="h-8 text-[10px] bg-black/40 border-white/10" />
                                  </div>
                                  <div>
                                    <label className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 block font-bold">Região</label>
                                    <Input value={editData[brief.id]?.regiao || ''} onChange={(e) => setEditData(brief.id, { regiao: e.target.value })} className="h-8 text-[10px] bg-black/40 border-white/10" />
                                  </div>
                                  <div>
                                    <label className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 block font-bold">Período</label>
                                    <Input value={editData[brief.id]?.periodo || ''} onChange={(e) => setEditData(brief.id, { periodo: e.target.value })} className="h-8 text-[10px] bg-black/40 border-white/10" />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <dl className="space-y-2.5 text-sm">
                                <div><dt className="text-[10px] text-muted-foreground uppercase">Nome</dt><dd className="font-medium text-white mt-0.5">{brief.nome}</dd></div>
                                <div><dt className="text-[10px] text-muted-foreground uppercase">Empresa</dt><dd className="font-medium text-white mt-0.5">{brief.empresa || '-'}</dd></div>
                                <div><dt className="text-[10px] text-muted-foreground uppercase">Email</dt><dd className="font-mono text-[10px] mt-0.5 break-all text-muted-foreground">{brief.email || '-'}</dd></div>
                                <div><dt className="text-[10px] text-muted-foreground uppercase flex items-center gap-1"><Phone className="h-2.5 w-2.5" /> WhatsApp</dt><dd className="font-mono text-xs mt-0.5 text-white">{brief.whatsapp}</dd></div>
                                <div className="pt-2 grid grid-cols-3 gap-4 border-t border-white/5 mt-3">
                                  <div><dt className="text-[9px] text-muted-foreground uppercase font-bold">Tom</dt><dd className="text-[11px] text-silver mt-0.5">{brief.tom || '-'}</dd></div>
                                  <div><dt className="text-[9px] text-muted-foreground uppercase font-bold">Região</dt><dd className="text-[11px] text-silver mt-0.5">{brief.regiao || '-'}</dd></div>
                                  <div><dt className="text-[9px] text-muted-foreground uppercase font-bold">Período</dt><dd className="text-[11px] text-silver mt-0.5">{brief.periodo || '-'}</dd></div>
                                </div>
                              </dl>
                            )}
                          </div>

                          {/* ── Manual Actions Panel ── */}
                          {!isEditing && (brief.audio_url || brief.numero_certificado) && (
                            <div className="bg-secondary/20 border border-border rounded-xl p-4 space-y-3 mt-4">
                              <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                                <RotateCcw className="h-3 w-3" /> Ações Manuais
                              </h3>

                              {/* Quick Links */}
                              <div className="space-y-2">
                                {brief.numero_certificado && (
                                  <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                                    <Link2 className="h-3 w-3 text-primary shrink-0" />
                                    <span className="text-[9px] text-muted-foreground uppercase font-bold shrink-0">Certificado:</span>
                                    <a
                                      href={`https://sanzonyvoz.com.br/verificar/${brief.numero_certificado}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[10px] text-primary hover:underline truncate font-mono"
                                    >
                                      sanzonyvoz.com.br/verificar/{brief.numero_certificado}
                                    </a>
                                    <button
                                      onClick={() => {
                                        navigator.clipboard.writeText(`https://sanzonyvoz.com.br/verificar/${brief.numero_certificado}`);
                                        toast({ title: 'Link copiado!' });
                                      }}
                                      className="p-1 hover:bg-white/10 rounded transition-colors shrink-0"
                                    >
                                      <Copy className="h-3 w-3 text-muted-foreground" />
                                    </button>
                                  </div>
                                )}

                                <div className="flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
                                  <Phone className="h-3 w-3 text-emerald-400 shrink-0" />
                                  <span className="text-[9px] text-muted-foreground uppercase font-bold shrink-0">WhatsApp:</span>
                                  <a
                                    href={`https://wa.me/${brief.whatsapp.replace(/\D/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[10px] text-emerald-400 hover:underline truncate font-mono"
                                  >
                                    wa.me/{brief.whatsapp.replace(/\D/g, '')}
                                  </a>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(`https://wa.me/${brief.whatsapp.replace(/\D/g, '')}`);
                                      toast({ title: 'Link copiado!' });
                                    }}
                                    className="p-1 hover:bg-white/10 rounded transition-colors shrink-0"
                                  >
                                    <Copy className="h-3 w-3 text-muted-foreground" />
                                  </button>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="grid grid-cols-2 gap-2 pt-1">
                                {brief.audio_url && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-9 text-[10px] gap-1.5 border-primary/20 hover:bg-primary/10 hover:text-primary"
                                    disabled={loadingBriefId === brief.id}
                                    onClick={async () => {
                                      await withBriefLoading(brief.id, async () => {
                                        const SYB = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://eazwewzslriqzzvjwpjh.supabase.co';
                                        const fullAudioUrl = brief.audio_url!.startsWith('http')
                                          ? brief.audio_url!
                                          : `${SYB}/storage/v1/object/public/audio-files/${brief.audio_url}`;
                                        const res = await sendPtt({
                                          nome: brief.nome,
                                          whatsapp: brief.whatsapp,
                                          numero_certificado: brief.numero_certificado,
                                          audio_url: fullAudioUrl,
                                        });
                                        toast({
                                          title: res.success ? 'Áudio PTT reenviado!' : 'Erro ao reenviar áudio',
                                          description: res.success ? `Enviado para ${brief.whatsapp}` : res.humanMessage,
                                          variant: res.success ? 'default' : 'destructive',
                                        });
                                      });
                                    }}
                                  >
                                    {loadingBriefId === brief.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Volume2 className="h-3 w-3" />}
                                    Reenviar Áudio
                                  </Button>
                                )}

                                {brief.numero_certificado && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-9 text-[10px] gap-1.5 border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-400"
                                    disabled={loadingBriefId === brief.id}
                                    onClick={async () => {
                                      await withBriefLoading(brief.id, async () => {
                                        const res = await sendDocument({
                                          nome: brief.nome,
                                          whatsapp: brief.whatsapp,
                                          numero_certificado: brief.numero_certificado,
                                          certificado_url: brief.certificado_url,
                                        });
                                        toast({
                                          title: res.success ? 'Certificado PDF reenviado!' : 'Erro ao reenviar PDF',
                                          description: res.success ? `PDF enviado para ${brief.whatsapp}` : res.humanMessage,
                                          variant: res.success ? 'default' : 'destructive',
                                        });
                                      });
                                    }}
                                  >
                                    {loadingBriefId === brief.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <FileDown className="h-3 w-3" />}
                                    Reenviar PDF
                                  </Button>
                                )}

                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-9 text-[10px] gap-1.5 border-emerald-500/20 hover:bg-emerald-500/10 hover:text-emerald-400"
                                  disabled={loadingBriefId === brief.id}
                                  onClick={async () => {
                                    await withBriefLoading(brief.id, async () => {
                                      const res = await autoSend({
                                        nome: brief.nome,
                                        whatsapp: brief.whatsapp,
                                        numero_certificado: brief.numero_certificado,
                                        certificado_url: brief.certificado_url,
                                        audio_url: brief.audio_url,
                                      });
                                      toast({
                                        title: res.success ? 'Texto reenviado!' : 'Erro ao reenviar texto',
                                        description: res.success ? `Mensagem enviada para ${brief.whatsapp}` : res.humanMessage,
                                        variant: res.success ? 'default' : 'destructive',
                                      });
                                    });
                                  }}
                                >
                                  {loadingBriefId === brief.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3 w-3" />}
                                  Reenviar Texto
                                </Button>

                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="h-9 text-[10px] gap-1.5 border-amber-500/20 hover:bg-amber-500/10 hover:text-amber-400"
                                  disabled={loadingBriefId === brief.id}
                                  onClick={async () => {
                                    await withBriefLoading(brief.id, async () => {
                                      try {
                                        const { data, error } = await supabase.functions.invoke('generate-certificate', {
                                          body: { briefId: brief.id },
                                        });
                                        if (error) throw error;
                                        await fetchBriefs();
                                        toast({
                                          title: 'Certificado gerado!',
                                          description: `Nº: ${data?.certificate?.numero || brief.numero_certificado}`,
                                        });
                                      } catch (err: any) {
                                        toast({
                                          title: 'Erro ao gerar certificado',
                                          description: err.message || 'Falha na Edge Function.',
                                          variant: 'destructive',
                                        });
                                      }
                                    });
                                  }}
                                >
                                  {loadingBriefId === brief.id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Award className="h-3 w-3" />}
                                  Gerar Certificado
                                </Button>

                                {/* Upload new audio + send */}
                                <label className="col-span-2 cursor-pointer">
                                  <div
                                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed 
                                    border-primary/30 bg-primary/5 hover:bg-primary/10 hover:border-primary/50 transition-all
                                    text-primary font-bold text-[10px] uppercase tracking-wider ${loadingBriefId === brief.id ? 'opacity-60 pointer-events-none' : ''}`}
                                  >
                                    {loadingBriefId === brief.id ? (
                                      <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                      <>
                                        <Upload className="h-4 w-4" />
                                        Enviar novo áudio corrigido
                                      </>
                                    )}
                                  </div>
                                  <input
                                    type="file"
                                    accept=".mp3,.wav,.aac,.m4a,.ogg"
                                    className="hidden"
                                    disabled={loadingBriefId === brief.id}
                                    onChange={async (e) => {
                                      const file = e.target.files?.[0];
                                      if (!file) return;
                                      e.target.value = ''; // reset for re-uploads
                                      
                                      await withBriefLoading(brief.id, async () => {
                                        // 1. Upload to storage
                                        const filePath = `${brief.id}/${Date.now()}_${file.name}`;
                                        const { error: uploadError } = await supabase.storage.from('audio-files').upload(filePath, file);
                                        if (uploadError) {
                                          toast({ title: 'Erro no upload', description: uploadError.message, variant: 'destructive' });
                                          return;
                                        }

                                        // 2. Update brief
                                        const { error: updateError } = await supabase.from('briefs').update({
                                          audio_url: filePath,
                                          audio_filename: file.name,
                                        }).eq('id', brief.id);
                                        if (updateError) {
                                          toast({ title: 'Erro ao salvar', description: updateError.message, variant: 'destructive' });
                                          return;
                                        }

                                        // 3. Send PTT immediately
                                        const SYB = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://eazwewzslriqzzvjwpjh.supabase.co';
                                        const fullUrl = `${SYB}/storage/v1/object/public/audio-files/${filePath}`;
                                        const res = await sendPtt({
                                          nome: brief.nome,
                                          whatsapp: brief.whatsapp,
                                          numero_certificado: brief.numero_certificado,
                                          audio_url: fullUrl,
                                        });

                                        await fetchBriefs();
                                        toast({
                                          title: res.success ? 'Áudio corrigido enviado!' : 'Upload ok, mas falha no envio',
                                          description: res.success 
                                            ? `Novo áudio enviado para ${brief.whatsapp}` 
                                            : `Arquivo salvo. ${res.humanMessage}`,
                                          variant: res.success ? 'default' : 'destructive',
                                        });
                                      });
                                    }}
                                  />
                                </label>

                                {/* Resend everything at once */}
                                {brief.audio_url && (
                                  <Button
                                    size="sm"
                                    className="col-span-2 h-11 text-xs gap-2 font-bold bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 hover:scale-[1.02] active:scale-[0.99] transition-transform shadow-lg shadow-amber-500/20"
                                    disabled={loadingBriefId === brief.id}
                                    onClick={async () => {
                                      await withBriefLoading(brief.id, async () => {
                                        const SYB = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://eazwewzslriqzzvjwpjh.supabase.co';
                                        const payload = {
                                          nome: brief.nome,
                                          whatsapp: brief.whatsapp,
                                          numero_certificado: brief.numero_certificado,
                                          certificado_url: brief.certificado_url,
                                          audio_url: brief.audio_url?.startsWith('http')
                                            ? brief.audio_url
                                            : `${SYB}/storage/v1/object/public/audio-files/${brief.audio_url}`,
                                        };

                                        const results: string[] = [];

                                        // 1. Text
                                        const t = await autoSend(payload);
                                        results.push(t.success ? '✅ Texto' : '❌ Texto');

                                        // 2. PDF
                                        if (brief.certificado_url) {
                                          const d = await sendDocument(payload);
                                          results.push(d.success ? '✅ PDF' : '❌ PDF');
                                        }

                                        // 3. Audio PTT
                                        const p = await sendPtt(payload);
                                        results.push(p.success ? '✅ Áudio' : '❌ Áudio');

                                        const allOk = results.every(r => r.startsWith('✅'));
                                        toast({
                                          title: allOk ? 'Tudo reenviado!' : 'Envio parcial',
                                          description: results.join('  ·  '),
                                          variant: allOk ? 'default' : 'destructive',
                                        });
                                      });
                                    }}
                                  >
                                    {loadingBriefId === brief.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
                                    Reenviar Tudo
                                  </Button>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
