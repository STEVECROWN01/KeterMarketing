'use client'

import AnimatedSection from './AnimatedSection'

const stats = [
  { value: '20+', label: 'Projets livrés' },
  { value: '100%', label: 'Copywriting intégré' },
  { value: '30 min', label: "Pour évaluer votre site" },
  { value: '3 sem.', label: 'Délai moyen livraison' },
]

export default function StatsSection() {
  return (
    <section className="bg-[#0B0B0B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#D4AF37] leading-none mb-3">
                  {stat.value}
                </div>
                <p className="text-sm md:text-[15px] text-white/40 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
