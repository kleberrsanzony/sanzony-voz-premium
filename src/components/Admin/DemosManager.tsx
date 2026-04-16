"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Pencil, Play, Pause, Save, X, Music, LayoutGrid, MonitorPlay, Loader2, Upload } from "lucide-react";
import { demoService, DemoEntry } from "@/services/demoService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CATEGORIES = ['Comercial', 'Varejo', 'Elite', 'Institucional'];

const formatSeconds = (totalSeconds: number) => {
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.floor(totalSeconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export default function DemosManager() {
  const [demos, setDemos] = useState<DemoEntry[]>([]);
  const [categories, setCategories] = useState<string[]>(CATEGORIES);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useState<HTMLAudioElement | null>(null)[0]; // Simplified for now
  const { toast } = useToast();

  const [formData, setFormData] = useState<Partial<DemoEntry>>({
    title: "",
    client: "",
    category: "Comercial",
    location: "grid",
    audio_url: "",
    duration: "",
    order_index: 0
  });

  const fetchDemos = async () => {
    try {
      const data = await demoService.getDemos();
      setDemos(data);
      const uniqueCats = Array.from(new Set([...CATEGORIES, ...data.map(d => d.category)])).sort();
      setCategories(uniqueCats);
    } catch (err: any) {
      toast({ title: "Erro ao buscar demos", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemos();
  }, []);

  const handleSave = async (id?: string) => {
    try {
      setLoading(true);
      if (id) {
        await demoService.updateDemo(id, formData);
        toast({ title: "Demo atualizada!" });
      } else {
        await demoService.addDemo(formData as any);
        toast({ title: "Demo adicionada com sucesso!" });
      }
      setIsAdding(false);
      setEditingId(null);
      fetchDemos();
    } catch (err: any) {
      console.error("[DemosManager] Erro ao salvar:", err);
      toast({ 
        title: "Erro ao salvar", 
        description: err.message || "Verifique as permissões de admin ou o console.", 
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta demo?")) return;
    try {
      await demoService.deleteDemo(id);
      toast({ title: "Demo excluída" });
      fetchDemos();
    } catch (err: any) {
      toast({ title: "Erro ao excluir", description: err.message, variant: "destructive" });
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      toast({ title: "Fazendo upload...", description: "Aguarde enquanto processamos o áudio." });
      const url = await demoService.uploadAudio(file);
      
      // Get duration from file before/during upload
      const audio = new Audio();
      audio.src = URL.createObjectURL(file);
      audio.onloadedmetadata = () => {
        setFormData(prev => ({ 
          ...prev, 
          audio_url: url,
          duration: formatSeconds(audio.duration)
        }));
        URL.revokeObjectURL(audio.src);
      };

      toast({ title: "Upload concluído!", description: "O link e a duração foram atualizados." });
    } catch (err: any) {
      toast({ title: "Erro no upload", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  // Effect to fetch duration if URL is pasted manually
  useEffect(() => {
    if (formData.audio_url && (!formData.duration || formData.duration === "0:00")) {
      const audio = new Audio();
      audio.src = formData.audio_url;
      const timeout = setTimeout(() => {
        audio.onloadedmetadata = () => {
          if (audio.duration && !isNaN(audio.duration)) {
            setFormData(prev => ({ ...prev, duration: formatSeconds(audio.duration) }));
          }
        };
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [formData.audio_url, formData.duration]);

  if (loading && demos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <p className="text-muted-foreground text-sm uppercase tracking-widest">Carregando Biblioteca...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-serif font-bold text-gradient-gold">Biblioteca de Demos</h2>
        <Button onClick={() => {
          setFormData({ 
            title: "", 
            client: "", 
            category: "Comercial", 
            location: "grid", 
            audio_url: "", 
            duration: "0:00", 
            order_index: demos.length + 1 
          });
          setIsAdding(true);
        }} className="bg-gradient-gold text-primary-foreground">
          <Plus className="h-4 w-4 mr-2" /> Nova Demo
        </Button>
      </div>

      {(isAdding || editingId) && (
        <div className="bg-card border border-primary/20 rounded-xl p-6 space-y-4 shadow-xl shadow-primary/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gold uppercase text-xs tracking-widest">
              {isAdding ? "Adicionar Nova Demo" : "Editar Demo"}
            </h3>
            <button onClick={() => { setIsAdding(false); setEditingId(null); }} className="text-muted-foreground hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-muted-foreground">Título</label>
              <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} placeholder="Ex: Luxury Spot Dior" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-muted-foreground">Cliente</label>
              <Input value={formData.client} onChange={(e) => setFormData({ ...formData, client: e.target.value })} placeholder="Ex: Campanha Internacional" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-muted-foreground">Categoria</label>
              <div className="space-y-2">
                <Input 
                  list="categories-list"
                  value={formData.category} 
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
                  placeholder="Selecione ou digite nova..." 
                />
                <datalist id="categories-list">
                  {Array.from(new Set([...CATEGORIES, ...demos.map(d => d.category)])).map(c => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
                <div className="flex flex-wrap gap-1 mt-2">
                  {Array.from(new Set([...CATEGORIES, ...demos.map(d => d.category)])).slice(0, 8).map(c => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setFormData({ ...formData, category: c })}
                      className={`text-[8px] uppercase tracking-tighter px-1.5 py-0.5 rounded border ${
                        formData.category === c ? 'bg-gold text-black border-gold' : 'border-white/10 text-muted-foreground hover:border-white/30'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-muted-foreground">Localização</label>
              <div className="flex gap-2">
                <Button 
                  variant={formData.location === 'hero' ? 'default' : 'outline'} 
                  size="sm" 
                  onClick={() => setFormData({ ...formData, location: 'hero' })}
                  className="flex-1"
                >
                  <MonitorPlay className="h-3 w-3 mr-2" /> Hero
                </Button>
                <Button 
                  variant={formData.location === 'grid' ? 'default' : 'outline'} 
                  size="sm" 
                  onClick={() => setFormData({ ...formData, location: 'grid' })}
                  className="flex-1"
                >
                  <LayoutGrid className="h-3 w-3 mr-2" /> Seção Demos
                </Button>
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] uppercase font-bold text-muted-foreground">URL do Áudio ou Upload</label>
              <div className="flex gap-2">
                <Input value={formData.audio_url} onChange={(e) => setFormData({ ...formData, audio_url: e.target.value })} placeholder="https://..." className="flex-1" />
                <label className="bg-secondary/50 hover:bg-secondary cursor-pointer px-4 py-2 rounded-md border border-border transition-colors flex items-center">
                  <Upload className="h-4 w-4" />
                  <input type="file" accept="audio/*" className="hidden" onChange={handleFileUpload} />
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-muted-foreground">Duração (opcional)</label>
              <Input value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} placeholder="Ex: 0:32" />
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <Button onClick={() => handleSave(editingId || undefined)} className="bg-emerald-600 hover:bg-emerald-500 text-white flex-1">
              <Save className="h-4 w-4 mr-2" /> Salvar Demo
            </Button>
          </div>
        </div>
      )}

      <div className="grid gap-3">
        {demos.map((demo) => (
          <div key={demo.id} className="bg-card border border-border rounded-xl p-4 flex items-center justify-between group hover:border-primary/30 transition-all">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-secondary/50 ${demo.location === 'hero' ? 'text-blue-400' : 'text-emerald-400'}`}>
                {demo.location === 'hero' ? <MonitorPlay size={18} /> : <LayoutGrid size={18} />}
              </div>
              <div>
                <h4 className="font-bold text-sm">{demo.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] uppercase tracking-tighter bg-primary/10 text-primary px-1.5 py-0.5 rounded font-bold">
                    {demo.category}
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    {demo.client}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {demo.duration}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => {
                setFormData(demo);
                setEditingId(demo.id);
                setIsAdding(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}>
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10" onClick={() => handleDelete(demo.id)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
