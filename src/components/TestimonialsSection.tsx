import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/content'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-spacing" ref={ref}>
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
            <div className="icon-badge"><Quote size={18} className="text-silver" /></div>
            <span className="section-label mt-3">Depoimentos</span>
          </motion.div>
          <motion.h2
            className="mt-5 font-display font-bold text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            O que dizem sobre o trabalho.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass-card flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i }}
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-warm" style={{ fill: 'var(--color-warm)' }} />
                  ))}
                </div>
                <p className="text-sm text-silver leading-relaxed">"{t.text}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-subtle">
                <p className="font-display font-medium text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
