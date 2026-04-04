import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Pause, Headphones } from 'lucide-react'
import { gridDemos } from '@/data/content'

const DemoSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section id="demos" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="icon-badge"><Headphones size={18} style={{ color: '#e0c27a' }} /></div>
              <span className="section-label mt-5">Portfolio</span>
            </motion.div>
            <motion.h2
              className="mt-8 font-display font-bold text-3xl md:text-5xl lg:text-[3.5rem] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Ouça a <span className="text-gold">diferença.</span>
            </motion.h2>
            <motion.p
              className="mt-6 text-muted-foreground text-sm md:text-base leading-[2]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}
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
                initial={{ opacity: 0, y: 50, filter: 'blur(6px)' }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.9, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setPlaying(playing === i ? null : i)}
                whileHover={{ y: -4, transition: { duration: 0.4 } }}
                data-cursor="play"
              >
                <div className="flex items-center gap-4">
                  <motion.button
                    className="player-btn player-btn-sm"
                    whileTap={{ scale: 0.92 }}
                  >
                    {playing === i ? <Pause size={11} /> : <Play size={11} className="ml-0.5" />}
                  </motion.button>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-medium text-sm tracking-wide">{d.title}</h4>
                    <p className="text-[0.55rem] text-label mt-0.5">{d.client}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[0.5rem] text-label font-mono tracking-wider">{d.duration}</span>
                    <p className="text-[0.45rem] uppercase tracking-[3px] mt-0.5" style={{ color: '#7a5c2e' }}>{d.category}</p>
                  </div>
                </div>
                {/* Waveform */}
                {playing === i && (
                  <motion.div
                    className="flex items-center gap-[2px] h-3 mt-5 px-1"
                    initial={{ opacity: 0, scaleX: 0.5 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {Array.from({ length: 35 }).map((_, j) => (
                      <span key={j} className="waveform-bar active flex-1" style={{
                        height: `${3 + Math.random() * 9}px`,
                        animationDelay: `${j * 0.04}s`,
                        animationDuration: `${0.7 + Math.random() * 0.9}s`,
                      }} />
                    ))}
                  </motion.div>
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
