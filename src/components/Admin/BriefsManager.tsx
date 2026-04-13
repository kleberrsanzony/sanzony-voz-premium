"use client";

import { useEffect, useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Mic, LogOut, Upload, Award, RefreshCw, Shield,
  ChevronDown, ChevronUp, Trash2, Pencil, Save, X,
  CheckCircle2, AlertTriangle, Loader2, Send, ExternalLink,
  Phone, User, FileText, Info, MessageSquare
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
import { sendViaLink } from '@/services/whatsappService';
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
    className={`border rounded-xl p-4 space-y-3 text-sm ${
      success ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-red-500/40 bg-red-500/5'
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

    const channel = supabase
      .channel('public:briefs')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'briefs' }, () => {
        fetchBriefs();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
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

  const handleAudioUpload = async (brief: Brief, file: File) => {
    await withBriefLoading(brief.id, async () => {
      const filePath = `${brief.id}/${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage.from('audio-files').upload(filePath, file);
      if (uploadError) return toast({ title: 'Erro upload', description: uploadError.message, variant: 'destructive' });

      await supabase.from('briefs').update({ audio_url: filePath, audio_filename: file.name }).eq('id', brief.id);
      const result = await automationService.runPostUploadFlow(brief.id, { ...brief, audio_url: filePath, audio_filename: file.name } as any);
      setAutoResult((prev) => ({ ...prev, [brief.id]: result }));
      await fetchBriefs();
    });
  };

  const deleteBrief = async (briefId: string) => {
    await withBriefLoading(briefId, async () => {
      const { error } = await supabase.from('briefs').delete().eq('id', briefId);
      if (error) return toast({ title: 'Erro', description: error.message, variant: 'destructive' });
      setExpandedBrief(null);
      fetchBriefs();
    });
  };

  const saveEditing = async (briefId: string) => {
    const current = editDataRef.current[briefId] || {};
    await withBriefLoading(briefId, async () => {
      const { error } = await supabase.from('briefs').update(current).eq('id', briefId);
      if (error) return toast({ title: 'Erro', description: error.message, variant: 'destructive' });
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
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  filter === tab.key ? 'bg-card text-foreground' : 'text-muted-foreground hover:text-foreground'
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
                  <div className="border-t border-border p-5">
                    <div className="grid md:grid-cols-5 gap-6">
                      <div className="md:col-span-3 space-y-5">
                        <BriefWorkflow status={brief.status} onActionClick={() => handleStatusAction(brief)} loading={loadingBriefId === brief.id} onAudioUpload={(file) => handleAudioUpload(brief, file)} />
                        {result && <AutoResultPanel {...result} onClose={() => setAutoResult(prev => { const n = {...prev}; delete n[brief.id]; return n; })} />}
                        <div className="bg-secondary/20 border border-border rounded-xl p-4">
                          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5"><FileText className="h-3 w-3" /> Texto do Briefing</h3>
                          <p className="text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">{brief.texto}</p>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-4">
                        <div className="bg-secondary/20 border border-border rounded-xl p-4 space-y-3">
                          <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><User className="h-3 w-3" /> Cliente</h3>
                          <dl className="space-y-2.5 text-sm">
                            <div><dt className="text-[10px] text-muted-foreground uppercase">Nome</dt><dd className="font-medium text-primary mt-0.5">{brief.nome}</dd></div>
                            <div><dt className="text-[10px] text-muted-foreground uppercase">Email</dt><dd className="font-mono text-xs mt-0.5 break-all">{brief.email}</dd></div>
                            <div><dt className="text-[10px] text-muted-foreground uppercase flex items-center gap-1"><Phone className="h-2.5 w-2.5" /> WhatsApp</dt><dd className="font-mono mt-0.5">{brief.whatsapp}</dd></div>
                          </dl>
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
