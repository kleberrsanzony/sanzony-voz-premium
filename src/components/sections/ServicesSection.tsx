"use client";

import { services } from "@/data/content"
import { Megaphone, Radio, Volume2, Truck, Building2, MonitorPlay, Target, Sparkles } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"
import { useLanguage } from "@/context/LanguageContext"

const icons = [Megaphone, Radio, Volume2, Truck, Building2, MonitorPlay, Target, Sparkles];

export default function ServicesSection() {
  const { t } = useLanguage();

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
              return (
                <StaggerItem
                  key={i}
                  className="flex flex-col gap-5 p-10 bg-[#050505] hover:bg-white/5 transition-colors group cursor-default"
                >
                  <div className="text-[#e0c27a] mb-2 group-hover:scale-110 transition-transform origin-left">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
