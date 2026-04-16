import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { FileText, Building2, Users, CheckCircle2, PlayCircle, ShieldCheck, Target } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locução Institucional e Corporativa | Studio Sanzony Voz",
  description: "Voz de autoridade para vídeos institucionais, manifestos corporativos e tutoriais. Transmita credibilidade e confiança com uma locução de alto padrão.",
  alternates: {
    canonical: "/locucao-institucional",
  },
};

export default function LocucaoInstitucionalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Locução Institucional", "item": "https://www.sanzonyvoz.com.br/locucao-institucional" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é locução institucional?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "É o estilo de locução voltado para vídeos corporativos, apresentações de resultados e manifestos de marca, onde o foco principal é transmitir credibilidade, seriedade e clareza."
            }
          },
          {
            "@type": "Question",
            "name": "Qual o perfil de voz ideal para vídeos corporativos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O perfil ideal costuma ser uma voz média-grave, com dicção impecável e uma interpretação que inspire confiança no público interno e externo da empresa."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <span className="section-label mb-6 block text-gold">Autoridade & Credibilidade</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              Locução <span className="text-gold">Institucional</span> e Corporativa
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              A voz que traduz a solidez da sua empresa. Especialista em vídeos institucionais, manifestos e projetos que exigem o máximo de confiança.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Corporate Specs Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Construindo a Voz da sua Organização
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vídeos institucionais são a face auditiva de uma marca. Oferecemos uma <Link href="/locucao-profissional" className="text-gold hover:underline">locução profissional</Link> focada em transmitir os valores fundamentais da sua empresa com sobriedade e elegância, garantindo que sua mensagem corporativa seja ouvida com total atenção.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Building2 size={18} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">Manifestos</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest font-bold">Treinamentos</span>
                </div>
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <Users size={80} className="text-[#e0c27a] opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content Blocks: Context / Value / Mastery */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
             <Reveal delay={0.1}>
               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                 <div className="text-gold mb-6"><PlayCircle size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4 text-left font-display">Quando aplicar?</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                   Ideal para integração de novos colaboradores, apresentações de investidores e <Link href="/branding-vocal" className="text-gold hover:underline">rebranding sonoro</Link>. A locução institucional correta elimina barreiras de comunicação.
                 </p>
               </div>
             </Reveal>
             <Reveal delay={0.2}>
               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                 <div className="text-gold mb-6"><Target size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4 text-left font-display">Valor para a Marca</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                   Uma voz institucional firme projeta segurança e expertise. É o que diferencia uma startup de uma empresa consolidada no mercado, elevando o projeto para o patamar de <Link href="/locucao-premium" className="text-gold hover:underline">locução premium</Link>.
                 </p>
               </div>
             </Reveal>
             <Reveal delay={0.3}>
               <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                 <div className="text-gold mb-6"><ShieldCheck size={24} /></div>
                 <h3 className="text-white font-display font-bold text-xl mb-4 text-left font-display">Domínio Técnico</h3>
                 <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                   Nossa entrega para <Link href="/brazilian-portuguese-voice-over" className="text-gold hover:underline">clientes globais</Link> garante que a tradução cultural do roteiro institucional seja impecável, respeitando as nuances do português brasileiro de elite.
                 </p>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Internal SEO Mesh Navigation */}
      <section className="py-16 border-b border-white/5">
        <div className="container-site">
           <div className="flex flex-wrap justify-between items-center gap-6 text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <Link href="/locucao-para-propaganda" className="hover:text-gold transition-colors">Tier Publicitário</Link>
              <Link href="/faq" className="hover:text-gold transition-colors">Dúvidas Técnicas</Link>
              <Link href="/en" className="hover:text-gold transition-colors">International Quotes</Link>
           </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-20 bg-gradient-to-br from-[#111] to-black rounded-3xl border border-white/10 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gold shadow-[0_0_20px_rgba(224,194,122,0.3)]" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                Sua empresa merece <br />
                <span className="text-gold font-light">um tom de liderança.</span>
              </h2>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-12 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-2xl"
                aria-label="Dar início ao briefing para contratar serviço de locução institucional e corporativa"
              >
                Solicitar Orçamento
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
