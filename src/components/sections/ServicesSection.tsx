'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { ArrowRight, Globe, PenTool, BarChart3 } from 'lucide-react'
import { WHATSAPP_BOOKING_URL } from '@/lib/constants'

const services = [
  {
    title: 'Créer ou refondre votre site web',
    description: 'Un site stratégique qui convertit vos visiteurs en clients — avec copywriting, design et développement intégrés. Pas de lorem ipsum, pas de placebos visuels.',
    icon: Globe,
  },
  {
    title: 'Construire une page qui vend',
    description: 'Une landing page haute conversion pour lancer une offre, vendre une formation ou générer des leads — sans publicité aléatoire. Chaque section a un objectif mesurable.',
    icon: PenTool,
  },
  {
    title: 'Repositionner votre message',
    description: 'Audit de votre présence digitale, copywriting de conversion et stratégie éditoriale pour les entreprises qui veulent des résultats — pas du contenu.',
    icon: BarChart3,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 md:mb-16">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
                Ce qu&apos;on fait
              </span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white">
                Trois types de missions.<br />Un seul objectif : votre croissance.
              </h2>
            </div>
            <Link
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] hover:text-[#B8960C] transition-colors duration-200 group shrink-0"
            >
              Démarrer mon projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Service cards */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <div
                  key={i}
                  className="group relative p-7 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/40 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-white/45 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Arrow link */}
                  <div className="flex items-center gap-2 text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
