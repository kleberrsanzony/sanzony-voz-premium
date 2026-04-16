"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mic, ArrowLeft, Send, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Fazer Briefing",
  description: "Inicie seu projeto de locução elite. Preencha o briefing técnico para receber uma proposta personalizada.",
  alternates: {
    canonical: "/briefing",
  },
};

const voiceTypes = [
  "Comercial",
  "Locução Elite",
  "Institucional",
  "Publicitária",
  "URA / Espera Telefônica",
  "Documentário",
  "E-learning",
  "Outro",
];

const toneOptions = [
  "Sério / Corporativo",
  "Alegre / Descontraído",
  "Emocional / Dramático",
  "Enérgico / Dinâmico",
  "Calmo / Suave",
  "Autoritário / Confiante",
];

const easePremium = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function BriefingPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    tipo_locucao: "",
    texto: "",
    tom: "",
    regiao: "",
    periodo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("briefs").insert({
      nome: formData.nome.trim(),
      empresa: formData.empresa.trim() || null,
      email: formData.email.trim(),
      whatsapp: formData.whatsapp.trim(),
      tipo_locucao: formData.tipo_locucao,
      texto: formData.texto.trim(),
      tom: formData.tom || null,
      regiao: formData.regiao.trim() || null,
      periodo: formData.periodo.trim() || null,
      status: 'recebido'
    });

    if (error) {
      toast({
        title: "Erro ao enviar",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Briefing enviado!",
        description: "Recebemos seu pedido. Entraremos em contato em breve.",
      });
      setFormData({
        nome: "", empresa: "", email: "", whatsapp: "",
        tipo_locucao: "", texto: "", tom: "", regiao: "", periodo: ""
      });
    }
    setLoading(false);
  };

  const inputClasses =
    "w-full bg-secondary/50 border border-white/5 rounded-md px-4 py-3 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold/50 focus:border-gold/50 transition-all font-body text-sm";
  const labelClasses = "block text-[0.65rem] uppercase tracking-widest font-bold text-gold-dark mb-2";

  return (
    <main className="min-h-screen bg-black">
      <Header />

      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient Glow */}
        <div className="bg-ambient-layer" />

        <div className="container-site relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easePremium }}
          >
            <div className="text-center mb-16">
              <span className="section-label mb-4 block">Produção de Elite</span>
              <h1 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
                Inicie seu <span className="text-gold">Projeto</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                Preencha os detalhes técnicos abaixo. Nossa equipe analisará seu briefing para entregar uma locução com personalidade e impacto.
              </p>
            </div>

            <div className="luxury-card p-8 md:p-12 rounded-2xl border border-white/5 bg-background-surface/80">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className={labelClasses}>Nome Completo <span className="text-gold-mid">*</span></label>
                    <input name="nome" value={formData.nome} onChange={handleChange} required className={inputClasses} placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}>Empresa / Marca</label>
                    <input name="empresa" value={formData.empresa} onChange={handleChange} className={inputClasses} placeholder="Nome da empresa" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className={labelClasses}>E-mail Corporativo</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} className={inputClasses} placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}>WhatsApp de Contato <span className="text-gold-mid">*</span></label>
                    <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className={inputClasses} placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}>Categoria de Locução <span className="text-gold-mid">*</span></label>
                  <select name="tipo_locucao" value={formData.tipo_locucao} onChange={handleChange} required className={inputClasses + " cursor-pointer"}>
                    <option value="" className="bg-black">Selecione uma categoria...</option>
                    {voiceTypes.map((t) => (<option key={t} value={t} className="bg-black">{t}</option>))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}>Script / Texto para Gravação <span className="text-gold-mid">*</span></label>
                  <textarea
                    name="texto"
                    value={formData.texto}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={inputClasses + " resize-none"}
                    placeholder="Insira o texto que será locutado. Inclua observações sobre pronúncia de marcas ou nomes se necessário."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className={labelClasses}>Intencionalidade / Tom</label>
                    <select name="tom" value={formData.tom} onChange={handleChange} className={inputClasses + " cursor-pointer"}>
                      <option value="" className="bg-black">Como deve soar?</option>
                      {toneOptions.map((t) => (<option key={t} value={t} className="bg-black">{t}</option>))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}>Alcance de Veiculação</label>
                    <input name="regiao" value={formData.regiao} onChange={handleChange} className={inputClasses} placeholder="Ex: Nacional, Internet, Regional" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}>Período de Licenciamento</label>
                  <input name="periodo" value={formData.periodo} onChange={handleChange} className={inputClasses} placeholder="Ex: 12 meses, Vitalício" />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 bg-gold text-black rounded-lg font-display font-black text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(224,194,122,0.15)] disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        <span>Processando...</span>
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Enviar Briefing Elite</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-[0.6rem] mt-6 tracking-widest uppercase font-bold opacity-60">
                    <Shield className="h-3 w-3 text-gold-dark" />
                    <span>Ambiente Seguro & Dados Criptografados</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Support info */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                  <Sparkles className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Resposta em 24h</p>
                  <p className="text-muted-foreground text-xs">Análise técnica imediata.</p>
                </div>
              </div>

              <Link href="/" className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground hover:text-gold transition-colors flex items-center gap-2">
                <ArrowLeft className="h-3 w-3" />
                <span>Voltar ao Início</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
