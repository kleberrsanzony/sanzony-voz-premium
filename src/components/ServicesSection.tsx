import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Megaphone } from 'lucide-react'
import { services } from '@/data/content'

const ServicesSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicos" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
              <div className="icon-badge"><Megaphone size={18} style={{ color: 'hsl(42 45% 65%)' }} /></div>
              <span className="section-label mt-4">Serviços</span>
            </motion.div>
            <motion.h2
              className="mt-6 font-display font-bold text-3xl md:text-5xl tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9 }}
            >
              Soluções vocais para <span className="text-gold">cada formato.</span>
            </motion.h2>
            <motion.p
              className="mt-5 text-muted-foreground text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Cada tipo de projeto exige um approach vocal específico.
            </motion.p>
          </div>

          {/* Grid with subtle dividers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden" style={{ background: 'hsl(0 0% 10%)' }}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                className="flex flex-col gap-5 p-8 transition-all duration-500 cursor-default"
                style={{ background: 'hsl(0 0% 5%)' }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.07 * i, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'hsl(0 0% 7%)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'hsl(0 0% 5%)' }}
              >
                <div className="icon-badge">
                  <s.icon size={18} style={{ color: 'hsl(42 45% 65%)' }} />
                </div>
                <h3 className="font-display font-semibold text-lg tracking-wide">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-[1.8]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
