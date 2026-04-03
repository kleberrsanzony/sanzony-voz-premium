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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl border-b border-border-subtle'
          : 'bg-transparent'
      }`}
      style={scrolled ? { background: 'oklch(0.145 0 0 / 0.8)' } : undefined}
    >
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="font-display font-bold text-lg md:text-xl tracking-tight text-foreground">
          Sanzony<span className="text-silver">.Voz</span><span className="text-label text-xs ml-0.5">™</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.65rem] uppercase tracking-[2px] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden md:inline-flex btn-outline text-[0.65rem] py-2.5 px-6">
          Solicitar Orçamento
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur-xl border-t border-border-subtle" style={{ background: 'oklch(0.145 0 0 / 0.95)' }}>
          <nav className="container-site py-8 flex flex-col gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[2px] text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contato" className="btn-outline text-xs py-2.5 px-6 w-fit" onClick={() => setOpen(false)}>
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
