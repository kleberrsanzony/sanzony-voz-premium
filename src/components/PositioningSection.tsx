import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AudioLines } from 'lucide-react'
import { pillars } from '@/data/content'

const PositioningSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-spacing" ref={ref}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
            <div className="icon-badge"><AudioLines size={18} className="text-silver" /></div>
            <span className="section-label mt-3">Posicionamento</span>
          </motion.div>
          <motion.h2
            className="mt-5 font-display font-bold text-3xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            Mais que uma voz.
            <br /><span className="text-silver">Uma leitura estratégica de mercado.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card text-center flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <div className="icon-badge">
                <p.icon size={18} className="text-silver" />
              </div>
              <h3 className="font-display font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PositioningSection
