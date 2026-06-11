import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Demander un Devis | Keter Marketing',
  description: 'Obtenez un devis gratuit pour la création, la refonte ou la maintenance de votre site web. Réponse sous 24h.',
  openGraph: {
    title: 'Demander un Devis | Keter Marketing',
    description: 'Devis gratuit pour la création, refonte ou maintenance de votre site web. Réponse sous 24h.',
  },
}

export default function RequestQuoteLayout({ children }: { children: ReactNode }) {
  return children
}
