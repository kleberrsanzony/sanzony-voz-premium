import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { DollarSign, Wallet, ArrowRight, CheckCircle2, FileText, Clock, HelpCircle } from "lucide-react";
import Link from "next/link";
import SetLanguage from "@/components/i18n/SetLanguage";
import { ValueBreakdownChart } from "@/components/illustrations/ValueBreakdownChart";

export const metadata: Metadata = {
  title: "Quanto Custa uma Locução Profissional em 2026? Tabela e Valores",
  description: "Entenda os preços de locução profissional no Brasil. Variáveis de custo, direitos de uso, prazos e como obter o melhor custo-benefício para seu projeto.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/quanto-custa-locucao",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/quanto-custa-locucao",
    },
  },
  openGraph: {
    title: "Quanto Custa uma Locução Profissional? Guia de Preços",
    description: "Tudo o que você precisa saber sobre valores de locução profissional, direitos de uso e orçamentos.",
    url: "https://www.sanzonyvoz.com.br/quanto-custa-locucao",
    type: "article",
  }
};

export default function QuantoCustaLocucaoPage() {
  const faqData = [
    {
      q: "Qual o valor médio de um spot de 30 segundos?",
      a: "O valor varia conforme a praça (local de exibição) e o tempo de veiculação. Spots regionais têm valores diferentes de campanhas nacionais. Solicite um orçamento para obter o valor exato para sua necessidade."
    },
    {
      q: "Direitos de uso influenciam no preço?",
      a: "Sim. A locução profissional é cobrada pelo trabalho de gravação ('buy-out') mais o direito de exibição em mídias específicas (TV, Rádio, Internet) por um período determinado."
    },
    {
      q: "Existe taxa de urgência para entregas rápidas?",
      a: "No Studio Sanzony Voz, o padrão broadcast de agilidade já faz parte do nosso workflow. Na maioria dos casos, não cobramos taxas extras por entregas em até 24h."
    },
    {
      q: "Como o número de palavras afeta o custo?",
      a: "Para conteúdos longos como E-learning ou Institucionais, o valor costuma ser calculado por volume de texto ou tempo de áudio final, garantindo escalabilidade para o projeto."
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
            <span className="section-label mb-6 block">Investimento & Valor</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              Quanto Custa uma <span className="text-gold">Locução Profissional</span>?
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Transparência e resultados. Entenda as variáveis que compõem o preço de uma voz de elite e como investir no branding vocal da sua marca.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Variables Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                O que define o valor de uma locução?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Ao contratar um <Link href="/tipos-de-locucao/locucao-profissional" className="text-gold hover:underline">locutor profissional</Link>, você não está pagando apenas por alguns segundos de áudio. O investimento contempla técnica, equipamentos de ponta, tratamento acústico e, principalmente, os direitos de exploração comercial da obra.
              </p>
              <ul className="space-y-4">
                {[
                  "Tempo de áudio total ou número de palavras",
                  "Meio de veiculação (TV, Rádio, Internet, PDV)",
                  "Praça de exibição (Regional, Estadual ou Nacional)",
                  "Período de uso (3 meses, 6 meses, 1 ano ou indeterminado)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 size={16} className="text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} blur={false}>
              <ValueBreakdownChart />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategic Value Grid */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><FileText size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Orçamento Personalizado</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Cada projeto é único. Atuamos com uma política de preços justa que respeita as tabelas de referência do mercado, adequando-se ao tamanho da sua produção.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Clock size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Agilidade Sem Custo Extra</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Tratamos sua campanha com prioridade. Nossa estrutura permite entregas rápidas para <Link href="/tipos-de-locucao/locucao-para-propaganda" className="text-gold hover:underline">propaganda</Link> sem taxas de emergência abusivas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><DollarSign size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Retorno sobre Investimento</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Uma voz de elite aumenta a percepção de valor do seu produto. Invista em <Link href="/tipos-de-locucao/identidade-sonora-branding-de-voz" className="text-gold hover:underline">branding vocal</Link> e veja os resultados.
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
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Dúvidas Frequentes</h2>
              <p className="text-muted-foreground">Esclareça os pontos principais sobre contratação e valores.</p>
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
            <Link href="/tipos-de-locucao" className="hover:text-gold transition-colors">Catálogo de Vozes</Link>
            <Link href="/tipos-de-locucao/locucao-institucional" className="hover:text-gold transition-colors">Institucional</Link>
            <Link href="/tipos-de-locucao/varejo" className="hover:text-gold transition-colors">Varejo</Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-20 bg-gradient-to-t from-black to-white/[0.03] rounded-3xl border border-white/5 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                Pronto para <br />
                <span className="text-gold text-3xl md:text-5xl">elevar o nível do seu áudio?</span>
              </h2>
              <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                Solicite um orçamento sem compromisso e receba uma análise personalizada para o seu projeto.
              </p>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-10 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-[0_0_30px_rgba(224,194,122,0.2)]"
                aria-label="Ir para página de briefing e solicitar orçamento de locução"
              >
                Solicitar Orçamento Agora <ArrowRight size={16} className="ml-2" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
