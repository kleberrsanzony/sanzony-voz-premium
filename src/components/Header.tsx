import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/content'
import Magnetic from '@/components/Magnetic'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
              <Magnetic key={l.href}>
                <motion.a
                  href={l.href}
                  className="text-[0.55rem] uppercase tracking-[3.5px] text-label hover:text-silver transition-colors duration-700 relative py-2"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5, duration: 0.6 }}
                >
                  {l.label}
                </motion.a>
              </Magnetic>
            ))}
          </nav>

          {/* CTA */}
          <Magnetic>
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
          </Magnetic>

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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="lg:hidden"
            style={{ background: 'hsl(0 0% 2% / 0.98)', backdropFilter: 'blur(24px)', borderTop: '1px solid hsl(0 0% 8%)' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="container-site py-10 flex flex-col gap-7">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[3px] text-label hover:text-silver transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="gold-line mt-2" />
              <motion.a
                href="#contato"
                className="btn-outline text-[0.5rem] py-2.5 px-8 w-fit"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span>Solicitar Orçamento</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
