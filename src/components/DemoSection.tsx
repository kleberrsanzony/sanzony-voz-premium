import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Pause, Headphones } from 'lucide-react'
import { gridDemos } from '@/data/content'

const DemoSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <section id="demos" className="section-spacing" ref={ref}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
            <div className="icon-badge"><Headphones size={18} className="text-silver" /></div>
            <span className="section-label mt-3">Portfolio</span>
          </motion.div>
          <motion.h2
            className="mt-5 font-display font-bold text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Ouça a diferença.
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Cada projeto exige uma abordagem vocal única. Explore o portfolio.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridDemos.map((d, i) => (
            <motion.div
              key={d.title}
              className="glass-card group cursor-pointer hover:bg-secondary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              style={{ transitionProperty: 'background, transform' }}
              onClick={() => setPlaying(playing === i ? null : i)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div className="flex items-center gap-4">
                <button className="player-btn player-btn-sm group-hover:bg-silver transition-colors duration-300"
                  style={playing === i ? { background: 'var(--color-silver)' } : undefined}>
                  {playing === i ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                </button>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-medium text-sm">{d.title}</h4>
                  <p className="text-[0.65rem] text-muted-foreground mt-0.5">{d.client}</p>
                </div>
                <div className="text-right">
                  <span className="text-[0.6rem] text-label font-mono">{d.duration}</span>
                  <p className="text-[0.55rem] text-muted-foreground uppercase tracking-wider mt-0.5">{d.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DemoSection
