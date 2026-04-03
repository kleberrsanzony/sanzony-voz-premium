import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mic } from 'lucide-react'
import { capabilities } from '@/data/content'

const StudioSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="estudio" className="section-spacing" ref={ref}>
      <div className="container-site">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col">
              <div className="icon-badge mb-4"><Mic size={18} className="text-silver" /></div>
              <span className="section-label">Estúdio</span>
            </motion.div>

            <motion.h2
              className="mt-5 font-display font-bold text-3xl md:text-4xl heading-border"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Gravado em estúdio profissional<br />
              <span className="text-silver">com padrão internacional.</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Ambiente acústico dedicado, equipamentos de referência e workflow
              otimizado para entregar áudio broadcast-ready. Cada projeto é tratado
              com a mesma obsessão por qualidade: captação impecável, tratamento
              preciso e prazos respeitados.
            </motion.p>

            <motion.p
              className="mt-4 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              O resultado é uma voz que não apenas comunica — posiciona.
            </motion.p>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <motion.div
              className="glass-card space-y-0"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {capabilities.map((c, i) => (
                <div key={c.title} className={`flex items-center gap-4 py-5 ${i > 0 ? 'border-t border-border-subtle' : ''}`}>
                  <div className="icon-badge shrink-0">
                    <c.icon size={18} className="text-silver" />
                  </div>
                  <div>
                    <span className="font-display font-medium text-sm">{c.title}</span>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioSection
