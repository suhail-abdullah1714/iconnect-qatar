import { MessageCircle } from 'lucide-react'
import { createWhatsAppUrl } from '../utils/whatsapp'

function FloatingWhatsApp() {
  const message = `
Hello iConnectsNow Qatar,

I would like to enquire about apartments and rooms available through iConnectsNow.

Please help me with suitable options.

Thank you.
  `.trim()

  const whatsappUrl = createWhatsAppUrl(message)

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact iConnectsNow Qatar on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#171717] text-white shadow-[0_12px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B08A4A] md:bottom-7 md:right-7"
    >
      <MessageCircle
        size={23}
        strokeWidth={1.8}
      />

      <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-[#F7F5F0] bg-[#B08A4A]" />
    </a>
  )
}

export default FloatingWhatsApp