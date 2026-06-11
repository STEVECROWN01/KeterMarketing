'use client'

import { useRouter } from 'next/navigation'
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
  const router = useRouter()

  return (
    <ImageCarouselHero
      title={
        <>
          <span className="text-white/80 font-normal">Nous créons des sites web qui</span>
          <br />
          <span className="text-[#D4AF37] font-semibold">Génèrent des Ventes</span>
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
        router.push('/request-a-quote')
      }}
      onSecondaryCtaClick={() => {
        const el = document.querySelector('#portfolio')
        el?.scrollIntoView({ behavior: 'smooth' })
      }}
      images={heroImages}
      features={heroFeatures}
      ratingBadge={
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </span>
            <span className="font-semibold text-white text-xs">5.0</span>
          </span>
          <span className="text-white/40 text-xs">—</span>
          <span className="text-white/60 text-xs font-mono">Basé sur plus de 20 clients satisfaits</span>
        </div>
      }
      microCopy="Appel découverte gratuit · 30 minutes · Sans engagement"
    />
  )
}
