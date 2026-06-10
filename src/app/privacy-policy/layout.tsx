import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Keter Marketing',
  description: 'Politique de confidentialité de Keter Marketing. Comment nous collectons, utilisons et protégeons vos données personnelles.',
  openGraph: {
    title: 'Politique de Confidentialité | Keter Marketing',
    description: 'Comment nous collectons, utilisons et protégeons vos données personnelles.',
  },
}

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return children
}
