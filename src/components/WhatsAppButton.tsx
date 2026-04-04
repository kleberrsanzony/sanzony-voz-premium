import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5500000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-7 right-7 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-400 hover:scale-110"
    style={{
      background: 'linear-gradient(135deg, hsl(145 65% 42%), hsl(145 60% 38%))',
      boxShadow: '0 4px 20px hsl(145 65% 42% / 0.2)',
    }}
    aria-label="Falar via WhatsApp"
  >
    <MessageCircle size={22} style={{ color: '#fff' }} />
  </a>
)

export default WhatsAppButton
