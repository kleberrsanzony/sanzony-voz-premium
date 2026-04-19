import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { Smartphone, Play, Zap, ArrowRight, Video, HelpCircle, Star } from "lucide-react";
import Link from "next/link";
import SetLanguage from "@/components/i18n/SetLanguage";

export const metadata: Metadata = {
  title: "Voz Profissional para Reels, TikTok e Shorts | Retenção e Engajamento",
  description: "Destaque seu conteúdo digital com voz profissional. Locução para vídeos curtos, VSL, infoprodutos e canais de YouTube. Aumente sua retenção agora.",
  alternates: {
    canonical: "https://www.sanzonyvoz.com.br/voz-profissional-para-reels",
    languages: {
      "pt-BR": "https://www.sanzonyvoz.com.br/voz-profissional-para-reels",
    },
  },
  openGraph: {
    title: "Voz Profissional para Conteúdo Digital e Social Media",
    description: "Cansado de vozes genéricas ou de IA no seu Reels? Dê uma alma humana e profissional ao seu conteúdo digital.",
    url: "https://www.sanzonyvoz.com.br/voz-profissional-para-reels",
    type: "article",
  }
};

export default function VozParaReelsPage() {
  const faqData = [
    {
      q: "Por que usar voz profissional e não voz de IA?",
      a: "A voz humana carrega nuances emocionais, ironia, ênfase e autoridade que IAs ainda não replicam. Um conteúdo com voz real gera mais conexão e confiança, fatores cruciais para conversão."
    },
    {
      q: "A voz influencia no alcance do algoritmo?",
      a: "Indiretamente, sim. Vídeos com áudio de alta qualidade e narração envolvente aumentam o tempo de retenção (watch time), que é um dos principais sinais para o algoritmo recomendar seu vídeo."
    },
    {
      q: "Qual o prazo para gravar locução para vídeos curtos?",
      a: "Para conteúdos dinâmicos de redes sociais, operamos com entrega ultra-rápida, muitas vezes no mesmo dia, para que você não perca o timing do conteúdo."
    },
    {
      q: "Vocês fazem gravação de VSL (Video Sales Letter)?",
      a: "Sim. Somos especialistas em locuções para VSL, focadas em persuasão e quebra de padrões para manter o lead assistindo até o checkout."
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
            <span className="section-label mb-6 block">Influência & Retenção</span>
            <h1 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tight mb-8">
              A Voz por Trás dos <span className="text-gold italic">Vídeos Virais</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              No Reels, TikTok ou YouTube Shorts, você tem 3 segundos para prender a atenção. Uma voz profissional é o gatilho mental que impede o scroll.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Professional Voice Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal x={-20}>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Pare de usar vozes genéricas. <br />
                <span className="text-gold">Construa autoridade.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                O áudio é 50% da experiência de um vídeo. Se a sua imagem é profissional mas a narração é amadora ou feita por IA comum, sua marca perde credibilidade instantaneamente.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Zap size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Gatilhos de Atenção</h4>
                    <p className="text-xs text-muted-foreground">Entonações estratégicas que destacam palavras-chave e mantêm o expectador curioso.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Smartphone size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Padrão Mobile-First</h4>
                    <p className="text-xs text-muted-foreground">Áudio masterizado para soar perfeitamente em alto-falantes de smartphones.</p>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="relative aspect-[9/16] max-w-[300px] mx-auto bg-white/5 rounded-[40px] border border-white/10 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
               <Play size={48} className="text-gold opacity-30" />
               <div className="absolute bottom-10 left-0 right-0 p-6">
                  <div className="w-12 h-2 bg-gold/50 rounded-full mb-3" />
                  <div className="w-20 h-2 bg-white/20 rounded-full" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="container-site">
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <Video size={32} />
              <div className="text-xl font-bold uppercase tracking-tighter italic">Reels</div>
              <Smartphone size={32} />
              <div className="text-xl font-bold uppercase tracking-tighter italic">TikTok</div>
              <Video size={32} />
              <div className="text-xl font-bold uppercase tracking-tighter italic">YouTube</div>
           </div>
        </div>
      </section>

      {/* Application Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Star size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">VSL Profissional</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Narrativas de vendas com alto poder de persuasão. Ideal para infoprodutores que buscam escala.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Play size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Canais de YouTube</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Vozes para canais de tecnologia, finanças, entretenimento e documentários curtos.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-10 bg-white/[0.01] border border-white/5 rounded-3xl h-full flex flex-col">
                <div className="text-gold mb-6"><Smartphone size={24} /></div>
                <h3 className="text-white font-display font-bold text-xl mb-4">Ads & Promoções</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Spots rápidos e vibrantes para anúncios patrocinados (Meta Ads, TikTok Ads e YouTube Ads).
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
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-4 italic">Social FAQ</h2>
              <p className="text-muted-foreground">Respostas rápidas para sua estratégia de conteúdo.</p>
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
            <Link href="/tipos-de-locucao/voz-para-reels-shorts-tiktok" className="hover:text-gold transition-colors">Digital Hub</Link>
            <Link href="/tipos-de-locucao/manifestos-de-marca" className="hover:text-gold transition-colors">Manifestos</Link>
            <Link href="/quanto-custa-locucao" className="hover:text-gold transition-colors">Preços</Link>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-site">
          <div className="p-12 md:p-20 bg-gradient-to-tr from-black via-white/[0.02] to-black rounded-3xl border border-white/5 text-center relative overflow-hidden">
            <Reveal>
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8">
                Pronto para <br />
                <span className="text-gold italic">viralizar com qualidade?</span>
              </h2>
              <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
                Transforme seu roteiro em um áudio de alta conversão. Padrão broadcast para o seu smartphone.
              </p>
              <Link 
                href="/briefing" 
                className="inline-flex h-16 items-center justify-center px-10 bg-white text-black font-display font-bold text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all rounded-md shadow-xl"
                aria-label="Contratar voz profissional para reels e iniciar briefing"
              >
                Gravar meu vídeo agora <ArrowRight size={16} className="ml-2" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
