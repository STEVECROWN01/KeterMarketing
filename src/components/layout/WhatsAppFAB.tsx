'use client'

import { WHATSAPP_CONTACT_URL } from '@/lib/constants'
import { WhatsAppIcon } from '@/components/icons/SocialIcons'

export default function WhatsAppFAB() {
  return (
    <a
      href={`${WHATSAPP_CONTACT_URL}?text=Bonjour%20Keter%20Marketing%2C%0AJe%20m%27appelle%20%5BNOM%5D.%0AJe%20suis%20int%C3%A9ress%C3%A9(e)%20par%20%3A%20%5BOFFRE%5D.%0A%5BMESSAGE%20LIBRE%5D%0AMon%20num%C3%A9ro%20%3A%20%5BT%C3%89L%C3%89PHONE%5D`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg whatsapp-pulse hover:scale-110 transition-transform duration-200"
      aria-label="Contacter via WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 text-white" />
    </a>
  )
}
