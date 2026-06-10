import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Gestion & Maintenance Web | Keter Marketing',
  description: 'Laissez-nous gérer la technique. Hébergement de haute qualité, mises à jour, sécurité et support illimité pour votre site web.',
  openGraph: {
    title: 'Gestion & Maintenance Web | Keter Marketing',
    description: 'Hébergement ultra-rapide, mises à jour, sauvegardes quotidiennes et support dédié pour votre site web.',
  },
}

export default function WebsiteManagementLayout({ children }: { children: ReactNode }) {
  return children
}
