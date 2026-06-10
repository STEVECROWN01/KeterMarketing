import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { projects } from '@/lib/data'

interface SlugLayoutProps {
  children: ReactNode
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Omit<SlugLayoutProps, 'children'>): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return {
      title: 'Projet introuvable | Keter Marketing',
    }
  }

  return {
    title: `${project.title} — Étude de Cas | Keter Marketing`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Étude de Cas | Keter Marketing`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  }
}

export default function SlugLayout({ children }: SlugLayoutProps) {
  return children
}
