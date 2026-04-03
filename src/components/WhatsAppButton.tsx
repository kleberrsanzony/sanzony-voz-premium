import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5500000000000"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ background: '#25D366' }}
    aria-label="Falar via WhatsApp"
  >
    <MessageCircle size={24} style={{ color: '#fff' }} />
  </a>
)

export default WhatsAppButton
