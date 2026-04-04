import { gridDemos } from "@/data/content"
import { Play } from "lucide-react"
import { AudioLines } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"

export default function DemoSection() {
  return (
    <section id="demos">
      <div className="section-spacing">
        <div className="container-site">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center mb-24 text-center">
              <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.05)]">
                <AudioLines size={18} className="text-[#e0c27a]" />
              </div>
              <span className="section-label mt-5 block">Portfólio em Foco</span>
              <h2 className="mt-8 font-display font-bold text-4xl md:text-5xl tracking-tight text-white max-w-xl leading-tight">
                A voz certa para o momento <span className="text-gold">exato.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                Explore o espectro vocal do Sanzony.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {gridDemos.map((d, i) => (
              <StaggerItem
                key={i}
                className="luxury-card glass-card flex flex-col justify-between group cursor-pointer block border border-white/5"
              >
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-[0.6rem] uppercase tracking-widest text-[#e0c27a] font-medium">
                    {d.category}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a67c2e] to-[#e0c27a] text-black flex items-center justify-center opacity-0 transform scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-lg shadow-black">
                    <Play size={14} className="ml-1" />
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="font-display font-medium text-lg tracking-wide text-white group-hover:text-[#e0c27a] transition-colors">
                    {d.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-xs text-muted-foreground">{d.client}</p>
                    <span className="text-[0.6rem] text-muted-foreground font-mono">
                      {d.duration}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
