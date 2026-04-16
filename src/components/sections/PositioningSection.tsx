"use client";
import { Shield, Brain, Drama, Crown } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"
import { useLanguage } from "@/context/LanguageContext"

const icons = [Shield, Brain, Drama, Crown];

export default function PositioningSection() {
  const { t } = useLanguage();

  return (
    <section id="posicionamento" className="bg-black py-32 mb-1">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center lg:items-start">
          <div className="lg:col-span-5 flex flex-col pr-8 text-center lg:text-left items-center lg:items-start">
            <Reveal>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.05)]">
                  <Shield size={18} className="text-[#e0c27a]" />
                </div>
                <span className="section-label mt-5 block">{t.sections.positioning.label}</span>
                <h2 className="mt-8 font-display font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight text-white mb-6">
                  {t.sections.positioning.title_line1} <br />
                  <span className="text-muted-foreground font-light">
                    {t.sections.positioning.title_line2_prefix} <span className="text-white italic">{t.sections.positioning.title_line2_accent}</span>
                  </span>
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerGroup className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-md overflow-hidden border border-white/5" staggerDelay={0.15}>
              {t.sections.positioning.pillars.map((p, i) => {
                const Icon = icons[i] || Shield;
                return (
                  <StaggerItem
                    key={i}
                    className="bg-[#050505] p-10 flex flex-col gap-6 hover:bg-[#070707] transition-colors"
                  >
                    <Icon size={20} className="text-[#e0c27a]" />
                    <div>
                      <h3 className="font-display font-semibold text-lg tracking-wide text-white mb-3">
                        {p.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
