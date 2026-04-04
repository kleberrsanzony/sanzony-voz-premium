import { testimonials } from "@/data/content"
import { Star } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-black">
      <div className="section-spacing">
        <div className="container-site">
          <Reveal>
            <div className="text-center mb-20">
              <span className="section-label block mb-6">Confiança</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white tracking-tight">
                A escolha das principais <br />
                <span className="text-gold">marcas e produtoras.</span>
              </h2>
            </div>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {testimonials.map((t, i) => (
              <StaggerItem key={i} className="luxury-card glass-card flex flex-col justify-between h-full group">
                <div className="flex gap-1 mb-8 text-[#e0c27a] relative z-10">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="text-sm md:text-base text-white leading-relaxed mb-8 font-light italic relative z-10">
                  "{t.text}"
                </blockquote>
                <div className="pt-6 border-t border-white/10 group-hover:border-[#e0c27a]/20 transition-colors relative z-10">
                  <p className="font-display font-semibold text-sm text-[#e0c27a] tracking-wide">{t.name}</p>
                  <p className="text-[0.65rem] text-muted-foreground mt-1 uppercase tracking-widest">{t.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
