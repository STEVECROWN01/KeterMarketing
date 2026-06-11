'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    label: 'Créer ou refondre votre site',
    description: 'Un site pensé pour convertir vos visiteurs en clients — pas juste pour être beau.',
    href: '/webdesign',
  },
  {
    label: 'Gestion & maintenance web',
    description: 'Votre site reste rapide, sécurisé et à jour. Vous gérez votre business.',
    href: '/website-management',
  },
  {
    label: 'Marketing sur les moteurs de recherche',
    description: 'Attirer les clients qui cherchent déjà ce que vous vendez, sur Google.',
    href: '/search-engine-marketing',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[36%_1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT — Title + CTA (Sher Agency style) */}
          <AnimatedSection className="lg:sticky lg:top-28">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
              Nos Services
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-8">
              Ce que nous faisons.
            </h2>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-white/20 text-white text-[13px] font-semibold uppercase tracking-[0.08em] hover:bg-[#D4AF37] hover:text-[#0B0B0B] hover:border-[#D4AF37] transition-all duration-300 group"
            >
              Démarrer votre projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* RIGHT — Service list (Sher Agency arrow style) */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col">
              {services.map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="group flex items-start justify-between gap-6 py-8 border-b border-white/10 last:border-b-0 hover:border-white/20 transition-colors duration-200"
                >
                  <div>
                    <h3 className="text-white text-xl sm:text-2xl md:text-[26px] font-medium group-hover:text-[#D4AF37] transition-colors duration-200 mb-2 leading-snug">
                      {service.label}
                    </h3>
                    <p className="text-white/35 text-[14px] leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 group-hover:border-[#D4AF37]/60 group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300 mt-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
