import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Megaphone } from 'lucide-react'
import { services } from '@/data/content'

const ServicesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicos" className="section-spacing" ref={ref}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
            <div className="icon-badge"><Megaphone size={18} className="text-silver" /></div>
            <span className="section-label mt-3">Serviços</span>
          </motion.div>
          <motion.h2
            className="mt-5 font-display font-bold text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Soluções vocais para cada formato.
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Cada tipo de projeto exige um approach vocal específico.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--color-border-subtle)' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass-card flex flex-col gap-4 hover:bg-secondary/50 transition-colors duration-300"
              style={{ borderRadius: 0 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i }}
            >
              <div className="icon-badge">
                <s.icon size={18} className="text-silver" />
              </div>
              <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
