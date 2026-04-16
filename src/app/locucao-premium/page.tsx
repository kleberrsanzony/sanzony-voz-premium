import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Crown, Gem, Award, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locução Premium | Studio Sanzony Voz",
  description: "Exclusividade e sofisticação em locução. Vozes de alto padrão para marcas de luxo, campanhas de elite e branding vocal sofisticado.",
  alternates: {
    canonical: "/locucao-premium",
  },
};

export default function LocucaoPremiumPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Locução Premium", "item": "https://www.sanzonyvoz.com.br/locucao-premium" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que define uma locução como sendo de alto padrão (Premium)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A locução premium é definida pela raridade do timbre, pela sofisticação da interpretação e pela capacidade do artista em elevar a percepção de valor da marca através da voz."
            }
          },
          {
            "@type": "Question",
            "name": "Como a locução premium ajuda no branding de luxo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ela atua como um sinal de prestígio imediato, conectando-se com públicos exigentes através de nuances sutis que apenas equipamentos e talentos de elite conseguem captar."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <span className="section-label mb-6 block">Tier de Elite</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              Locução <span className="text-gold">Premium</span> para Marcas de Luxo
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              A sofisticação vocal que sua marca merece. Atendimento exclusivo para projetos que exigem o ápice da qualidade, distinção e valor real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section 1: Exclusividade */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Curadoria Vocal e Exclusividade
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Toda grande marca de luxo possui uma identidade sonora inconfundível. Oferecemos uma abordagem de locução premium focada na diferenciação estratégica. Se você busca <Link href="/branding-vocal" className="text-gold hover:underline">branding vocal</Link> de alto nível, sua busca termina aqui.
              </p>
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-gold/10 border border-gold/20">
                  <Crown size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Design Sonoro Elite</h4>
                  <p className="text-xs text-muted-foreground">Voz desenhada meticulosamente para o mercado high-end.</p>
                </div>
              </div>
            </Reveal>
            <div className="relative aspect-square md:aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
              <Gem size={80} className="text-[#e0c27a] opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* DEEP CONTENT: When to choose / Applications / Quality */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-2xl h-full flex flex-col">
                <div className="text-gold mb-6"><Sparkles size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Quando escolher?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  A escolha ideal para manifestos de marca, lançamentos de produtos de luxo e campanhas de posicionamento onde a <Link href="/locucao-profissional" className="text-gold hover:underline">locução profissional</Link> padrão não é suficiente para o nível de sofisticação exigido.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-2xl h-full flex flex-col">
                <div className="text-gold mb-6"><Target size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Valor para Marcas</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  Utilizada para criar um distanciamento qualitativo da concorrência. Marcas que investem em locução premium são percebidas como líderes de categoria, transmitindo uma aura de autoridade e cuidado em cada detalhe.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-2xl h-full flex flex-col">
                <div className="text-gold mb-6"><Zap size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Padrão Elite</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  Trabalhamos com equipamentos selecionados que capturam a textura e o calor da voz com fidelidade absoluta. É o som imersivo que o seu cliente espera de uma marca que não abre mão da excelência.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internal Navigation Mesh */}
      <section className="py-16 border-b border-white/5">
        <div className="container-site">
          <div className="flex flex-wrap justify-center gap-10 text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/locucao-profissional" className="hover:text-gold transition-colors">Tier Profissional</Link>
            <Link href="/faq" className="hover:text-gold transition-colors">Central de Ajuda</Link>
            <Link href="/en" className="hover:text-gold transition-colors">International Clients</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-black rounded-3xl border border-gold/10 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold/[0.02] group-hover:bg-gold/[0.04] transition-colors duration-700" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-7xl text-white mb-8">
                Leve seu branding ao <br />
                <span className="text-gold italic font-light">ápice do mercado.</span>
              </h2>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-12 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-[0_0_50px_rgba(224,194,122,0.3)]"
                aria-label="Dar início ao briefing para contratar serviço de locução premium de alto padrão"
              >
                Solicitar Reserva Premium
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
