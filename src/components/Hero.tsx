import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { heroCategories, heroDemos } from '@/data/content'

/* ━━━ Organic Gold Curves (SVG) ━━━ */
const GoldCurves = () => (
  <>
    {/* Curve 1 — large flowing arc, top-right */}
    <svg className="gold-curve" style={{ top: '5%', right: '-5%', width: '600px', height: '600px' }} viewBox="0 0 600 600">
      <path d="M50,300 Q200,50 400,200 T550,400" />
    </svg>
    {/* Curve 2 — small accent, bottom-left */}
    <svg className="gold-curve" style={{ bottom: '10%', left: '5%', width: '300px', height: '300px', animationDelay: '-4s', animationDuration: '16s' }} viewBox="0 0 300 300">
      <path d="M20,200 Q100,20 280,150" />
    </svg>
    {/* Curve 3 — mid signature line */}
    <svg className="gold-curve" style={{ top: '40%', left: '30%', width: '450px', height: '200px', animationDelay: '-8s', animationDuration: '20s', opacity: 0.035 }} viewBox="0 0 450 200">
      <path d="M0,100 C100,20 200,180 300,80 S450,120 450,60" />
    </svg>
  </>
)

const Hero = () => {
  const [activeTab, setActiveTab] = useState<string>(heroCategories[0])
  const [playing, setPlaying] = useState<number | null>(null)
  const filtered = heroDemos.filter((d) => d.category === activeTab)
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, -100])
  const yPlayer = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacityFade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Cursor glow
  const [mouse, setMouse] = useState({ x: -500, y: -500 })
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="inicio" ref={containerRef} className="relative min-h-[110vh] flex items-center overflow-hidden">
      {/* ━━━ Cursor glow ━━━ */}
      <div className="cursor-glow hidden md:block" style={{ left: mouse.x, top: mouse.y }} />

      {/* ━━━ Abyss background ━━━ */}
      <div className="absolute inset-0" style={{ background: 'hsl(0 0% 2%)' }}>
        {/* Cinematic radials */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 90% 70% at 25% 50%, hsl(0 0% 6% / 0.6) 0%, transparent 70%),
            radial-gradient(ellipse 50% 90% at 85% 30%, hsl(0 0% 5% / 0.4) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 80%, hsl(0 0% 3% / 0.8) 0%, transparent 60%)
          `
        }} />

        {/* Gold atmospheric glow — breathing */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full blur-[200px]"
          style={{ background: '#e0c27a' }}
          animate={{ opacity: [0.015, 0.035, 0.015], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] rounded-full blur-[180px]"
          style={{ background: '#a67c2e' }}
          animate={{ opacity: [0.01, 0.025, 0.01], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        {/* Editorial vertical lines */}
        {[12, 30, 70, 88].map((pos, i) => (
          <div key={i} className="absolute top-0 w-px h-full" style={{
            left: `${pos}%`,
            background: `linear-gradient(to bottom, transparent ${10 + i * 5}%, ${i % 2 === 0 ? '#e0c27a06' : 'hsl(0 0% 10% / 0.15)'} 50%, transparent ${85 - i * 3}%)`,
          }} />
        ))}

        {/* Gold curves decorative */}
        <GoldCurves />

        {/* Vignette */}
        <div className="hero-vignette" />
      </div>

      {/* ━━━ Content ━━━ */}
      <motion.div className="container-site relative z-10 pt-40 md:pt-48 pb-20" style={{ opacity: opacityFade }}>
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-end min-h-[70vh]">

          {/* ━━━ LEFT — HEADLINE (cinematographic) ━━━ */}
          <motion.div className="md:col-span-7" style={{ y: yHeadline }}>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Locução Premium & Branding Vocal</span>
            </motion.div>

            <motion.h1
              className="mt-10 font-display font-bold text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] leading-[0.95] tracking-[-0.03em]"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block text-foreground">Sua marca não</span>
              <span className="block text-foreground">precisa de uma voz.</span>
              <motion.span
                className="block text-gold-shimmer mt-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Precisa de presença.
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-10 text-secondary-foreground text-sm md:text-base leading-[2] max-w-md"
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Locução premium para campanhas, marcas e projetos que exigem mais do que som.
            </motion.p>

            <motion.div
              className="mt-12 flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#demos" className="btn-primary"><span>Ouvir Demos</span></a>
              <a href="#contato" className="btn-outline"><span>Solicitar Orçamento</span></a>
            </motion.div>
          </motion.div>

          {/* ━━━ RIGHT — Premium Player ━━━ */}
          <motion.div className="md:col-span-5" style={{ y: yPlayer }}>
            <motion.div
              className="glass-card border-gold-glow"
              initial={{ opacity: 0, x: 80, filter: 'blur(12px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-7">
                {heroCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setActiveTab(c); setPlaying(null) }}
                    className={`px-4 py-1.5 text-[0.5rem] uppercase tracking-[3px] rounded-sm transition-all duration-700 cursor-pointer ${
                      activeTab === c ? 'text-gold-shimmer font-medium' : 'text-label hover:text-silver'
                    }`}
                    style={
                      activeTab === c
                        ? { background: '#e0c27a0a', border: '1px solid #e0c27a15' }
                        : { background: 'hsl(0 0% 6%)', border: '1px solid hsl(0 0% 10%)' }
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Track list */}
              <div className="space-y-0">
                {filtered.map((d, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    className="flex items-center gap-4 py-5 cursor-pointer group px-3 -mx-3 rounded-sm"
                    style={{ borderTop: '1px solid hsl(0 0% 8%)' }}
                    onClick={() => setPlaying(playing === i ? null : i)}
                    whileHover={{ backgroundColor: 'hsl(0 0% 6%)', x: 4 }}
                    transition={{ duration: 0.4 }}
                  >
                    <button className="player-btn player-btn-sm">
                      {playing === i ? <Pause size={11} /> : <Play size={11} className="ml-0.5" />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-medium text-sm tracking-wide truncate">{d.title}</h4>
                      <p className="text-[0.55rem] text-label mt-0.5">{d.client}</p>
                    </div>
                    {playing === i && (
                      <div className="flex items-center gap-[3px] h-4">
                        {[0.5, 1, 0.6, 0.9, 0.4, 0.8].map((h, j) => (
                          <span key={j} className="waveform-bar active" style={{ height: `${h * 16}px`, animationDelay: `${j * 0.12}s` }} />
                        ))}
                      </div>
                    )}
                    <span className="text-[0.55rem] text-label font-mono tracking-wider">{d.duration}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ━━━ Scroll indicator ━━━ */}
        <motion.div
          className="mt-28 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <div className="scroll-indicator">
            <div className="scroll-line" />
            <span className="text-[0.45rem] uppercase tracking-[5px] text-gold-muted" style={{ color: '#7a5c2e' }}>explorar</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
