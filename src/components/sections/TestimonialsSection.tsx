'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import AnimatedSection from './AnimatedSection'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Keter Marketing a transformé notre présence digitale. En 3 semaines, notre site génère des demandes de devis chaque semaine. L\'équipe ne livre pas un site — elle livre un commercial digital.',
    name: 'Directeur Commercial',
    company: 'PME BTP — Parakou',
    date: 'Novembre 2025 sur Google',
    rating: 5,
    initials: 'DC',
    reviews: '3 avis',
  },
  {
    quote: 'J\'avais un site depuis 2 ans qui ne m\'amenait aucun client. Keter a identifié le problème en 30 minutes d\'appel. 3 semaines plus tard, mon premier lead qualifié venait du site.',
    name: 'Coach Business',
    company: 'Cotonou',
    date: 'Décembre 2025 sur Google',
    rating: 5,
    initials: 'CB',
    reviews: '1 avis',
  },
  {
    quote: 'Ce qui m\'a convaincu avec Keter : ils n\'ont pas commencé par me parler de design. Ils ont d\'abord compris ma cible et mes objectifs. Le résultat ? Un site qui travaille pour moi 24h/24.',
    name: 'Fondatrice',
    company: 'Agence de Formation — Lomé',
    date: 'Janvier 2026 sur Google',
    rating: 5,
    initials: 'FD',
    reviews: '2 avis',
  },
  {
    quote: 'Je recommande Keter à 100%. Le processus est clair, les délais sont respectés et le site dépasse mes attentes. Enfin une agence qui comprend que le web doit rapporter.',
    name: 'Gérant SARL',
    company: 'Services IT — Abidjan',
    date: 'Mars 2026 sur Google',
    rating: 5,
    initials: 'GS',
    reviews: '5 avis',
  },
  {
    quote: 'Processus du début à la fin très fluide. Ils ont produit un résultat qui a dépassé toutes mes attentes. Je recommande vivement à quiconque veut un site qui convertit vraiment.',
    name: 'Directrice',
    company: 'E-commerce — Dakar',
    date: 'Février 2026 sur Google',
    rating: 5,
    initials: 'DR',
    reviews: '4 avis',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-3 block">
              Avis Google
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-[#0B0B0B]">
              Avis de nos clients.
            </h2>
            <p className="text-[15px] text-[#0B0B0B]/40 mt-3 max-w-lg">
              Ces résultats proviennent de missions client spécifiques et ne constituent pas une garantie de résultats futurs.
            </p>
          </div>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.15}>
          <div className="relative overflow-hidden" ref={trackRef}>
            {/* Cards track */}
            <div
              className="flex transition-transform duration-500 ease-in-out gap-5"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% / ${Math.min(testimonials.length, 3)} - ${currentIndex * (20 / Math.min(testimonials.length, 3))}px))`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] shrink-0 p-7 rounded-2xl border border-[#0B0B0B]/10 bg-[#F9F9F9] hover:border-[#D4AF37]/40 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                      <span className="text-[#D4AF37] text-sm font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0B0B0B]">{t.name}</p>
                      <p className="text-[12px] text-[#0B0B0B]/40">{t.reviews}</p>
                      <p className="text-[11px] text-[#0B0B0B]/30 mt-0.5">{t.date}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[14px] text-[#0B0B0B]/65 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Company */}
                  <p className="text-[12px] text-[#0B0B0B]/30 mt-4 font-medium">{t.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-[#0B0B0B] w-8' : 'bg-[#0B0B0B]/20 w-4'
                  }`}
                  aria-label={`Avis ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#0B0B0B]/15 flex items-center justify-center text-[#0B0B0B]/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#0B0B0B]/15 flex items-center justify-center text-[#0B0B0B]/50 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-200"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
