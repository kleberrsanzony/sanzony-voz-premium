import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AudioLines } from 'lucide-react'
import { pillars } from '@/data/content'

const PositioningSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing pt-24">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="icon-badge"><AudioLines size={18} style={{ color: '#e0c27a' }} /></div>
              <span className="section-label mt-5">Posicionamento</span>
            </motion.div>
            <motion.h2
              className="mt-8 font-display font-bold text-3xl md:text-5xl lg:text-[4rem] leading-[1.05] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Mais que uma voz.
              <br /><span className="text-gold">Uma assinatura.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="glass-card border-gold-glow text-center flex flex-col items-center gap-6 py-12"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.5 } }}
                data-cursor="grow"
              >
                <motion.div className="icon-badge" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.4 }}>
                  <p.icon size={18} style={{ color: '#e0c27a' }} />
                </motion.div>
                <h3 className="font-display font-semibold text-xl tracking-wide">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-[2]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PositioningSection
