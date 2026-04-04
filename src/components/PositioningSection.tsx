import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AudioLines } from 'lucide-react'
import { pillars } from '@/data/content'

const PositioningSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
              <div className="icon-badge"><AudioLines size={18} style={{ color: 'hsl(42 45% 65%)' }} /></div>
              <span className="section-label mt-4">Posicionamento</span>
            </motion.div>
            <motion.h2
              className="mt-6 font-display font-bold text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.9 }}
            >
              Mais que uma voz.
              <br /><span className="text-gold">Uma assinatura.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="glass-card border-gold-glow text-center flex flex-col items-center gap-5"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="icon-badge">
                  <p.icon size={18} style={{ color: 'hsl(42 45% 65%)' }} />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-wide">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-[1.8]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PositioningSection
