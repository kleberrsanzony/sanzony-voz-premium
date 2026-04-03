import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Compass } from 'lucide-react'
import { steps } from '@/data/content'

const ProcessSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="processo" className="section-spacing" ref={ref}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
            <div className="icon-badge"><Compass size={18} className="text-silver" /></div>
            <span className="section-label mt-3">Processo</span>
          </motion.div>
          <motion.h2
            className="mt-5 font-display font-bold text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Do briefing à entrega final.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="icon-badge mb-3">
                <s.icon size={18} className="text-silver" />
              </div>
              <span className="text-xs text-label font-mono mb-2">{s.num}</span>
              <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
