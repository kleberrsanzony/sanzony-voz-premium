import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Megaphone, Tv, Smartphone, PlayCircle, Radio, BarChart3, Clock, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import SetLanguage from "@/components/i18n/SetLanguage";

export const metadata: Metadata = {
  title: "Locução para Propaganda e Publicidade | Studio Sanzony Voz",
  description: "Vozes de impacto para comerciais de TV, Rádio e Redes Sociais. Locução vibrante e persuasiva para campanhas publicitárias de alto alcance.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/locucao-para-propaganda",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/locucao-para-propaganda",
    },
  },
  openGraph: {
    title: "Locução para Propaganda: A Voz que Transforma Campanhas",
    description: "Chame a atenção, desperte o desejo e converta com uma locução publicitária que vende.",
    url: "https://www.sanzonyvoz.com.br/locucao-para-propaganda",
    type: "article",
  }
};

export default function LocucaoPropagandaPage() {
  const faqData = [
    {
      q: "Como escolher a voz certa para uma campanha publicitária?",
      a: "A escolha depende do público-alvo e do objetivo da campanha. Vozes vibrantes funcionam bem para varejo, enquanto tons suaves e aspiracionais são ideais para marcas de luxo ou tecnologia."
    },
    {
      q: "Qual o prazo de entrega para spots de rádio e TV?",
      a: "Trabalhamos com o padrão broadcast de agilidade, entregando a maioria dos spots comerciais em até 24h úteis após o briefing."
    },
    {
      q: "Vocês gravam trilhas ou fazem apenas a locução?",
      a: "Focamos na locução e interpretação de elite. No entanto, entregamos o arquivo de voz limpo e masterizado, pronto para que seu produtor de áudio faça a mixagem final com a trilha."
    },
    {
      q: "O estúdio é próprio ou terceirizado?",
      a: "Sanzony possui estúdio próprio com tratamento acústico profissional e equipamentos de ponta, garantindo consistência técnica em todas as gravações."
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
            <span className="section-label mb-6 block">Publicidade & Impacto</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              Locução para <span className="text-gold">Propaganda</span> de Alto Alcance
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              Chame a atenção, desperte o desejo e converta. Locução publicitária profissional para TV, Rádio, YouTube e Redes Sociais.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content Section: Versatilidade */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Vozes que Vendem: Do Varejo ao Conceitual
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Cada campanha exige uma energia diferente. Adaptamos nossa técnica para entregar desde a vibração necessária para grandes feirões de varejo até o tom aspiracional e suave para marcas de lifestyle e tecnologia.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3 text-white/80">
                  <Tv size={18} className="text-gold" />
                  <span className="text-xs uppercase tracking-wider">Spot TV</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Radio size={18} className="text-gold" />
                  <span className="text-xs uppercase tracking-wider">Radio Ads</span>
                </div>
              </div>
            </Reveal>
            <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
              <Megaphone size={80} className="text-[#e0c27a] opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><PlayCircle size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Gatilhos de Venda</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Essencial para campanhas que precisam de "Call to Action" imediato. Se o seu projeto busca um <Link href="/tipos-de-locucao/locucao-profissional" className="text-gold hover:underline">locutor profissional</Link> vibrante para impulsionar vendas, este é o tier ideal.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><BarChart3 size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Foco em Resultados</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Uma boa <Link href="/tipos-de-locucao/identidade-sonora-branding-de-voz" className="text-gold hover:underline">identidade sonora</Link> na publicidade aumenta a lembrança de marca em até 40%. Nossa locução é pensada para maximizar esses indicadores.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Clock size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4 text-left">Padrão Broadcast</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  O mercado publicitário não para. Oferecemos um workflow otimizado que garante agilidade total sem sacrificar o padrão de <Link href="/tipos-de-locucao/locucao-premium" className="text-gold hover:underline">locução premium</Link> exigido.
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
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4">Ad FAQ</h2>
              <p className="text-muted-foreground">Esclareça suas dúvidas sobre locução publicitária.</p>
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
            <Link href="/tipos-de-locucao/locucao-para-propaganda" className="hover:text-gold transition-colors">Catálogo Publicidade</Link>
            <Link href="/tipos-de-locucao/vinhetas-de-impacto" className="hover:text-gold transition-colors">Vinhetas</Link>
            <Link href="/quanto-custa-locucao" className="hover:text-gold transition-colors">Quanto Custa?</Link>
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
                Sua campanha merece <br />
                <span className="text-gold">uma voz que vende.</span>
              </h2>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-10 bg-gold text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all rounded-md shadow-[0_0_30px_rgba(224,194,122,0.2)]"
                aria-label="Contratar locução para propaganda agora"
              >
                Solicitar Spot Agora <ArrowRight size={16} className="ml-2" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
