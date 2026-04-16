import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Mic2, Headphones, Activity, ShieldCheck, Zap, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locução em Home Studio Profissional | Qualidade Broadcast",
  description: "Locução profissional gravada em home studio de alta performance. Qualidade de áudio de estúdio comercial com a agilidade e custo-benefício que sua marca precisa.",
  alternates: {
    canonical: "/home-studio-voice-over",
  },
};

export default function HomeStudioPTPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sanzonyvoz.com.br" },
          { "@type": "ListItem", "position": 2, "name": "Home Studio Profissional", "item": "https://www.sanzonyvoz.com.br/home-studio-voice-over" }
        ]
      },
      {
        "@type": "Service",
        "name": "Locução em Home Studio de Elite",
        "description": "Serviços de gravação de voz com tratamento acústico profissional e equipamentos de ponta."
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
            <span className="section-label mb-6 block text-gold">Infraestrutura de Ponta</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight mb-8">
              Locução em <span className="text-gold">Home Studio</span> Profissional
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Qualidade broadcast sem intermediários. Áudio cristalino, tratamento acústico de elite e entrega ultra-rápida para o seu projeto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Tecnologia de Estúdio Comercial ao seu Alcance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Operamos com uma cadeia de sinal de alto padrão, garantindo que sua <Link href="/locucao-profissional" className="text-gold hover:underline">locução profissional</Link> seja entregue com transparência absoluta. Nosso ambiente é projetado para eliminar ruídos e reflexões, entregando um som encorpado e presente.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[ "Tratamento Acústico ISO", "Microfones de Elite", "Interfaces de Alta Fidelidade", "Monitoramento Crítico" ].map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-[0.7rem] uppercase tracking-wider font-bold text-white/70">
                    <CheckCircle2 size={14} className="text-gold" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden group">
               <Mic2 size={80} className="text-gold opacity-10 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content Blocks: When / Results / Standards */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full flex flex-col">
                <div className="text-gold mb-6"><Zap size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Foco em Agilidade</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  A locução em home studio permite ciclos de feedback muito mais curtos. Precisa de um ajuste imediato em um <Link href="/locucao-para-propaganda" className="text-gold hover:underline">spot publicitário</Link>? Nossa estrutura está sempre pronta.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full flex flex-col">
                <div className="text-gold mb-6"><Activity size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Custo-Benefício Elite</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  Eliminamos custos de locação de estúdios externos, permitindo que você invista em uma <Link href="/locucao-premium" className="text-gold hover:underline">locução premium</Link> com valores competitivos e resultados superiores.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-[2rem] h-full flex flex-col">
                <div className="text-gold mb-6"><ShieldCheck size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Padrão de Entrega</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">
                  Seguimos normas técnicas internacionais de áudio, garantindo que <Link href="/en/voice-over-with-home-studio" className="text-gold hover:underline">clientes globais</Link> recebam arquivos prontos para veiculação em qualquer plataforma.
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
              <Link href="/locucao-institucional" className="hover:text-gold transition-colors">Institucional</Link>
              <Link href="/faq" className="hover:text-gold transition-colors">Dúvidas Técnicas</Link>
              <Link href="/voice-over-brazil" className="hover:text-gold transition-colors">Global Clients</Link>
           </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-24 bg-black rounded-3xl border border-white/10 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
             <div className="absolute inset-0 bg-gold/[0.01] pointer-events-none" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-7xl text-white mb-8">
                Som de estúdio comercial <br />
                <span className="text-gold font-light italic">com a agilidade digital.</span>
              </h2>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-12 bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all rounded-md shadow-2xl"
                aria-label="Dar início ao briefing para contratar serviço de locução profissional gravada em home studio"
              >
                Solicitar Gravação Agora
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
