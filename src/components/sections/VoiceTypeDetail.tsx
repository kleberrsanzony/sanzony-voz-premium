"use client";

import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, ArrowRight, Home } from "lucide-react";
import Link from "next/link";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

interface VoiceTypeDetailProps {
  item: {
    id: string;
    title: string;
    shortDescription: string;
    category: string;
    benefits: string[];
    whyInvest: string;
    objectionBreak: string;
    ctaText: string;
    ctaLink: string;
  };
  relatedItems: {
    id: string;
    title: string;
    shortDescription: string;
  }[];
  translations: {
    backToHub: string;
    whyInvest: string;
    benefits: string;
    objection: string;
    requestQuote: string;
    backHome: string;
    relatedTitle: string;
    exploreMore: string;
  };
}

export default function VoiceTypeDetail({ item, relatedItems, translations }: VoiceTypeDetailProps) {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="bg-ambient-layer opacity-15" />
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <Link 
              href="/tipos-de-locucao" 
              className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors text-xs uppercase tracking-widest mb-8 font-medium group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              {translations.backToHub}
            </Link>
            <span className="section-label mb-6 block">{item.category}</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              {item.title}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {item.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strategic Content */}
      <section className="py-24 border-t border-white/5 bg-[#030303]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <Reveal x={-20}>
              <div className="space-y-12">
                <div>
                  <h2 className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-gold/30"></span>
                    {translations.whyInvest}
                  </h2>
                  <p className="text-white text-xl md:text-2xl font-display leading-tight">
                    {item.whyInvest}
                  </p>
                </div>

                <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative group hover:border-gold/20 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[0.6rem] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4 block">
                    {translations.objection}
                  </span>
                  <p className="text-white/80 italic text-lg leading-relaxed">
                    "{item.objectionBreak}"
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal x={20} delay={0.2}>
              <div className="space-y-10">
                <h2 className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/30"></span>
                  {translations.benefits}
                </h2>
                <div className="grid gap-6">
                  {item.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.01] hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all">
                      <div className="mt-1 bg-gold/10 p-1.5 rounded-full">
                        <CheckCircle2 size={16} className="text-gold" />
                      </div>
                      <span className="text-white/70 text-base leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related Specialties Section */}
      {relatedItems.length > 0 && (
        <section className="py-24 border-t border-white/5 bg-black">
          <div className="container-site">
            <Reveal>
              <div className="mb-16">
                <h2 className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/30"></span>
                  {translations.relatedTitle}
                </h2>
                <p className="text-muted-foreground text-sm max-w-xl">
                  {translations.exploreMore}
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedItems.map((rel, i) => (
                <Reveal key={rel.id} delay={i * 0.1}>
                  <Link 
                    href={rel.id} 
                    className="group block p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all h-full"
                  >
                    <h3 className="text-white font-display font-bold text-xl mb-3 group-hover:text-gold transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity text-[0.6rem] uppercase tracking-widest font-bold">
                      Explorar página <ArrowRight size={10} />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation Mesh */}
      <section className="py-16 border-y border-white/5 bg-black">
        <div className="container-site">
           <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[0.6rem] uppercase tracking-widest text-muted-foreground font-bold">
            <Link href="/" className="hover:text-gold transition-colors flex items-center gap-2">
              <Home size={12} /> {translations.backHome}
            </Link>
            <Link href="/tipos-de-locucao" className="hover:text-gold transition-colors">Hub de Serviços</Link>
            <Link href="/briefing" className="hover:text-gold transition-colors">Briefing Online</Link>
            <Link href="/briefing" className="hover:text-gold transition-colors">Falar com Consultor</Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 blur-[120px] opacity-20 pointer-events-none" />
        <div className="container-site">
          <Reveal>
            <div className="p-12 md:p-24 rounded-[3rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center relative backdrop-blur-sm">
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-10 tracking-tight">
                Eleve o padrão do seu <br />
                <span className="text-gold">projeto hoje mesmo.</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Button asChild className="h-16 px-10 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-sm shadow-[0_0_30px_rgba(224,194,122,0.2)]">
                  <Link href={item.ctaLink}>
                    {item.ctaText}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
                <Link href="/briefing" className="text-white/60 hover:text-white transition-colors text-xs uppercase tracking-widest font-bold">
                  Dúvidas? Fale conosco
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
