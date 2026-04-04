import { services } from "@/data/content"
import { Megaphone } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-black">
      <div className="section-spacing">
        <div className="container-site">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-24 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#e0c27a]/20 bg-black flex items-center justify-center shadow-[0_0_30px_rgba(224,194,122,0.05)]">
                 <Megaphone size={18} className="text-[#e0c27a]" />
              </div>
              <span className="section-label mt-5 block">Serviços</span>
              <h2 className="mt-8 font-display font-bold text-4xl md:text-5xl tracking-tight text-white leading-tight">
                Soluções vocais para <span className="text-gold">cada formato.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                Cada tipo de projeto exige um approach vocal específico.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-px rounded-md overflow-hidden bg-white/5 border border-white/5">
            {services.map((s, i) => (
              <StaggerItem
                key={i}
                className="flex flex-col gap-5 p-10 bg-[#050505] hover:bg-white/5 transition-colors group cursor-default"
              >
                <div className="text-[#e0c27a] mb-2 group-hover:scale-110 transition-transform origin-left">
                  <s.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-wide text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
