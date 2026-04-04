import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5500000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-400 hover:scale-110 border-gold-glow"
    style={{
      background: 'linear-gradient(135deg, #a67c2e, #e0c27a, #a67c2e)',
      backgroundSize: '200% auto',
      boxShadow: '0 4px 30px #e0c27a20, 0 0 60px #e0c27a08',
    }}
    aria-label="Falar via WhatsApp"
  >
    <MessageCircle size={22} style={{ color: 'hsl(0 0% 2%)' }} />
  </a>
)

export default WhatsAppButton
