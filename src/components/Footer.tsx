import { Mic } from 'lucide-react'
import { footerLinks } from '@/data/content'

const Footer = () => (
  <footer className="border-t border-border-subtle">
    <div className="container-site py-16">
      <div className="grid md:grid-cols-12 gap-8">
        {/* Brand */}
        <div className="md:col-span-4">
          <a href="#inicio" className="font-display font-bold text-xl tracking-tight text-foreground">
            Sanzony<span className="text-silver">.Voz</span><span className="text-label text-xs ml-0.5">™</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Locução comercial e publicitária com qualidade broadcast.
            A voz que posiciona marcas.
          </p>
        </div>

        {/* Nav */}
        <div className="md:col-span-3 md:col-start-6">
          <h4 className="text-xs uppercase tracking-[2px] text-label mb-4">Navegação</h4>
          <nav className="flex flex-col gap-3">
            {footerLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="md:col-span-3 md:col-start-10">
          <h4 className="text-xs uppercase tracking-[2px] text-label mb-4">Contato</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href="mailto:contato@sanzonyvoz.com.br" className="hover:text-foreground transition-colors">
              contato@sanzonyvoz.com.br
            </a>
            <a href="https://wa.me/5500000000000" className="hover:text-foreground transition-colors">
              WhatsApp
            </a>
            <a href="https://instagram.com/sanzonyvoz" className="hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-label">
          © {new Date().getFullYear()} Sanzony.Voz™ — Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-2 text-xs text-label">
          <Mic size={12} />
          <span>Locução Premium Profissional</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
