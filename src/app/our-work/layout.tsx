import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio — Nos Réalisations & Études de Cas | Keter Marketing',
  description: 'Découvrez nos sites vitrines, e-commerce et applications SaaS conçus pour maximiser l\'acquisition clients. Études de cas détaillées.',
  openGraph: {
    title: 'Portfolio — Nos Réalisations | Keter Marketing',
    description: 'Sites vitrines, e-commerce et applications SaaS conçus pour maximiser l\'acquisition clients.',
  },
}

export default function OurWorkLayout({ children }: { children: ReactNode }) {
  return children
}
