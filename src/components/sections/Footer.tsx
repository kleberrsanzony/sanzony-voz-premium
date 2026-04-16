"use client";
import { useLanguage } from "@/context/LanguageContext"

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const translatedFooterLinks = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.demos, href: "#demos" },
    { label: t.nav.services, href: "#servicos" },
    { label: t.nav.process, href: "#processo" },
    { label: t.nav.studio, href: "#estudio" },
    { label: t.nav.briefing, href: "/briefing" },
  ];

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container-site">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          
          <a
            href="#inicio"
            className="font-display font-bold text-2xl tracking-tight text-white transition-opacity hover:opacity-80"
          >
            Sanzony<span className="text-[#e0c27a]">.</span>Voz
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {translatedFooterLinks.map((l) => (
               <a
                 key={l.href}
                 href={l.href}
                 className="text-[0.65rem] uppercase tracking-widest text-muted-foreground hover:text-[#e0c27a] transition-colors"
               >
                 {l.label}
               </a>
            ))}
          </nav>
          
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.65rem] text-muted-foreground uppercase tracking-widest text-center">
            &copy; {currentYear} Sanzony.Voz. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[0.65rem] text-muted-foreground hover:text-white uppercase tracking-widest">
              {t.footer.terms}
            </a>
             <a href="#" className="text-[0.65rem] text-muted-foreground hover:text-white uppercase tracking-widest">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
