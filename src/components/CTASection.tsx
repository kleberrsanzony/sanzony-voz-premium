import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Send, MessageCircle } from 'lucide-react'

const CTASection = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Olá Sanzony! Meu nome é ${form.name}. Projeto: ${form.project}. ${form.message}`
    )
    window.open(`https://wa.me/5500000000000?text=${msg}`, '_blank')
  }

  return (
    <section id="contato" className="section-spacing" ref={ref}>
      <div className="container-site">
        {/* Headline CTA */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="font-display font-bold text-3xl md:text-5xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            Sua marca está pronta<br />
            <span className="text-silver">para subir de nível?</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-muted-foreground text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
          >
            Vamos criar uma assinatura vocal à altura da sua mensagem.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left — direct contact */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="icon-badge mb-4">
                <MessageCircle size={18} className="text-silver" />
              </div>
              <span className="section-label">Contato Direto</span>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Conte sobre seu projeto e receba um orçamento personalizado.
                Atendimento direto, sem intermediários.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp Direto
                </a>
                <a href="mailto:contato@sanzonyvoz.com.br" className="btn-outline gap-2">
                  <Send size={16} />
                  E-mail
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-6 md:col-start-7">
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card space-y-5"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-xs text-label uppercase tracking-wider block mb-2">Nome</label>
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
                  <label className="text-xs text-label uppercase tracking-wider block mb-2">E-mail</label>
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
                <label className="text-xs text-label uppercase tracking-wider block mb-2">Tipo de Projeto</label>
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
                <label className="text-xs text-label uppercase tracking-wider block mb-2">Mensagem</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Descreva brevemente o projeto..."
                />
              </div>
              <button type="submit" className="btn-primary w-full gap-2">
                <Send size={16} />
                Enviar Mensagem
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
