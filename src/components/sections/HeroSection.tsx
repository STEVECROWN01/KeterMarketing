'use client'

import { ImageCarouselHero } from '@/components/ui/ai-image-generator-hero'
import { Star, Award, Zap, Clock } from 'lucide-react'

const heroImages = [
  {
    id: '1',
    src: '/portfolio-winagrotech.png',
    alt: 'Win Agro Tech — Site vitrine agri-tech',
    rotation: -12,
  },
  {
    id: '2',
    src: '/portfolio-academiahelm.png',
    alt: 'Academia Helm — Plateforme SaaS éducative',
    rotation: -5,
  },
  {
    id: '3',
    src: '/portfolio-afribayit.png',
    alt: 'AfriBayit — Marketplace immobilière',
    rotation: 5,
  },
  {
    id: '4',
    src: '/portfolio-foncierfacile.png',
    alt: 'Foncier Facile Afrique — Site vitrine foncier',
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
