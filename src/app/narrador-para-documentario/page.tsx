import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Mic2, BookOpen, Film, ArrowRight, Headphones, Volume2, HelpCircle, Speaker } from "lucide-react";
import Link from "next/link";
import SetLanguage from "@/components/i18n/SetLanguage";

export const metadata: Metadata = {
  title: "Narrador para Documentário e Audiobooks | Voz Profissional para Longa Narração",
  description: "Dê vida à sua história com um narrador profissional para documentários, séries, audiobooks e manifestos. Locução interpretativa com profundidade e emoção.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/narrador-para-documentario",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/narrador-para-documentario",
    },
  },
  openGraph: {
    title: "Narrador Profissional para Documentários e Séries",
    description: "Vozes que narram com alma. Conteúdo de longa duração exige técnica e resistência vocal superior.",
    url: "https://www.sanzonyvoz.com.br/narrador-para-documentario",
    type: "article",
  }
};

export default function NarradorDocumentarioPage() {
  const faqData = [
    {
      q: "Como manter a linearidade da voz em documentários longos?",
      a: "A narração de longa duração exige resistência vocal e controle absoluto da cadência. Gravamos em sessões controladas para garantir que o timbre e a energia sejam os mesmos do primeiro ao último minuto."
    },
    {
      q: "Vocês trabalham com narração interpretativa?",
      a: "Sim. Um bom narrador de documentário precisa saber quando ser apenas descritivo e quando adicionar camadas dramáticas para guiar a jornada emocional do expectador."
    },
    {
      q: "Qual o equipamento usado para narrações de alta fidelidade?",
      a: "Utilizamos microfones padrão ouro da indústria (como Neumann U87 ou Sennheiser MKH416) em ambiente com tratamento acústico rigoroso, garantindo áudio cristalino para cinema e streaming."
    },
    {
      q: "Vocês narram audiobooks também?",
      a: "Sim. Possuímos expertise em narração literária, respeitando a pontuação, o ritmo e a criação de atmosfera necessária para o formato de áudio-livro."
    }
  ];

  return (
    <main className="min-h-screen bg-black">
      <SetLanguage lang="pt" />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="container-site relative z-10 text-center">
          <Reveal>
            <span className="section-label mb-6 block">Storytelling & Imersão</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              A Voz que <span className="text-gold italic">Conta Histórias</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Projetos de longa duração exigem mais do que uma voz bonita; exigem técnica, alma e consistência.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Narrative Depth Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Narração para <span className="text-gold">Cinema e Streaming.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Documentários e séries não são apenas informação — são jornadas. Um <Link href="/tipos-de-locucao/locucao-profissional" className="text-gold hover:underline">narrador profissional</Link> atua como o guia dessa jornada, equilibrando sobriedade com emoção para manter o público imerso do início ao fim.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-sm text-white/80">
                    <Headphones size={18} className="text-gold" />
                    <span>Resistência vocal para gravações extensas</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-white/80">
                    <Mic2 size={18} className="text-gold" />
                    <span>Equipamento de alta fidelidade (Hi-Res Audio)</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-white/80">
                    <Volume2 size={18} className="text-gold" />
                    <span>Controle dinâmico e cadência cinematográfica</span>
                 </div>
              </div>
            </Reveal>
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 flex items-center justify-center aspect-video overflow-hidden">
               <Film size={80} className="text-gold opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Grid */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><BookOpen size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Audiobooks</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Narração literária para obras de ficção e não-ficção, com foco em clareza, ritmo e interpretação de atmosfera.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Film size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Documentários</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Vozes para produções de natureza, história, crimes reais (true crime) e perfis biográficos.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Speaker size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Manifestos</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Aplicações em manifestos de longa duração para museus, exposições e lançamentos de marcas de luxo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-b border-white/5">
        <div className="container-site">
          <Reveal>
            <div className="mb-16 text-center">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Narration FAQ</h2>
              <p className="text-muted-foreground">O que você precisa saber sobre projetos de voz longa.</p>
            </div>
          </Reveal>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqData.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/5">
                  <h3 className="text-white font-display font-bold text-lg mb-3 flex items-center gap-3">
                    <HelpCircle size={18} className="text-gold shrink-0" />
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Navigation Mesh */}
      <section className="py-16 border-b border-white/5 bg-black">
        <div className="container-site">
           <div className="flex flex-wrap justify-center gap-10 text-[0.65rem] uppercase tracking-widest text-muted-foreground font-medium">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <Link href="/tipos-de-locucao/treinamentos-e-learning" className="hover:text-gold transition-colors">Educação</Link>
            <Link href="/locucao-institucional-profissional" className="hover:text-gold transition-colors">Institucional</Link>
            <Link href="/quanto-custa-locucao" className="hover:text-gold transition-colors">Preços</Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-20 bg-gradient-to-t from-black to-white/[0.03] rounded-3xl border border-white/5 text-center relative overflow-hidden">
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                Toda grande história <br />
                <span className="text-gold font-light">precisa de uma grande narração.</span>
              </h2>
              <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                Vamos dar voz ao seu projeto documental ou literário com o padrão de qualidade Sanzony.
              </p>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-10 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-xl"
                aria-label="Contratar narrador para documentário e audiobooks"
              >
                Solicitar Narração Online <ArrowRight size={16} className="ml-2" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
