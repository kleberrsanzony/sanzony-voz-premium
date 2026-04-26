"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, LogIn, Shield, Mic2 } from "lucide-react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) {
        toast({ title: "Erro ao cadastrar", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Conta criada!", description: "Verifique seu e-mail para confirmar o cadastro." });
      }
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      // Anti-enumeration: unified error message
      toast({ 
        title: "Erro ao entrar", 
        description: "E-mail ou senha incorretos", 
        variant: "destructive" 
      });
      setLoading(false);
      return;
    }

    // Protection against session fixation: Supabase handles this by generating a new session on sign in.
    
    router.push("/admin");
    setLoading(false);
  };

  const inputClasses =
    "w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors";

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 selection:bg-gold/20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="w-full max-w-md bg-card/40 backdrop-blur-xl border border-white/5 rounded-2xl p-10 relative z-10 shadow-2xl shadow-gold/5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="border-b border-white/5 py-5">
        <div className="container mx-auto px-6">
          <Link href="/" className="font-display font-bold text-lg tracking-tight text-white group flex items-center gap-2">
            <Mic2 size={18} className="text-gold group-hover:scale-110 transition-transform" />
            <span>Sanzony<span className="text-gold">.</span>Voz</span>
          </Link>
        </div>
      </header>
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl font-bold">Painel Admin</h1>
          <p className="text-muted-foreground text-sm mt-2">Acesse o painel de gerenciamento</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClasses}
              placeholder="admin@sanzony.com"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-muted-foreground">Senha</label>
              <Link href="/forgot-password"
                className="text-xs text-primary hover:text-primary/80 transition-colors"
              >
                Esqueci minha senha
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={inputClasses}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-md font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <LogIn className="h-4 w-4" />
            {loading ? (isSignUp ? "Cadastrando..." : "Entrando...") : (isSignUp ? "Cadastrar" : "Entrar")}
          </button>
        </form>

        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full text-center text-sm text-muted-foreground hover:text-primary transition-colors mt-4"
        >
          {isSignUp ? "Já tem conta? Entrar" : "Não tem conta? Cadastrar"}
        </button>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mt-6">
          <Shield className="h-3 w-3 text-primary" />
          <span>Acesso restrito a administradores</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
