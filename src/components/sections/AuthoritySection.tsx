"use client";
import { Reveal } from "@/components/ui/reveal"
import { useLanguage } from "@/context/LanguageContext"

export default function AuthoritySection() {
  const { t } = useLanguage();

  // Se a tradução ainda não estiver carregada ou faltar, fornecemos um fallback.
  // Como atualizamos pt.json, ela estará lá.
  const title = t.sections?.authority?.title || "Experiência que se ouve. Autoridade que se reconhece.";
  const desc = t.sections?.authority?.desc || "Com mais de 20 anos de experiência em locução profissional, cada projeto é tratado com precisão técnica, sensibilidade vocal e padrão de qualidade broadcast.";

  return (
    <section id="autoridade" className="bg-black py-24 border-y border-white/5 relative overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0c27a]/5 via-black to-black opacity-50"></div>
      
      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="w-16 h-1px bg-gradient-to-r from-transparent via-[#e0c27a] to-transparent mx-auto mb-8"></div>
            <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-8">
              {title}
            </h2>
            <p className="text-muted-foreground text-base md:text-xl md:leading-relaxed max-w-3xl mx-auto font-light">
              {desc}
            </p>
            <div className="w-16 h-1px bg-gradient-to-r from-transparent via-[#e0c27a] to-transparent mx-auto mt-8"></div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
