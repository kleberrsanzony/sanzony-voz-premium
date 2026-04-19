"use client";

import { services } from "@/data/content"
import { Megaphone, Radio, Volume2, Truck, Building2, MonitorPlay, Target, Sparkles, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const icons = [Megaphone, Radio, Volume2, Truck, Building2, MonitorPlay, Target, Sparkles];

// Slugs mapping for each card index to source data IDs in voice-types.ts
const cardSlugs = [
  "locucao-para-propaganda",           // 0: Spots Comerciais
  "vinhetas-de-impacto",              // 1: Vinhetas
  "varejo",                           // 2: Chamadas para Rádio
  "varejo",                           // 3: Carro de Som
  "locucao-institucional",            // 4: Institucional
  "voz-para-reels-shorts-tiktok",     // 5: Conteúdo Digital
  "manifestos-de-marca",              // 6: Campanhas
  "identidade-sonora-branding-de-voz" // 7: Branding Vocal
];

export default function ServicesSection() {
  const { t, language } = useLanguage();

  // Helper to get localized hub path
  const getLocalizedHubPath = (slug?: string) => {
    const hubBase = language === "pt" ? "/tipos-de-locucao" 
                  : language === "en" ? "/en/voice-over-types" 
                  : "/es/tipos-de-locucion";
    
    return slug ? `${hubBase}/${slug}` : hubBase;
  };

  return (
    <section id="servicos" className="bg-black">
      <div className="section-spacing">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-24 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.05)]">
                 <Megaphone size={18} className="text-[#e0c27a]" />
              </div>
              <span className="section-label mt-5 block">{t.nav.services}</span>
              <h2 className="mt-8 font-display font-bold text-4xl md:text-5xl tracking-tight text-white leading-tight">
                {t.sections.services.title}
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                {t.sections.services.subtitle}
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-px rounded-md overflow-hidden bg-white/5 border border-white/5">
            {t.sections.services.items.map((s: any, i: number) => {
              const Icon = icons[i] || Megaphone;
              const slug = cardSlugs[i];
              
              return (
                <Link 
                  key={i} 
                  href={getLocalizedHubPath(slug)}
                  className="group block focus:outline-none focus:ring-1 focus:ring-[#e0c27a]/30"
                >
                  <StaggerItem
                    className="flex flex-col h-full gap-5 p-10 bg-[#050505] hover:bg-white/[0.07] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#e0c27a]/10"
                  >
                    <div className="text-[#e0c27a] mb-2 group-hover:scale-110 transition-transform origin-left duration-300">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-lg tracking-wide text-white group-hover:text-[#e0c27a] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="mt-auto pt-4 flex items-center gap-2 text-[#e0c27a]/0 group-hover:text-[#e0c27a]/60 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                      <span className="text-[0.6rem] uppercase tracking-widest font-bold">Explorar</span>
                      <ArrowRight size={10} />
                    </div>
                  </StaggerItem>
                </Link>
              );
            })}
          </StaggerGroup>

          {/* Hub Entrance Block */}
          <Reveal delay={0.2}>
            <div className="mt-20 p-10 md:p-16 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent text-center flex flex-col items-center">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                {t.sections.services.hub.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-xl mb-10 leading-relaxed">
                {t.sections.services.hub.description}
              </p>
              <Button asChild variant="outline" className="border-[#e0c27a]/30 text-white hover:bg-[#e0c27a] hover:text-black transition-all px-8 h-12 rounded-sm uppercase tracking-widest text-xs font-bold">
                <Link href={getLocalizedHubPath()}>
                  {t.sections.services.hub.cta}
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
