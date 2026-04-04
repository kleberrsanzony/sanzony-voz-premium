import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mic } from 'lucide-react'
import { capabilities } from '@/data/content'

const StudioSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="estudio" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Left */}
            <div className="md:col-span-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col"
              >
                <div className="icon-badge mb-6"><Mic size={18} style={{ color: '#e0c27a' }} /></div>
                <span className="section-label">Estúdio</span>
              </motion.div>

              <motion.h2
                className="mt-8 font-display font-bold text-3xl md:text-4xl lg:text-[3.5rem] tracking-[-0.02em] leading-[1.05] heading-border"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 1 }}
              >
                Gravado em estúdio profissional<br />
                <span className="text-gold">com padrão internacional.</span>
              </motion.h2>

              <motion.p
                className="mt-10 text-muted-foreground leading-[2.2] text-sm md:text-base"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35, duration: 1 }}
              >
                Ambiente acústico dedicado, equipamentos de referência e workflow
                otimizado para entregar áudio broadcast-ready. Cada projeto é tratado
                com a mesma obsessão por qualidade.
              </motion.p>

              <motion.p
                className="mt-6 text-sm font-display italic tracking-wide"
                style={{ color: '#a67c2e' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                "O resultado é uma voz que não apenas comunica — posiciona."
              </motion.p>
            </div>

            {/* Right — capabilities */}
            <div className="md:col-span-5 md:col-start-8">
              <motion.div
                className="glass-card border-gold-glow space-y-0"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 1 }}
              >
                {capabilities.map((c, i) => (
                  <motion.div
                    key={c.title}
                    className={`flex items-start gap-4 py-7 ${i > 0 ? 'border-t' : ''}`}
                    style={i > 0 ? { borderColor: 'hsl(0 0% 8%)' } : undefined}
                    whileHover={{ x: 6, transition: { duration: 0.4 } }}
                  >
                    <motion.div
                      className="icon-badge shrink-0 mt-0.5"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <c.icon size={16} style={{ color: '#e0c27a' }} />
                    </motion.div>
                    <div>
                      <span className="font-display font-medium text-sm tracking-wide">{c.title}</span>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-[2]">{c.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioSection
