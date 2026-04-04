import { capabilities } from "@/data/content"
import { Mic2 } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"

export default function StudioSection() {
  return (
    <section id="estudio" className="relative overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e0c27a]/20 to-transparent" />
      <div className="section-spacing bg-[radial-gradient(ellipse_at_top,#1a1405_0%,#050505_70%)]">
        <div className="container-site relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="flex flex-col items-start pr-0 lg:pr-12">
              <Reveal>
                <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.1)] mb-5">
                  <Mic2 size={18} className="text-[#e0c27a]" />
                </div>
                <span className="section-label block mb-6">Infraestrutura Premium</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-8">
                  Qualidade Broadcast, <br />
                  <span className="text-gold">em tempo recorde.</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-12 max-w-lg">
                  Estúdio próprio com tratamento acústico de altíssima performance, equipamentos premium e conexão em tempo real para direção remota de qualquer lugar do mundo.
                </p>
              </Reveal>
              
              <StaggerGroup className="grid sm:grid-cols-2 gap-x-8 gap-y-6 w-full" staggerDelay={0.1}>
                {capabilities.map((c, i) => (
                  <StaggerItem key={i} className="flex flex-col gap-3">
                    <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#e0c27a]">
                      <c.icon size={14} />
                    </div>
                    <span className="font-display font-medium text-sm text-white tracking-wide">{c.title}</span>
                    <span className="text-[0.65rem] text-muted-foreground leading-relaxed">{c.desc}</span>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>

            <Reveal delay={0.4} blur={false}>
              <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#030303] rounded-md border border-white/5 overflow-hidden flex items-center justify-center relative shadow-2xl magnetic-image-lift">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#111] to-[#0a0a0a]" />
                <p className="text-muted-foreground text-xs uppercase tracking-widest relative z-10">
                  [ Studio Image Placeholder ]
                </p>
              </div>
            </Reveal>
            
          </div>
        </div>
      </div>
    </section>
  )
}
