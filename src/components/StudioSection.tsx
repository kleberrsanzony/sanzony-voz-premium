import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mic } from 'lucide-react'
import { capabilities } from '@/data/content'

const StudioSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="estudio" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left — text */}
            <div className="md:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col">
                <div className="icon-badge mb-5"><Mic size={18} style={{ color: 'hsl(42 45% 65%)' }} /></div>
                <span className="section-label">Estúdio</span>
              </motion.div>

              <motion.h2
                className="mt-6 font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight heading-border"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.9 }}
              >
                Gravado em estúdio profissional<br />
                <span className="text-gold">com padrão internacional.</span>
              </motion.h2>

              <motion.p
                className="mt-8 text-muted-foreground leading-[1.9] text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 }}
              >
                Ambiente acústico dedicado, equipamentos de referência e workflow
                otimizado para entregar áudio broadcast-ready. Cada projeto é tratado
                com a mesma obsessão por qualidade.
              </motion.p>

              <motion.p
                className="mt-5 text-silver text-sm font-display italic tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 }}
              >
                O resultado é uma voz que não apenas comunica — posiciona.
              </motion.p>
            </div>

            {/* Right — capabilities */}
            <div className="md:col-span-4 md:col-start-9">
              <motion.div
                className="glass-card border-gold-glow space-y-0"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.9 }}
              >
                {capabilities.map((c, i) => (
                  <div key={c.title} className={`flex items-start gap-4 py-6 ${i > 0 ? 'border-t' : ''}`} style={i > 0 ? { borderColor: 'hsl(0 0% 12%)' } : undefined}>
                    <div className="icon-badge shrink-0 mt-0.5">
                      <c.icon size={16} style={{ color: 'hsl(42 45% 65%)' }} />
                    </div>
                    <div>
                      <span className="font-display font-medium text-sm tracking-wide">{c.title}</span>
                      <p className="text-xs text-muted-foreground mt-1 leading-[1.8]">{c.desc}</p>
                    </div>
                  </div>
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
