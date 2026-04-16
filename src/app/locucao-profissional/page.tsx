import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Mic2, Star, Zap, CheckCircle2, MessageSquare, Lightbulb, PlayCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locução Profissional | Estúdio Sanzony Voz",
  description: "Serviços de locução profissional com qualidade broadcast. Vozes para comerciais, vídeos institucionais e branding vocal de alto padrão.",
  alternates: {
    canonical: "/locucao-profissional",
  },
};

export default function LocucaoProfissionalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Locução Profissional", "item": "https://www.sanzonyvoz.com.br/locucao-profissional" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como garantir a qualidade profissional na locução?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A qualidade profissional exige um ambiente acusticamente tratado, microfones de alta gama e, acima de tudo, uma interpretação técnica que compreenda os objetivos comerciais do roteiro."
            }
          },
          {
            "@type": "Question",
            "name": "Qual a diferença entre locutor e artista de voz?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enquanto o locutor foca na clareza da fala, o artista de voz foca na interpretação estratégica, trazendo nuances emocionais que conectam a marca ao público."
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
            <span className="section-label mb-6 block">Expertise em Áudio</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              Locução <span className="text-gold">Profissional</span> para Grandes Marcas
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Transforme seu roteiro em uma experiência memorável com uma voz que transmite autoridade, clareza e emoção estratégica.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section 1: Qualidade */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Qualidade de Estúdio Professional (Padrão Broadcast)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada gravação é realizada em um ambiente com tratamento acústico planejado, utilizando equipamentos de ponta para garantir um som limpo e pronto para qualquer meio de veiculação. Ao contrário de uma locução amadora, o padrão elite garante que sua mensagem não sofra distrações técnicas.
              </p>
              <ul className="space-y-4">
                {["Captação em alta fidelidade (WAV 48kHz)", "Tratamento de áudio profissional", "Monitoramento em tempo real"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 size={18} className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden group">
              <Mic2 size={60} className="text-[#e0c27a] opacity-20 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* DEEP CONTENT: When to choose / Applications / Insights */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl h-full">
                <div className="text-gold mb-6"><PlayCircle size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Quando contratar?</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ideal para projetos que exigem credibilidade imediata. Se sua marca precisa transmitir confiança técnica, como em manifestos corporativos ou tutoriais de produtos complexos, a <Link href="/locucao-institucional" className="text-gold hover:underline">locução institucional</Link> é o caminho.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl h-full">
                <div className="text-gold mb-6"><Lightbulb size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Aplicações Reais</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Utilizada em larga escala por agências de publicidade para <Link href="/locucao-para-propaganda" className="text-gold hover:underline">locução para propaganda</Link>, vídeos de treinamento interno (EAD) e e-learning, onde a clareza e a retenção de atenção são fundamentais para o sucesso do conteúdo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl h-full">
                <div className="text-gold mb-6"><Star size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Diferencial Elite</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  O grande erro é subestimar o impacto da voz na percepção de valor. Uma locução premium eleva o ticket médio percebido do seu produto, criando uma ponte de autoridade entre sua marca e o consumidor final.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Internal Link Mesh Footer Section */}
      <section className="py-16 border-b border-white/5">
        <div className="container-site">
          <div className="flex flex-wrap justify-between items-center gap-6 text-[0.6rem] uppercase tracking-widest text-muted-foreground">
             <Link href="/" className="hover:text-gold transition-colors">Página Inicial</Link>
             <Link href="/locucao-premium" className="hover:text-gold transition-colors">Tier Premium</Link>
             <Link href="/faq" className="hover:text-gold transition-colors">Dúvidas Técnicas</Link>
             <Link href="/brazilian-portuguese-voice-over" className="hover:text-gold transition-colors">International Version</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-20 bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl border border-white/10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold shadow-[0_0_20px_rgba(224,194,122,0.3)]" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                Comece seu projeto com <br />
                <span className="text-gold font-light">clareza e autoridade.</span>
              </h2>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-12 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-[0_0_40px_rgba(224,194,122,0.2)]"
                aria-label="Enviar briefing e solicitar orçamento para locução profissional"
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
