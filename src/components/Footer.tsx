import { Mic } from 'lucide-react'
import { footerLinks } from '@/data/content'

const Footer = () => (
  <footer style={{ borderTop: '1px solid hsl(0 0% 8%)' }}>
    <div className="container-site py-20 md:py-24">
      <div className="grid md:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="md:col-span-5">
          <a href="#inicio" className="font-display font-bold text-2xl tracking-tight text-foreground">
            Sanzony<span className="text-gold">.</span>Voz<span className="text-gold-subtle text-[0.5rem] font-light ml-1 align-super">™</span>
          </a>
          <p className="mt-5 text-xs text-muted-foreground leading-[2] max-w-sm">
            Locução comercial e publicitária com qualidade broadcast.
            A voz que posiciona marcas no mercado.
          </p>
          <div className="gold-line mt-8 max-w-[120px]" />
        </div>

        {/* Nav */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-[0.6rem] uppercase tracking-[3px] text-gold-muted mb-5" style={{ color: 'hsl(38 20% 40%)' }}>Navegação</h4>
          <nav className="flex flex-col gap-4">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="text-xs text-label hover:text-silver transition-colors duration-400">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="md:col-span-3 md:col-start-10">
          <h4 className="text-[0.6rem] uppercase tracking-[3px] text-gold-muted mb-5" style={{ color: 'hsl(38 20% 40%)' }}>Contato</h4>
          <div className="flex flex-col gap-4 text-xs text-label">
            <a href="mailto:contato@sanzonyvoz.com.br" className="hover:text-silver transition-colors duration-400">
              contato@sanzonyvoz.com.br
            </a>
            <a href="https://wa.me/5500000000000" className="hover:text-silver transition-colors duration-400">
              WhatsApp
            </a>
            <a href="https://instagram.com/sanzonyvoz" className="hover:text-silver transition-colors duration-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-20 pt-8" style={{ borderTop: '1px solid hsl(0 0% 8%)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.6rem] text-label tracking-wide">
            © {new Date().getFullYear()} Sanzony.Voz™ — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2.5 text-[0.6rem] text-label">
            <Mic size={11} style={{ color: 'hsl(42 45% 65% / 0.4)' }} />
            <span className="tracking-wider">Locução Premium Profissional</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
