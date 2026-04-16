"use client";
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

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
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container-site">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          
          <Link
            href="/"
            className="font-display font-bold text-2xl tracking-tight text-white transition-opacity hover:opacity-80"
          >
            Sanzony<span className="text-gold">.</span>Voz
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {translatedFooterLinks.map((l) => (
               l.href.startsWith("#") ? (
                 <a
                   key={l.href}
                   href={l.href}
                   className="text-[0.65rem] uppercase tracking-widest text-muted-foreground hover:text-[#e0c27a] transition-colors"
                 >
                   {l.label}
                 </a>
               ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[0.65rem] uppercase tracking-widest text-muted-foreground hover:text-[#e0c27a] transition-colors"
                >
                  {l.label}
                </Link>
               )
            ))}
          </nav>
          
        </div>

        {/* Evolved Editorial Block with Natural Contextual Links */}
        <div className="mb-16 border-l border-white/5 pl-8 max-w-4xl">
          <p className="text-xs text-muted-foreground/60 leading-relaxed italic font-light">
            A arte de comunicar exige mais que técnica; exige uma <Link href="/locucao-profissional" className="hover:text-gold transition-colors">locução profissional</Link> capaz de traduzir a alma da marca. 
            No Studio Sanzony.Voz, desenvolvemos projetos de <Link href="/locucao-premium" className="hover:text-gold transition-colors">locução premium</Link> e <Link href="/branding-vocal" className="hover:text-gold transition-colors">branding vocal</Link> estratégico para empresas 
            que buscam o ápice da autoridade sonora. Com alcance global, somos especialistas em <Link href="/brazilian-portuguese-voice-over" className="hover:text-gold transition-colors">brazilian portuguese voice over</Link> para 
            campanhas internacionais, garantindo qualidade broadcast e uma <Link href="/locucao-para-propaganda" className="hover:text-gold transition-colors">locução para propaganda</Link> que 
            conecta, engaja e converte nos mais exigentes mercados do Brasil e exterior.
          </p>
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
