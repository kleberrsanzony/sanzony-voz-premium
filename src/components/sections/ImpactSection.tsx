"use client";

import { Reveal } from "@/components/ui/reveal";
import { BrandImpactChart } from "@/components/illustrations/BrandImpactChart";
import { useLanguage } from "@/context/LanguageContext";

export default function ImpactSection() {
  const { t, language } = useLanguage();

  const sectionContent = {
    pt: {
      label: "O ROI do Áudio Profissional",
      title: "O Ponto de Virada da",
      title_accent: "Sua Marca",
      desc: "Conteúdos genéricos ou gerados por IA possuem uma retenção linear e previsível. Ao aplicar Branding Vocal Premium, a conexão emocional do público cria um efeito exponencial de confiança, lembrança e valor percebido."
    },
    en: {
      label: "The ROI of Professional Audio",
      title: "The Turning Point for",
      title_accent: "Your Brand",
      desc: "Generic or AI-generated content has linear and predictable retention. By applying Premium Vocal Branding, the audience's emotional connection creates an exponential effect of trust, recall, and perceived value."
    },
    es: {
      label: "El ROI del Audio Profesional",
      title: "El Punto de Inflexión de",
      title_accent: "Tu Marca",
      desc: "El contenido genérico o de IA tiene una retención lineal. Al aplicar Branding Vocal Premium, la conexión emocional genera un efecto exponencial de confianza, recuerdo y valor percibido."
    }
  };

  const content = sectionContent[language as keyof typeof sectionContent] || sectionContent.pt;

  return (
    <section className="relative overflow-hidden bg-black pb-32">
      <div className="container-site z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-col items-start pr-0 lg:pr-8">
             <Reveal>
               <span className="section-label block mb-6">{content.label}</span>
               <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                 {content.title} <br className="hidden md:block"/>
                 <span className="text-[#e0c27a]">{content.title_accent}</span>
               </h2>
               <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                 {content.desc}
               </p>
             </Reveal>
          </div>

          <Reveal delay={0.3} blur={false}>
             <BrandImpactChart />
          </Reveal>

        </div>
      </div>
    </section>
  );
}
