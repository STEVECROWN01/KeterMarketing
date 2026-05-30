'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const faqs = [
  {
    question: 'Avec quel type de client travaillez-vous ?',
    answer:
      'Agences, infopreneurs, consultants, coachs, PME et prestataires B2B. Si vous vendez une expertise ou un service et que votre site ne vous ramène pas de clients — c\'est notre terrain.',
  },
  {
    question: 'Est-ce que je dois fournir les textes de mon site ?',
    answer:
      'Non. Le copywriting est inclus dans toutes nos offres. On écrit chaque mot — vous nous donnez les informations sur votre activité lors de l\'appel découverte, on s\'occupe du reste.',
  },
  {
    question: 'Combien de temps dure la création ?',
    answer:
      'Entre 10 jours pour un one-page et 4 semaines pour une refonte complète. Les délais sont fixés dès la signature et respectés. Pas de surprise.',
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer:
      'Chaque site est optimisé pour le référencement naturel de base — balises, structure, performances techniques. Pour un SEO avancé avec stratégie de contenu, c\'est un accompagnement complémentaire.',
  },
  {
    question: 'Je ne connais pas le web. Est-ce que je vais pouvoir gérer mon site ?',
    answer:
      'Oui. La formation de 30 minutes incluse dans chaque livraison couvre les actions courantes. Votre site est conçu pour être simple à mettre à jour.',
  },
  {
    question: 'Pourquoi Keter et pas une solution générique ?',
    answer:
      'Une solution générique vous donne un site. Keter vous donne un actif commercial. Un site qui n\'attire aucun client ne coûte pas moins cher — il coûte infiniment plus, en opportunités manquées.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[38%_1fr] gap-12 lg:gap-20">

          {/* LEFT — Title + CTA (Sher Agency style) */}
          <AnimatedSection className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
              FAQ
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-6">
              Questions fréquentes
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-xs">
              Une question ? L&apos;équipe répond sous 24h.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 group"
            >
              Nous Contacter
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>

          {/* RIGHT — Accordion */}
          <AnimatedSection delay={0.15}>
            <div className="flex flex-col">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={i} className="border-b border-white/10 last:border-b-0">
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                    >
                      <h3 className="text-base md:text-[17px] font-medium text-white/80 group-hover:text-white transition-colors duration-200 pr-4 leading-snug">
                        {faq.question}
                      </h3>
                      <span
                        className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-[14px] transition-all duration-300 mt-0.5 ${
                          isOpen
                            ? 'bg-white border-white text-[#0B0B0B]'
                            : 'border-white/20 text-white/40 group-hover:border-white/40 group-hover:text-white'
                        }`}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="pb-6 text-[15px] text-white/45 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
