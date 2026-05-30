'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Créer ou refondre votre site web',
    description: 'Get a website or landing page that converts more visitors into customers, and attracts more traffic from Google. Un site stratégique qui convertit vos visiteurs en clients — avec copywriting, design et développement intégrés. Pas de lorem ipsum, pas de placebos visuels.',
  },
  {
    number: '02',
    title: 'Construire une page qui vend (Landing Page)',
    description: 'Une landing page haute conversion pour lancer une offre, vendre une formation ou générer des leads — sans publicité aléatoire. Chaque section a un objectif mesurable et un ciblage d\'objections précis.',
  },
  {
    number: '03',
    title: 'Repositionner votre message & SEM',
    description: 'Drive traffic to your website through organic (SEO) and paid (PPC) traffic. Audit de votre présence digitale, copywriting de conversion et stratégie éditoriale pour les entreprises qui veulent des résultats — pas juste du contenu.',
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="services" className="bg-[#0B0B0B] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT COLUMN — Heading */}
          <AnimatedSection className="w-full lg:w-[40%] shrink-0">
            <div className="sticky top-28">
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
                Ce qu&apos;on fait
              </span>
              <h2 className="text-[32px] sm:text-[38px] md:text-[44px] font-semibold leading-[1.15] text-white mb-6">
                What we do
              </h2>
              <p className="text-white/45 text-[15px] md:text-base leading-relaxed mb-8 max-w-sm">
                Des solutions conçues pour transformer votre trafic en clients réguliers. Choisissez la mission qui correspond à votre étape de croissance.
              </p>
              <div className="hidden lg:block">
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-white text-[#0B0B0B] hover:bg-[#D4AF37] font-semibold text-[13px] uppercase tracking-[0.06em] transition-all duration-300 group"
                >
                  Démarrer mon projet
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN — Accordion list */}
          <AnimatedSection delay={0.15} className="w-full lg:w-[60%] flex-1">
            <div className="flex flex-col border-t border-white/10">
              {services.map((service, i) => {
                const isOpen = activeIndex === i
                const isHovered = hoveredIndex === i

                return (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                    className="relative border-b border-white/10 cursor-pointer group"
                  >
                    {/* Background animation for hover/active */}
                    <div 
                      className={`absolute inset-0 bg-white/[0.02] transition-opacity duration-300 pointer-events-none ${
                        isOpen || isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Accordion header */}
                    <div className="relative flex items-center justify-between gap-6 py-6 md:py-8 px-4 z-10">
                      <div className="flex items-center gap-6">
                        <span className={`text-sm font-mono transition-colors duration-300 ${
                          isOpen || isHovered ? 'text-[#D4AF37]' : 'text-white/30'
                        }`}>
                          {service.number}
                        </span>
                        <h3 className={`text-xl sm:text-2xl font-semibold transition-colors duration-300 ${
                          isOpen || isHovered ? 'text-white' : 'text-white/60'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      
                      {/* Arrow indicator */}
                      <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? 'bg-white border-white text-[#0B0B0B] rotate-180' 
                          : 'border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Accordion body content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden relative z-10"
                        >
                          <div className="pb-8 pl-14 pr-4 md:pl-16">
                            <p className="text-[15px] md:text-base text-white/50 leading-relaxed max-w-xl">
                              {service.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8 lg:hidden">
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center w-full gap-2.5 px-6 py-4 rounded-md bg-white text-[#0B0B0B] hover:bg-[#D4AF37] font-semibold text-[13px] uppercase tracking-[0.06em] transition-all duration-300"
              >
                Démarrer mon projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
