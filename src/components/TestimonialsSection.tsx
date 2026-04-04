import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/content'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section ref={ref}>
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
              <div className="icon-badge"><Quote size={18} style={{ color: '#e0c27a' }} /></div>
              <span className="section-label mt-5">Depoimentos</span>
            </motion.div>
            <motion.h2
              className="mt-8 font-display font-bold text-3xl md:text-5xl tracking-[-0.02em]"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              O que dizem sobre <span className="text-gold">o trabalho.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="glass-card border-gold-glow flex flex-col justify-between py-10"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.5 } }}
              >
                <div>
                  {/* Stars with stagger */}
                  <div className="flex gap-1.5 mb-7">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.18 * i + 0.05 * j, duration: 0.4, type: 'spring' }}
                      >
                        <Star size={13} className="star-gold" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-sm leading-[2.2] italic" style={{ color: 'hsl(210 4% 64%)' }}>"{t.text}"</p>
                </div>
                <div className="mt-10 pt-6" style={{ borderTop: '1px solid hsl(0 0% 8%)' }}>
                  <p className="font-display font-medium text-sm tracking-wide">{t.name}</p>
                  <p className="text-[0.6rem] text-label mt-1.5">{t.role}</p>
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
