"use client";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/reveal";
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger";
import { useLanguage } from "@/context/LanguageContext";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "Como funciona o processo de briefing?",
    answer: "O briefing é a fase mais importante. Nele, alinhamos o tom, o público-alvo, a velocidade da leitura e as eventuais pronúncias de marcas. Você pode enviar seu texto e referências diretamente pelo nosso formulário elite."
  },
  {
    question: "Qual é o prazo médio de entrega?",
    answer: "Para projetos comerciais simples, a entrega ocorre em até 24h úteis. Projetos institucionais mais longos ou campanhas integradas seguem um cronograma personalizado, sempre com foco na agilidade broadcast."
  },
  {
    question: "Vocês fazem direção remota?",
    answer: "Sim. Podemos realizar sessões de direção em tempo real via Zoom, Google Meet ou CleanFeed, permitindo que você acompanhe a gravação e faça ajustes de interpretação na hora."
  },
  {
    question: "Quais formatos de arquivos são entregues?",
    answer: "Entregamos arquivos em alta resolução (WAV 48kHz/24bit) por padrão, mas também podemos fornecer MP3 ou outros formatos específicos conforme a necessidade do seu projeto."
  },
  {
    question: "Atendem clientes fora do Brasil?",
    answer: "Com certeza. Atendemos agências e marcas globais que buscam uma voz brasileira autêntica e premium. O processo é 100% digital e aceitamos pagamentos internacionais via Wise ou transferência direta."
  },
  {
    question: "Como é a infraestrutura do estúdio?",
    answer: "Contamos com um estúdio próprio de nível profissional (Broadcast Standard), com tratamento acústico planejado, microfones de alta gama e interfaces de áudio que garantem um som limpo, presente e pronto para mixagem."
  }
];

export default function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      
      <section className="pt-40 pb-32">
        <div className="container-site max-w-4xl">
          <Reveal>
            <div className="text-center mb-20">
              <div className="w-14 h-14 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.1)] mx-auto mb-8">
                <HelpCircle size={22} className="text-[#e0c27a]" />
              </div>
              <span className="section-label mb-4 block">Central de Suporte</span>
              <h1 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight mb-6">
                Perguntas <span className="text-gold">Frequentes</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Tudo o que você precisa saber sobre o processo de produção, prazos e atendimento do Studio Sanzony.Voz.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="space-y-4">
            {faqData.map((item, i) => (
              <StaggerItem key={i}>
                <div 
                  className={`luxury-card border border-white/5 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === i ? 'bg-white/[0.03] border-[#e0c27a]/20' : 'bg-[#050505]'}`}
                >
                  <button 
                    onClick={() => toggle(i)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4"
                  >
                    <span className="font-display font-medium text-lg text-white group-hover:text-gold transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-[#e0c27a] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-white/5">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.3}>
            <div className="mt-20 text-center p-10 bg-white/[0.02] border border-white/5 rounded-2xl">
              <h2 className="text-white font-display font-bold text-2xl mb-4">Ainda tem dúvidas?</h2>
              <p className="text-muted-foreground text-sm mb-8">Estamos prontos para atender seu projeto com total exclusividade.</p>
              <a 
                href="/briefing" 
                className="inline-flex h-12 items-center justify-center px-8 bg-gold text-black font-display font-bold text-[0.7rem] uppercase tracking-widest hover:brightness-110 transition-all rounded-md"
              >
                Iniciar Projeto Agora
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
