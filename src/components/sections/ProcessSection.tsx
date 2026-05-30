'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { ChevronDown } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Appel découverte',
    description: '30 minutes pour comprendre votre activité, votre cible, vos objectifs et les obstacles actuels de votre site. Gratuit, sans engagement.',
  },
  {
    number: '02',
    title: 'Stratégie & Architecture',
    description: "On définit ensemble l'architecture du site — les pages, les sections, la hiérarchie de l'information.",
  },
  {
    number: '03',
    title: 'Copywriting',
    description: 'Chaque mot du site est rédigé par Keter Marketing. Pas de lorem ipsum. Pas de texte générique.',
  },
  {
    number: '04',
    title: 'Design & Développement',
    description: 'Le design vient après le message — jamais avant. On construit l\'interface visuelle sur la base du copywriting validé.',
  },
  {
    number: '05',
    title: 'Mise en ligne & Suivi',
    description: 'Déploiement, configuration Google Analytics, Search Console, formation de 30 minutes, et 30 jours de support inclus.',
  },
]

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="process" className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <AnimatedSection>
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
            Notre Process
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-12 md:mb-16">
            Comment notre process fonctionne.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 py-6 md:py-7 text-left group hover:bg-white/[0.03] transition-colors duration-200 px-3 -mx-3 rounded-lg"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]/60 group-hover:text-[#D4AF37] shrink-0 w-12 md:w-14 transition-colors duration-200">
                        {step.number}
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                        {step.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-white/40 shrink-0 transition-all duration-300 ${
                        isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-6 md:pb-7 pl-[72px] md:pl-[88px] pr-3">
                      <p className="text-[15px] text-white/45 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
