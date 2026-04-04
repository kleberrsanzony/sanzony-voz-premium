import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/content'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex flex-col items-center">
              <div className="icon-badge"><Quote size={18} style={{ color: 'hsl(42 45% 65%)' }} /></div>
              <span className="section-label mt-4">Depoimentos</span>
            </motion.div>
            <motion.h2
              className="mt-6 font-display font-bold text-3xl md:text-5xl tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9 }}
            >
              O que dizem sobre <span className="text-gold">o trabalho.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="glass-card border-gold-glow flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
              >
                <div>
                  {/* Gold stars */}
                  <div className="flex gap-1.5 mb-6">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} size={13} className="star-gold" />
                    ))}
                  </div>
                  <p className="text-sm text-silver leading-[1.9] italic">"{t.text}"</p>
                </div>
                <div className="mt-8 pt-5" style={{ borderTop: '1px solid hsl(0 0% 12%)' }}>
                  <p className="font-display font-medium text-sm tracking-wide">{t.name}</p>
                  <p className="text-[0.65rem] text-label mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
