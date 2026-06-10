import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Marketing sur les Moteurs de Recherche — SEO & Google Ads | Keter Marketing',
  description: 'Positionnez votre marque devant vos futurs clients sur Google. SEO d\'acquisition et publicité ROI-focused pour générer du trafic qualifié.',
  openGraph: {
    title: 'Marketing sur les Moteurs de Recherche — SEO & Google Ads | Keter Marketing',
    description: 'SEO d\'acquisition et publicité ROI-focused pour générer du trafic qualifié depuis Google.',
  },
}

export default function SearchEngineMarketingLayout({ children }: { children: ReactNode }) {
  return children
}
