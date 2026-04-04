import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Megaphone } from 'lucide-react'
import { services } from '@/data/content'

const ServicesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="servicos" ref={ref}>
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
              <div className="icon-badge"><Megaphone size={18} style={{ color: '#e0c27a' }} /></div>
              <span className="section-label mt-5">Serviços</span>
            </motion.div>
            <motion.h2
              className="mt-8 font-display font-bold text-3xl md:text-5xl tracking-[-0.02em]"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 1.2 }}
            >
              Soluções vocais para <span className="text-gold">cada formato.</span>
            </motion.h2>
            <motion.p
              className="mt-6 text-muted-foreground text-sm md:text-base leading-[2]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 }}
            >
              Cada tipo de projeto exige um approach vocal específico.
            </motion.p>
          </div>

          {/* Grid with 1px dividers */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px rounded-sm overflow-hidden"
            style={{ background: 'hsl(0 0% 8%)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="flex flex-col gap-5 p-10 cursor-default relative active:scale-[0.98] transition-transform"
                style={{ background: 'hsl(0 0% 3%)' }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.08 * i }}
                whileHover={{ backgroundColor: 'hsl(0 0% 5%)', transition: { duration: 0.5 } }}
                data-cursor="grow"
              >
                <motion.div
                  className="icon-badge"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <s.icon size={18} style={{ color: '#e0c27a' }} />
                </motion.div>
                <h3 className="font-display font-semibold text-lg tracking-wide">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-[2]">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
