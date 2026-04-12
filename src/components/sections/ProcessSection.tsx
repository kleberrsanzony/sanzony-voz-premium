"use client";
import { steps } from "@/data/content"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"

export default function ProcessSection() {
  return (
    <section id="processo" className="bg-black">
      <div className="section-spacing">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
              <div className="max-w-2xl">
                <span className="section-label block mb-8">Método de Trabalho</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white leading-tight">
                  Do briefing à entrega, <br />
                  <span className="text-gold">sem atritos.</span>
                </h2>
              </div>
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed pb-2">
                Um processo estruturado para garantir que cada gravação seja aprovada de primeira.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="flex flex-col gap-6" staggerDelay={0.15}>
            {steps.map((s, i) => (
              <StaggerItem
                key={i}
                className="luxury-card group relative flex flex-col md:flex-row md:items-center gap-8 md:gap-12 p-8 md:p-10 bg-[#050505] rounded-md border border-white/5"
              >
                <div className="text-6xl md:text-8xl font-display font-black text-white/5 group-hover:text-white/10 transition-colors leading-none tracking-tighter w-24 relative z-10">
                  {s.num}
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black text-[#e0c27a] shrink-0 group-hover:scale-110 transition-transform relative z-10">
                  <s.icon size={20} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-display font-semibold text-xl md:text-2xl text-white tracking-wide mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
