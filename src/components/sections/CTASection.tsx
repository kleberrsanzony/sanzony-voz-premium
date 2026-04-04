import { Button } from "@/components/ui/button"
import { StaggerGroup, StaggerItem } from "@/components/ui/stagger"

export default function CTASection() {
  return (
    <section id="contato" className="relative bg-black">
      <div className="section-spacing relative z-10">
        <div className="container-site">
          <StaggerGroup className="max-w-4xl mx-auto text-center flex flex-col items-center" staggerDelay={0.1}>
            <StaggerItem>
              <span className="section-label block mb-8 text-[#e0c27a]">Próximos Passos</span>
            </StaggerItem>
            
            <StaggerItem className="w-full">
              <h2 className="font-display font-bold text-4xl md:text-6xl text-white tracking-tight leading-none mb-10">
                Pronto para dar voz <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e0c27a] to-[#a67c2e]">
                  ao seu projeto?
                </span>
              </h2>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-16 mx-auto">
                Solicite um orçamento hoje mesmo. Envie seu roteiro ou briefing e descubra como podemos elevar o valor percebido da sua marca.
              </p>
            </StaggerItem>
            
            <StaggerItem className="w-full">
              <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
                {/* WhatsApp Redirection - can be adapted to actual links later */}
                <Button asChild className="w-full sm:w-auto h-14 px-12 text-sm shadow-[0_0_40px_rgba(224,194,122,0.3)]">
                  <a href="#whatsapp">Falar no WhatsApp</a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto h-14 px-12 text-sm bg-black">
                  <a href="mailto:contato@sanzony.com">Enviar E-mail</a>
                </Button>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <p className="text-[0.65rem] text-muted-foreground uppercase tracking-[0.2em] mt-12 block">
                Respostas rápidas / Confidencialidade garantida
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
