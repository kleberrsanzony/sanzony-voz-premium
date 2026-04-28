"use client";
import { Award, Target, Mic2, Clock, Crown } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"
import { useLanguage } from "@/context/LanguageContext"

const icons = [Award, Target, Mic2, Clock, Crown];

export default function DifferentialsSection() {
  const { t } = useLanguage();

  const items = t.sections?.differentials?.items || [
    "Mais de 20 anos de experiência em locução profissional",
    "Interpretação vocal estratégica — não é só leitura de texto",
    "Qualidade de áudio nível broadcast",
    "Entrega rápida com padrão premium",
    "Direção vocal baseada em experiência real de mercado"
  ];

  return (
    <section id="diferenciais" className="bg-black py-24 mb-1">
      <div className="container-site">
        <Reveal>
          <div className="text-center mb-16">
            <span className="section-label block mb-4">Por que Sanzony.Voz?</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
              A diferença entre <span className="text-[#e0c27a]">falar</span> e <span className="text-[#e0c27a]">comunicar.</span>
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-center" staggerDelay={0.1}>
          {items.map((item: string, i: number) => {
            const Icon = icons[i] || Crown;
            // Centralizar o último item na terceira linha se for grid-cols-3 (pois são 5 itens)
            const isLast = i === items.length - 1;
            return (
              <StaggerItem
                key={i}
                className={`bg-white/5 border border-white/5 p-8 flex flex-col gap-5 rounded-md hover:bg-white/10 hover:border-[#e0c27a]/30 transition-all ${isLast ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-[#e0c27a]/20 shadow-[0_0_15px_rgba(224,194,122,0.1)]">
                  <Icon size={18} className="text-[#e0c27a]" />
                </div>
                <p className="font-display font-medium text-lg leading-snug text-white">
                  {item}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
