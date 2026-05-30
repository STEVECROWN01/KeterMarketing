'use client'

import { useState, useEffect, useCallback } from 'react'
import AnimatedSection from './AnimatedSection'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Keter Marketing a transformé notre présence digitale. En 3 semaines, notre site génère des demandes de devis chaque semaine. L'équipe ne livre pas un site — elle livre un commercial digital.",
    name: 'Directeur Commercial',
    company: 'PME BTP — Parakou',
    rating: 5,
    initials: 'DC',
  },
  {
    quote: "J'avais un site depuis 2 ans qui ne m'amenait aucun client. Keter a identifié le problème en 30 minutes d'appel. 3 semaines plus tard, mon premier lead qualifié venait du site.",
    name: 'Coach Business',
    company: 'Cotonou',
    rating: 5,
    initials: 'CB',
  },
  {
    quote: "Ce qui m'a convaincu avec Keter : ils n'ont pas commencé par me parler de design. Ils ont d'abord compris ma cible et mes objectifs. Le résultat ? Un site qui travaille pour moi 24h/24.",
    name: 'Fondatrice',
    company: 'Agence de Formation — Lomé',
    rating: 5,
    initials: 'FD',
  },
  {
    quote: "Je recommande Keter à 100%. Le processus est clair, les délais sont respectés et le site depasse mes attentes. Enfin une agence qui comprend que le web doit rapporter.",
    name: 'Gérant SARL',
    company: 'Services IT — Abidjan',
    rating: 5,
    initials: 'GS',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <AnimatedSection>
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
            Témoignages
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-3">
            Ce que disent nos clients.
          </h2>
          <p className="text-[15px] md:text-base text-white/40 mb-12 md:mb-16 max-w-xl">
            Chaque témoignage ici est un projet réel, livré, mesuré.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {/* Review cards — 2 visible on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[0, 1].map((offset) => {
              const idx = (currentIndex + offset) % testimonials.length
              const t = testimonials[idx]
              return (
                <div
                  key={`${idx}-${offset}`}
                  className="p-7 md:p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  {/* Header: Avatar + Name */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-11 h-11 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                      <span className="text-[#D4AF37] text-sm font-bold">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-[13px] text-white/40">{t.company}</p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                    <span className="ml-2 text-[12px] text-white/30">Sur Google</span>
                  </div>

                  {/* Quote */}
                  <p className="text-[15px] text-white/60 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/50 transition-colors duration-200"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-[#D4AF37] w-6' : 'bg-white/20'
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] text-white/50 transition-colors duration-200"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
