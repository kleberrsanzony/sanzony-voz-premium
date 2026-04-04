import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass } from 'lucide-react'
import { steps } from '@/data/content'

const ProcessSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="processo" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="icon-badge"><Compass size={18} style={{ color: '#e0c27a' }} /></div>
              <span className="section-label mt-5">Processo</span>
            </motion.div>
            <motion.h2
              className="mt-8 font-display font-bold text-3xl md:text-5xl tracking-[-0.02em]"
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ delay: 0.1, duration: 1.2 }}
            >
              Do briefing à <span className="text-gold">entrega final.</span>
            </motion.h2>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Horizontal connecting line (desktop) */}
            <motion.div
              className="hidden md:block absolute top-[3.5rem] left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent 5%, hsl(0 0% 12%) 20%, #e0c27a10 50%, hsl(0 0% 12%) 80%, transparent 95%)' }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="grid md:grid-cols-5 gap-8 lg:gap-10">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  className="feature-card active:scale-[0.98] transition-transform"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.9, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className="icon-badge mb-5"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <s.icon size={18} style={{ color: '#e0c27a' }} />
                  </motion.div>
                  <span className="text-gold text-xs font-mono tracking-[4px] mb-3">{s.num}</span>
                  <h3 className="font-display font-semibold text-lg tracking-wide">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mt-4 leading-[2]">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
