import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import { heroCategories, heroDemos } from '@/data/content'

const Hero = () => {
  const [activeTab, setActiveTab] = useState<string>(heroCategories[0])
  const [playing, setPlaying] = useState<number | null>(null)
  const filtered = heroDemos.filter((d) => d.category === activeTab)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        {/* Atmospheric glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: 'oklch(0.6 0.1 250)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: 'oklch(0.7 0.06 65)' }} />
      </div>

      <div className="container-site relative z-10 pt-32 pb-20">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left — Headline */}
          <div className="md:col-span-7">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <span className="section-label">Locução Premium & Branding Vocal</span>
            </motion.div>

            <motion.h1
              className="mt-6 font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sua marca não precisa
              <br /><span className="text-silver">de uma voz.</span>
              <br />Precisa de presença.
            </motion.h1>

            <motion.p
              className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Locução premium para campanhas, marcas e projetos que querem ser lembrados.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <a href="#demos" className="btn-primary">Ouvir Demos</a>
              <a href="#contato" className="btn-outline">Solicitar Orçamento</a>
            </motion.div>
          </div>

          {/* Right — Premium Player */}
          <div className="md:col-span-5">
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-5">
                {heroCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => { setActiveTab(c); setPlaying(null) }}
                    className={`px-4 py-1.5 text-[0.6rem] uppercase tracking-[2px] rounded transition-all duration-300 ${
                      activeTab === c
                        ? 'bg-foreground text-background'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    style={activeTab !== c ? { background: 'oklch(0.269 0 0)' } : undefined}
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
                    className="flex items-center gap-3 py-3 border-t border-border-subtle group cursor-pointer hover:bg-secondary/30 px-2 -mx-2 rounded transition-colors duration-200"
                    onClick={() => setPlaying(playing === i ? null : i)}
                  >
                    <button className={`player-btn player-btn-sm ${playing === i ? '' : ''}`}
                      style={playing === i ? { background: 'var(--color-silver)' } : undefined}>
                      {playing === i ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                    </button>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-medium text-sm truncate">{d.title}</h4>
                      <p className="text-[0.65rem] text-muted-foreground">{d.client}</p>
                    </div>
                    <span className="text-[0.65rem] text-label font-mono">{d.duration}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="scroll-indicator">
            <span className="text-[0.55rem] uppercase tracking-[3px] text-label">explorar</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
