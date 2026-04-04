import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { heroCategories, heroDemos } from '@/data/content'

const Hero = () => {
  const [activeTab, setActiveTab] = useState<string>(heroCategories[0])
  const [playing, setPlaying] = useState<number | null>(null)
  const filtered = heroDemos.filter((d) => d.category === activeTab)
  const constraintsRef = useRef(null)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* ━━━ Background atmosphere ━━━ */}
      <div className="absolute inset-0" style={{ background: 'hsl(0 0% 2%)' }}>
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 20% 50%, hsl(0 0% 8% / 0.8) 0%, transparent 70%),
              radial-gradient(ellipse 60% 80% at 80% 30%, hsl(0 0% 6% / 0.5) 0%, transparent 60%)
            `
          }}
        />
        {/* Gold atmospheric glow — very subtle */}
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full opacity-[0.025] blur-[150px]"
          style={{ background: 'hsl(42 45% 65%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.02] blur-[120px]"
          style={{ background: 'hsl(35 30% 58%)' }} />
        {/* Decorative editorial lines */}
        <div className="absolute top-0 left-[15%] w-px h-full opacity-[0.04]"
          style={{ background: 'linear-gradient(to bottom, transparent 10%, hsl(42 45% 65% / 0.3) 50%, transparent 90%)' }} />
        <div className="absolute top-0 right-[20%] w-px h-full opacity-[0.03]"
          style={{ background: 'linear-gradient(to bottom, transparent 20%, hsl(0 0% 30%) 50%, transparent 80%)' }} />
      </div>

      <div className="container-site relative z-10 pt-36 pb-24" ref={constraintsRef}>
        <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* ━━━ LEFT — Headline ━━━ */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Locução Premium & Branding Vocal</span>
            </motion.div>

            <motion.h1
              className="mt-8 font-display font-bold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Sua marca não precisa
              <br />de uma voz.
              <br /><span className="text-gold">Precisa de presença.</span>
            </motion.h1>

            <motion.p
              className="mt-8 text-secondary-foreground text-base md:text-lg leading-[1.8] max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Locução premium para campanhas, marcas e projetos que exigem mais do que som.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#demos" className="btn-primary"><span>Ouvir Demos</span></a>
              <a href="#contato" className="btn-outline"><span>Solicitar Orçamento</span></a>
            </motion.div>
          </div>

          {/* ━━━ RIGHT — Premium Player ━━━ */}
          <div className="md:col-span-5">
            <motion.div
              className="glass-card border-gold-glow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {heroCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setActiveTab(c); setPlaying(null) }}
                    className={`px-4 py-1.5 text-[0.55rem] uppercase tracking-[2.5px] rounded-sm transition-all duration-500 ${
                      activeTab === c
                        ? 'text-gold-shimmer font-medium'
                        : 'text-label hover:text-silver'
                    }`}
                    style={
                      activeTab === c
                        ? { background: 'hsl(42 45% 65% / 0.08)', border: '1px solid hsl(42 45% 65% / 0.15)' }
                        : { background: 'hsl(0 0% 8%)', border: '1px solid hsl(0 0% 12%)' }
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Track list */}
              <div className="space-y-0">
                {filtered.map((d, i) => (
                  <div
                    key={`${activeTab}-${i}`}
                    className="flex items-center gap-4 py-4 cursor-pointer group px-3 -mx-3 rounded-sm transition-all duration-400"
                    style={{
                      borderTop: '1px solid hsl(0 0% 10%)',
                    }}
                    onClick={() => setPlaying(playing === i ? null : i)}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'hsl(0 0% 8%)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    <button className={`player-btn player-btn-sm`}>
                      {playing === i ? <Pause size={11} /> : <Play size={11} className="ml-0.5" />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-medium text-sm tracking-wide truncate">{d.title}</h4>
                      <p className="text-[0.6rem] text-label mt-0.5">{d.client}</p>
                    </div>
                    {/* Mini waveform */}
                    {playing === i && (
                      <div className="flex items-center gap-[3px] h-4">
                        {[0.6, 1, 0.7, 0.9, 0.5].map((h, j) => (
                          <span
                            key={j}
                            className="waveform-bar active"
                            style={{
                              height: `${h * 16}px`,
                              animationDelay: `${j * 0.15}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                    <span className="text-[0.6rem] text-label font-mono tracking-wider">{d.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ━━━ Scroll indicator ━━━ */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="scroll-indicator">
            <span className="text-[0.5rem] uppercase tracking-[4px] text-gold-muted">explorar</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
