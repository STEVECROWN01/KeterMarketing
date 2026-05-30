'use client'

import { ImageCarouselHero } from '@/components/ui/ai-image-generator-hero'
import { Star, Award, Zap, Clock } from 'lucide-react'
import Link from 'next/link'

const heroImages = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Site web professionnel — dashboard analytics',
    rotation: -15,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Stratégie digitale et conversion',
    rotation: -8,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Développement web sur mesure',
    rotation: 5,
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Copywriting stratégique',
    rotation: 12,
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Design premium',
    rotation: -12,
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Résultats mesurables',
    rotation: 8,
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Agence web Afrique',
    rotation: -5,
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900',
    alt: 'Présence digitale stratégique',
    rotation: 10,
  },
]

const heroFeatures = [
  {
    title: '20+ Projets Livrés',
    description: 'Chaque site conçu pour convertir, pas juste pour être beau.',
    icon: <Award className="w-5 h-5" />,
  },
  {
    title: '100% Copywriting Intégré',
    description: 'Chaque mot est rédigé pour vendre. Pas de lorem ipsum.',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: '3 Sem. Délai Moyen',
    description: 'Rapide, fiable, sans retard. Résultats mesurables.',
    icon: <Clock className="w-5 h-5" />,
  },
]

export default function HeroSection() {
  return (
    <ImageCarouselHero
      title={
        <>
          <span className="text-white/70 font-normal">Des Sites Web Qui Génèrent de</span>
          <br />
          <span className="text-[#D4AF37]">Vrais Clients</span>
        </>
      }
      subtitle="Keter Marketing"
      description={
        <>
          Keter Marketing conçoit des sites web stratégiques qui transforment vos visiteurs en prises de contact qualifiées.{' '}
          <span className="text-white/80 font-medium">Copywriting intégré. Résultats mesurables.</span>
        </>
      }
      ctaText="Réserver un appel"
      ctaSecondaryText="Voir nos réalisations"
      onCtaClick={() => {
        const el = document.querySelector('#cta-final')
        el?.scrollIntoView({ behavior: 'smooth' })
      }}
      onSecondaryCtaClick={() => {
        const el = document.querySelector('#portfolio')
        el?.scrollIntoView({ behavior: 'smooth' })
      }}
      images={heroImages}
      features={heroFeatures}
      ratingBadge={
        <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
          <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </span>
          <span className="font-semibold text-white text-sm">5.0</span>
          <span className="text-white/40 text-sm">—</span>
          <span className="text-white/60 text-sm">Plus de 20 clients satisfaits</span>
        </span>
      }
      microCopy="Appel découverte gratuit · 30 minutes · Sans engagement"
    />
  )
}
