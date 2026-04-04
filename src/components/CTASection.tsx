import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, MessageCircle } from 'lucide-react'

const CTASection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá Sanzony! Meu nome é ${form.name}. Projeto: ${form.project}. ${form.message}`
    )
    window.open(`https://wa.me/5500000000000?text=${msg}`, '_blank')
  }

  return (
    <section id="contato" ref={ref}>
      <div className="section-divider" />
      <div className="section-spacing">
        <div className="container-site">
          {/* CTA Headline — cinematic */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h2
              className="font-display font-bold text-3xl md:text-5xl lg:text-[4rem] leading-[1.05] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Sua marca está pronta<br />
              <span className="text-gold-shimmer">para subir de nível?</span>
            </motion.h2>
            <motion.p
              className="mt-8 text-muted-foreground text-sm md:text-base leading-[2]"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Vamos criar uma assinatura vocal à altura da sua mensagem.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 lg:gap-24">
            {/* Left */}
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
                animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{ delay: 0.25, duration: 1.2 }}
                className="flex flex-col"
              >
                <div className="icon-badge mb-6">
                  <MessageCircle size={18} style={{ color: '#e0c27a' }} />
                </div>
                <span className="section-label">Contato Direto</span>
                <p className="mt-6 text-muted-foreground leading-[2.2] text-sm">
                  Conte sobre seu projeto e receba um orçamento personalizado.
                  Atendimento direto, sem intermediários.
                </p>

                <div className="mt-12 flex flex-col gap-4">
                  <motion.a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-fit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle size={15} className="relative z-10" />
                    <span>WhatsApp Direto</span>
                  </motion.a>
                  <motion.a
                    href="mailto:contato@sanzonyvoz.com.br"
                    className="btn-outline w-fit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={15} />
                    <span>Enviar E-mail</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Right — Form */}
            <div className="md:col-span-6 md:col-start-7">
              <motion.form
                onSubmit={handleSubmit}
                className="glass-card border-gold-glow space-y-7"
                initial={{ opacity: 0, x: 60, filter: 'blur(12px)' }}
                animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
                transition={{ delay: 0.3, duration: 1.2 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-[0.5rem] text-label uppercase tracking-[3px] block mb-3">Nome</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="text-[0.5rem] text-label uppercase tracking-[3px] block mb-3">E-mail</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[0.5rem] text-label uppercase tracking-[3px] block mb-3">Tipo de Projeto</label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    className="input-field"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option>Spot Comercial</option>
                    <option>Vinheta</option>
                    <option>Institucional</option>
                    <option>Chamada para Rádio</option>
                    <option>Carro de Som</option>
                    <option>Conteúdo Digital</option>
                    <option>Campanha Completa</option>
                    <option>Branding Vocal</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-[0.5rem] text-label uppercase tracking-[3px] block mb-3">Mensagem</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Descreva brevemente o projeto..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={14} className="relative z-10" />
                  <span>Enviar Mensagem</span>
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
