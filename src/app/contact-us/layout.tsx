import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contactez-nous | Keter Marketing',
  description: 'Une question, un projet ? Contactez Keter Marketing par email, téléphone ou WhatsApp. Réponse sous 24h.',
  openGraph: {
    title: 'Contactez-nous | Keter Marketing',
    description: 'Contactez Keter Marketing par email, téléphone ou WhatsApp. Réponse sous 24h.',
  },
}

export default function ContactUsLayout({ children }: { children: ReactNode }) {
  return children
}
