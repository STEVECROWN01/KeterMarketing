import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Notre Processus de Design & Développement | Keter Marketing',
  description: 'Découvrez comment nous créons des sites internet haut de gamme conçus pour capter l\'attention de votre cible et générer des ventes. Processus éprouvé en 5 étapes.',
  openGraph: {
    title: 'Notre Processus de Design & Développement | Keter Marketing',
    description: 'Découvrez comment nous créons des sites internet haut de gamme conçus pour capter l\'attention de votre cible et générer des ventes.',
  },
}

export default function WebDesignLayout({ children }: { children: ReactNode }) {
  return children
}
