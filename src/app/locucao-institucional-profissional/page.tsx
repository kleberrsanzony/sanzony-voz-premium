import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Building2, ShieldCheck, Award, ArrowRight, Briefcase, FileSignature, HelpCircle } from "lucide-react";
import Link from "next/link";
import SetLanguage from "@/components/i18n/SetLanguage";

export const metadata: Metadata = {
  title: "Locução Institucional Profissional | Autoridade e Branding para Marcas",
  description: "Eleve o nível do seu vídeo corporativo com locução institucional profissional. Vozes que transmitem confiança, sobriedade e sofisticação para marcas de elite.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/locucao-institucional-profissional",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/locucao-institucional-profissional",
    },
  },
  openGraph: {
    title: "Locução Institucional para Empresas e Vídeos Corporativos",
    description: "Sua empresa merece uma voz que transmita autoridade e credibilidade. Conheça nossa solução de locução institucional premium.",
    url: "https://www.sanzonyvoz.com.br/locucao-institucional-profissional",
    type: "article",
  }
};

export default function LocucaoInstitucionalProfissionalPage() {
  const faqData = [
    {
      q: "Qual a diferença entre locução comercial e institucional?",
      a: "A comercial foca em venda direta e ação imediata. A institucional foca no posicionamento de marca, valores e autoridade, exigindo uma interpretação mais sóbria e empática."
    },
    {
      q: "Como escolher o tom de voz para um vídeo corporativo?",
      a: "O tom depende da cultura da empresa e do público. Marcas de luxo pedem tons aveludados; empresas de tecnologia buscam dinamismo; instituições financeiras focam em sobriedade."
    },
    {
      q: "Vocês gravam manifestos de marca?",
      a: "Sim. O manifesto é uma das formas mais poderosas de locução institucional, exigindo uma entrega emocional profunda para conectar os valores da marca ao coração do cliente."
    },
    {
      q: "A locução já vem editada e masterizada?",
      a: "Sim. Nossas vozes são entregues prontas para aplicação, com tratamento de estúdio profissional, limpeza de ruídos e masterização broadcast."
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
            <span className="section-label mb-6 block">Autoridade & Trust</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              Locução <span className="text-gold">Institucional</span> de Alta Performance
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Transforme apresentações corporativas em experiências memoráveis. A voz certa posiciona sua marca no topo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Corporate Authority Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Sua Marca <span className="text-gold font-light italic">Merece Ser Ouída</span> com Respeito.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Um <Link href="/tipos-de-locucao/locucao-institucional" className="text-gold hover:underline">vídeo institucional</Link> é o cartão de visitas da sua empresa no digital. Ignorar a qualidade da voz é ignorar a percepção de valor que o seu cliente terá sobre seu negócio.
              </p>
              <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <ShieldCheck className="text-gold" size={20} />
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest">Confiança</h4>
                    <p className="text-[0.7rem] text-muted-foreground">Timbres que inspiram estabilidade e solidez institucional.</p>
                 </div>
                 <div className="space-y-2">
                    <Award className="text-gold" size={20} />
                    <h4 className="text-white font-bold text-xs uppercase tracking-widest">Sofisticação</h4>
                    <p className="text-[0.7rem] text-muted-foreground">Interpretação polida para marcas premium e eventos globais.</p>
                 </div>
              </div>
            </Reveal>
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-10 flex items-center justify-center aspect-square">
               <Building2 size={120} className="text-gold opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
           <div className="text-center mb-16">
              <h3 className="section-label mb-4">Pilares do Branding Vocal</h3>
              <h2 className="text-white font-display font-bold text-3xl">Onde a Voz Corporativa Atua</h2>
           </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Briefcase size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Vídeos de Case</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Narração para cases de sucesso que precisam convencer novos parceiros e investidores através de dados e emoção equilibrada.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><FileSignature size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Manifestos</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A alma da marca traduzida em palavras. Tom inspirador para campanhas de <Link href="/tipos-de-locucao/manifestos-de-marca" className="text-gold hover:underline">manifestos de marca</Link>.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Award size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Treinamentos</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Voz clara e didática para <Link href="/tipos-de-locucao/treinamentos-e-learning" className="text-gold hover:underline">e-learning</Link>, garantindo a retenção do conteúdo pelos colaboradores.
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
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Corporate FAQ</h2>
              <p className="text-muted-foreground">Tudo o que você precisa saber sobre voz institucional.</p>
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
            <Link href="/tipos-de-locucao/locucao-institucional" className="hover:text-gold transition-colors">Hub Institucional</Link>
            <Link href="/tipos-de-locucao/locucao-corporativa" className="hover:text-gold transition-colors">Corporativo</Link>
            <Link href="/quanto-custa-locucao" className="hover:text-gold transition-colors">Preços</Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-20 bg-gradient-to-b from-white/[0.03] to-transparent rounded-3xl border border-white/5 text-center relative overflow-hidden">
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                Posicione sua marca <br />
                <span className="text-gold italic">com quem entende de voz.</span>
              </h2>
              <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                Seja para um vídeo de 1 minuto ou uma série de treinamentos, entregamos autoridade em cada palavra.
              </p>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-10 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-[0_0_30px_rgba(224,194,122,0.2)]"
                aria-label="Contratar locução institucional profissional e iniciar briefing"
              >
                Solicitar Orçamento Institucional <ArrowRight size={16} className="ml-2" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
