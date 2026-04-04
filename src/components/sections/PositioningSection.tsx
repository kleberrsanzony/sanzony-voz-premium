import { pillars } from "@/data/content"
import { Shield } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"

export default function PositioningSection() {
  return (
    <section id="posicionamento" className="bg-[#030303] py-32 mb-1">
      <div className="container-site">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center lg:items-start">
          <div className="lg:col-span-5 flex flex-col pr-8 text-center lg:text-left items-center lg:items-start">
            <Reveal>
              <div className="flex flex-col items-center lg:items-start">
                <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.05)]">
                  <Shield size={18} className="text-[#e0c27a]" />
                </div>
                <span className="section-label mt-5 block">Assinatura Vocal</span>
                <h2 className="mt-8 font-display font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight text-white mb-6">
                  A marca que fala, <br />
                  <span className="text-muted-foreground font-light">
                    a audiência que <span className="text-white italic">escuta.</span>
                  </span>
                </h2>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <StaggerGroup className="grid sm:grid-cols-2 gap-px bg-white/5 rounded-md overflow-hidden border border-white/5" staggerDelay={0.15}>
              {pillars.map((p, i) => (
                <StaggerItem
                  key={i}
                  className="bg-[#050505] p-10 flex flex-col gap-6 hover:bg-[#070707] transition-colors"
                >
                  <p.icon size={20} className="text-[#e0c27a]" />
                  <div>
                    <h3 className="font-display font-semibold text-lg tracking-wide text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
