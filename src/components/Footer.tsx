import { motion } from 'framer-motion'
import { Mic } from 'lucide-react'
import { footerLinks } from '@/data/content'

const Footer = () => (
  <footer style={{ borderTop: '1px solid hsl(0 0% 6%)' }}>
    <div className="container-site py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-5">
          <motion.a
            href="#inicio"
            className="font-display font-bold text-2xl tracking-tight text-foreground inline-block"
            whileHover={{ scale: 1.03 }}
          >
            Sanzony<span className="text-gold">.</span>Voz
            <span className="text-[0.5rem] font-light ml-0.5 align-super" style={{ color: '#7a5c2e' }}>™</span>
          </motion.a>
          <p className="mt-6 text-xs text-muted-foreground leading-[2.2] max-w-sm">
            Locução comercial e publicitária com qualidade broadcast.
            A voz que posiciona marcas no mercado.
          </p>
          <div className="gold-line mt-10 max-w-[100px]" />
        </div>

        {/* Nav */}
        <div className="md:col-span-3 md:col-start-7">
          <h4 className="text-[0.5rem] uppercase tracking-[4px] mb-6" style={{ color: '#7a5c2e' }}>Navegação</h4>
          <nav className="flex flex-col gap-5">
            {footerLinks.map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="text-xs text-label hover:text-silver transition-colors duration-500"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="md:col-span-3 md:col-start-10">
          <h4 className="text-[0.5rem] uppercase tracking-[4px] mb-6" style={{ color: '#7a5c2e' }}>Contato</h4>
          <div className="flex flex-col gap-5 text-xs text-label">
            <motion.a href="mailto:contato@sanzonyvoz.com.br" className="hover:text-silver transition-colors duration-500" whileHover={{ x: 4 }}>
              contato@sanzonyvoz.com.br
            </motion.a>
            <motion.a href="https://wa.me/5500000000000" className="hover:text-silver transition-colors duration-500" whileHover={{ x: 4 }}>
              WhatsApp
            </motion.a>
            <motion.a href="https://instagram.com/sanzonyvoz" className="hover:text-silver transition-colors duration-500" whileHover={{ x: 4 }}>
              Instagram
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-24 pt-8" style={{ borderTop: '1px solid hsl(0 0% 6%)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[0.5rem] text-label tracking-[2px]">
            © {new Date().getFullYear()} Sanzony.Voz™ — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2.5 text-[0.5rem] text-label tracking-[2px]">
            <Mic size={10} style={{ color: '#e0c27a30' }} />
            <span>Locução Premium Profissional</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
