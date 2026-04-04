import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Pause, Headphones } from 'lucide-react'
import { gridDemos } from '@/data/content'

const DemoSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section id="demos" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
              <div className="icon-badge"><Headphones size={18} className="text-gold" style={{ color: 'hsl(42 45% 65%)' }} /></div>
              <span className="section-label mt-4">Portfolio</span>
            </motion.div>
            <motion.h2
              className="mt-6 font-display font-bold text-3xl md:text-5xl tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9 }}
            >
              Ouça a <span className="text-gold">diferença.</span>
            </motion.h2>
            <motion.p
              className="mt-5 text-muted-foreground text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Cada projeto exige uma abordagem vocal única. Explore o portfolio.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gridDemos.map((d, i) => (
              <motion.div
                key={d.title}
                className="glass-card border-gold-glow group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setPlaying(playing === i ? null : i)}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div className="flex items-center gap-4">
                  <button className="player-btn player-btn-sm">
                    {playing === i ? <Pause size={11} /> : <Play size={11} className="ml-0.5" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-medium text-sm tracking-wide">{d.title}</h4>
                    <p className="text-[0.6rem] text-label mt-0.5">{d.client}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[0.55rem] text-label font-mono tracking-wider">{d.duration}</span>
                    <p className="text-[0.5rem] text-gold-muted uppercase tracking-widest mt-0.5" style={{ color: 'hsl(38 20% 40%)' }}>{d.category}</p>
                  </div>
                </div>
                {/* Waveform when playing */}
                {playing === i && (
                  <div className="flex items-center gap-[2px] h-3 mt-4 px-1">
                    {Array.from({ length: 30 }).map((_, j) => (
                      <span
                        key={j}
                        className="waveform-bar active flex-1"
                        style={{
                          height: `${3 + Math.random() * 9}px`,
                          animationDelay: `${j * 0.05}s`,
                          animationDuration: `${0.8 + Math.random() * 0.8}s`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection
