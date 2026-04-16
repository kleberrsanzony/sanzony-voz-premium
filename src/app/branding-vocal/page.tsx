import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Sparkles, Brain, Target, Compass, Search, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Branding Vocal | Identidade Sonora Estratégica",
  description: "Desenvolvimento de identidade de voz para marcas. Branding vocal estratégico para criar conexões emocionais profundas e autoridade de mercado.",
  alternates: {
    canonical: "/branding-vocal",
  },
};

export default function BrandingVocalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Branding Vocal", "item": "https://www.sanzonyvoz.com.br/branding-vocal" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Por que o branding vocal é importante para o posicionamento de marca?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O branding vocal humaniza a marca, cria reconhecimento imediato em pontos de contato sonoros e estabelece uma conexão emocional que o design visual sozinho não consegue atingir."
            }
          },
          {
            "@type": "Question",
            "name": "Como é definido o tom de voz de uma empresa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O tom é definido através de uma análise profunda da cultura da empresa, do perfil do público-alvo e dos arquétipos que a marca deseja projetar no mercado."
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
            <span className="section-label mb-6 block">Estratégia & Identidade</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              Branding <span className="text-gold">Vocal</span>: A Identidade que sua Marca Ouve
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Vá além do visual. Construa uma personalidade sonora única que torne sua marca inconfundível em todos os pontos de contato e gere valor real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section 1: Psicologia Audio */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                A Psicologia por trás da Voz
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A voz humana é um dos gatilhos mais poderosos para confiança e reconhecimento. O branding vocal estratégico define os atributos de personalidade da sua marca e os traduz em timbres, ritmos e tons que ressoam com seu público-alvo, elevando o projeto ao nível de <Link href="/locucao-premium" className="text-gold hover:underline">locução premium</Link>.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Brain size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Conexão Subconsciente</h4>
                  <p className="text-xs text-muted-foreground">O tom de voz certo cria lealdade instintiva e autoridade de mercado.</p>
                </div>
              </div>
            </Reveal>
            <div className="relative aspect-square flex items-center justify-center p-12 bg-white/[0.02] border border-white/5 rounded-full overflow-hidden">
              <Compass size={120} className="text-[#e0c27a] opacity-5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* DEEP CONTENT: When to choose / Applications / Standards */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full flex flex-col">
                <div className="text-gold mb-6"><Search size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Quando investir?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ideal para empresas em fase de reposicionamento ou expansão que precisam de uma diretriz de voz clara. Complementa perfeitamente a <Link href="/locucao-profissional" className="text-gold hover:underline">locução profissional</Link> ao dar um norte interpretativo único.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full flex flex-col">
                <div className="text-gold mb-6"><Heart size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Valor Emocional</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Essencial para criar empatia e proximidade. Marcas que possuem uma <Link href="/locucao-para-propaganda" className="text-gold hover:underline">identidade vocal</Link> consistente são percebidas como mais humanas e confiáveis, facilitando a decisão de compra do cliente.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full flex flex-col">
                <div className="text-gold mb-6"><ShieldCheck size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Expertise Técnica</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Não é apenas sobre "ter uma voz", mas sobre ter a voz certa. Nosso processo envolve análise de arquétipos e engenharia sonora para garantir que a <Link href="/brazilian-portuguese-voice-over" className="text-gold hover:underline">presença vocal</Link> seja impecável em qualquer idioma.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internal Navigation Mesh Footer Section */}
      <section className="py-16 border-b border-white/5">
        <div className="container-site">
          <div className="flex flex-wrap justify-between items-center gap-6 text-[0.6rem] uppercase tracking-widest text-muted-foreground font-semibold">
             <Link href="/" className="hover:text-gold transition-colors">Página Inicial</Link>
             <Link href="/locucao-premium" className="hover:text-gold transition-colors">Serviço Premium</Link>
             <Link href="/faq" className="hover:text-gold transition-colors">Perguntas Técnicas</Link>
             <Link href="/en" className="hover:text-gold transition-colors">International Strategy</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-gradient-to-br from-[#111] to-black rounded-[3rem] border border-white/10 text-center relative shadow-[0_40px_100px_rgba(0,0,0,1)] group">
             <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                Como soa a <span className="text-gold">alma da sua marca?</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-10">
                Inicie um processo de branding vocal estratégico e defina o tom que posicionará sua empresa no mercado de elite com clareza e autoridade.
              </p>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-10 bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all rounded-md shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                aria-label="Dar início ao processo de definição da identidade sonora e branding vocal da marca"
              >
                Definir Minha Identidade
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
