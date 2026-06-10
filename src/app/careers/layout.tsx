import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Carrières — Rejoignez Keter Marketing',
  description: 'Rejoignez une agence qui construit des choses qui comptent. Postes ouverts en développement web et communication digitale au Bénin.',
  openGraph: {
    title: 'Carrières — Rejoignez Keter Marketing',
    description: 'Postes ouverts en développement web et communication digitale. Rejoignez une agence qui construit des choses qui comptent.',
  },
}

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children
}
