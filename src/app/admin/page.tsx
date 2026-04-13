"use client";

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Mic, LogOut, Shield, Database, LayoutGrid } from 'lucide-react';
import type { User as SupabaseUser } from '@supabase/supabase-js';

import BriefsManager from '@/components/Admin/BriefsManager';
import DemosManager from '@/components/Admin/DemosManager';

type AdminTab = 'briefings' | 'demos';

export default function AdminPage() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>('briefings');
  const authCheckingRef = useRef(false);
  const router = useRouter();
  const { toast } = useToast();

  const checkAdmin = async (userId: string) => {
    if (authCheckingRef.current) return;
    authCheckingRef.current = true;

    try {
      const { data: roleData, error: roleError } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .eq('role', 'admin')
        .maybeSingle();

      if (roleError) throw roleError;

      if (!roleData) {
        toast({ title: 'Acesso Negado', description: 'Você não tem permissão de admin.', variant: 'destructive' });
        router.push('/login');
        return;
      }

      setIsAdmin(true);
      setPageLoading(false);
    } catch (err: any) {
      console.error('[Admin Auth] Erro de validação:', err);
      toast({ title: 'Erro de autenticação', description: 'Não foi possível validar seu acesso.', variant: 'destructive' });
      router.push('/login');
    } finally {
      authCheckingRef.current = false;
    }
  };

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!session?.user) {
        router.push('/login');
        return;
      }
      setUser(session.user);
      checkAdmin(session.user.id);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.push('/login');
      } else {
        setUser(session.user);
        checkAdmin(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!isAdmin || pageLoading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
        <Mic className="h-10 w-10 text-gold animate-pulse" />
        <p className="text-muted-foreground animate-pulse tracking-widest uppercase text-[0.6rem]">Autenticando Acesso Elite…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation Header */}
      <nav className="bg-card/50 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Mic className="h-5 w-5 text-gold" />
            <span className="font-display font-bold tracking-tight text-white">
              Sanzony<span className="text-gold">.</span>Voz <span className="text-[0.6rem] text-muted-foreground ml-1">ADMIN</span>
            </span>
          </div>

          <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
            <button 
              onClick={() => setActiveTab('briefings')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-[0.6rem] uppercase tracking-widest font-bold transition-all ${
                activeTab === 'briefings' ? 'bg-gold text-black shadow-lg shadow-gold/20' : 'text-muted-foreground hover:text-white'
              }`}
            >
              <Database size={12} /> Briefings
            </button>
            <button 
              onClick={() => setActiveTab('demos')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-[0.6rem] uppercase tracking-widest font-bold transition-all ${
                activeTab === 'demos' ? 'bg-gold text-black shadow-lg shadow-gold/20' : 'text-muted-foreground hover:text-white'
              }`}
            >
              <LayoutGrid size={12} /> Biblioteca Demos
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[0.6rem] text-muted-foreground uppercase tracking-widest hidden md:block">
              {user?.email}
            </span>
            <button
              onClick={async () => { await supabase.auth.signOut(); router.push('/login'); }}
              className="text-muted-foreground hover:text-gold transition-colors p-2"
              title="Encerrar Sessão"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-6 py-8">
        {activeTab === 'briefings' ? <BriefsManager /> : <DemosManager />}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 flex items-center justify-between text-[0.6rem] text-muted-foreground uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <Shield size={10} className="text-gold" />
            <span>Encriptação E2E Ativa</span>
          </div>
          <span>Sanzony.Voz™ Premium Cockpit</span>
        </div>
      </footer>
    </div>
  );
}
