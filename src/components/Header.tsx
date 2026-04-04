import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/content'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <motion.div
        className="transition-all duration-700"
        animate={{
          backgroundColor: scrolled ? 'hsl(0 0% 2% / 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(0px)',
          borderBottom: scrolled ? '1px solid hsl(0 0% 10%)' : '1px solid transparent',
        }}
      >
        <div className="container-site flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            Sanzony<span className="text-gold">.</span>Voz
            <span className="text-[0.5rem] font-light ml-0.5 align-super" style={{ color: '#7a5c2e' }}>™</span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="text-[0.55rem] uppercase tracking-[3.5px] text-label hover:text-silver transition-colors duration-700 relative py-2"
                whileHover={{ y: -1 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.5, duration: 0.6 }}
              >
                {l.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.a
            href="#contato"
            className="hidden lg:inline-flex btn-outline text-[0.5rem] py-2.5 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <span>Solicitar Orçamento</span>
          </motion.a>

          {/* Mobile toggle */}
          <motion.button
            className="lg:hidden text-silver"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            whileTap={{ scale: 0.9 }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Editorial Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-3xl lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container-site h-full flex flex-col justify-between pt-32 pb-12">
              <nav className="flex flex-col gap-6">
                {navLinks.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.8 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-[2.2rem] font-display font-black tracking-[-0.04em] text-white hover:text-gold transition-colors flex items-center group"
                    >
                      <span>{l.label}</span>
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="h-px w-full bg-white/5" />
                <div className="flex flex-col gap-3">
                  <span className="text-[0.6rem] uppercase tracking-[4px] text-gold-dark font-bold">Elite Room Access</span>
                  <a
                    href="#contato"
                    onClick={() => setOpen(false)}
                    className="btn-primary w-full py-6 flex items-center justify-center gap-3"
                  >
                    <span className="text-[0.7rem]">Solicitar Briefing Direto</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
