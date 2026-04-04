import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/content'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled ? 'border-b' : 'border-b border-transparent'
      }`}
      style={
        scrolled
          ? { background: 'hsl(0 0% 4% / 0.85)', backdropFilter: 'blur(20px)', borderColor: 'hsl(0 0% 12%)' }
          : { background: 'transparent' }
      }
    >
      <div className="container-site flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <a href="#inicio" className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground">
          Sanzony<span className="text-gold">.</span>Voz<span className="text-gold-subtle text-[0.55rem] font-light ml-1 align-super">™</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.6rem] uppercase tracking-[3px] text-label hover:text-silver transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contato" className="hidden lg:inline-flex btn-outline text-[0.6rem] py-2.5 px-7">
          <span>Solicitar Orçamento</span>
        </a>

        {/* Mobile toggle */}
        <button className="lg:hidden text-silver" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden border-t"
          style={{ background: 'hsl(0 0% 3% / 0.97)', backdropFilter: 'blur(24px)', borderColor: 'hsl(0 0% 12%)' }}
        >
          <nav className="container-site py-10 flex flex-col gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[3px] text-label hover:text-silver transition-colors">
                {l.label}
              </a>
            ))}
            <div className="gold-line mt-2" />
            <a href="#contato" className="btn-outline text-[0.6rem] py-2.5 px-7 w-fit" onClick={() => setOpen(false)}>
              <span>Solicitar Orçamento</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
