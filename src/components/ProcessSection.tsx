import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass } from 'lucide-react'
import { steps } from '@/data/content'

const ProcessSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="processo" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
              <div className="icon-badge"><Compass size={18} style={{ color: 'hsl(42 45% 65%)' }} /></div>
              <span className="section-label mt-4">Processo</span>
            </motion.div>
            <motion.h2
              className="mt-6 font-display font-bold text-3xl md:text-5xl tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9 }}
            >
              Do briefing à <span className="text-gold">entrega final.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="icon-badge mb-4">
                  <s.icon size={18} style={{ color: 'hsl(42 45% 65%)' }} />
                </div>
                <span className="text-gold-subtle text-xs font-mono tracking-[3px] mb-3">{s.num}</span>
                <h3 className="font-display font-semibold text-lg tracking-wide">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-3 leading-[1.8]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
