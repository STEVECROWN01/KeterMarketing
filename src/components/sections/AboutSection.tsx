'use client'

import AnimatedSection from './AnimatedSection'
import { Crown, TrendingUp, Target, ArrowRight } from 'lucide-react'

const philosophy = [
  {
    number: '01',
    title: 'Un site, c\'est un commercial.',
    description: 'Il travaille 24h/24, 7j/7, sans vacances et sans commission. Notre rôle est de le rendre aussi efficace que possible.',
    icon: Crown,
  },
  {
    number: '02',
    title: 'Le beau ne suffit pas.',
    description: 'Un site peut être magnifique et ne rien vendre. On construit des sites qui convertissent — et qui sont beaux parce que le design renforce la confiance, pas l\'inverse.',
    icon: TrendingUp,
  },
  {
    number: '03',
    title: 'On mesure ce qu\'on livre.',
    description: 'Pas de promesses vagues. Chaque projet a des objectifs clairs — et vous recevez les outils pour mesurer les résultats réels.',
    icon: Target,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <AnimatedSection>
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
            À Propos
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-3">
            Keter Marketing. Deux fondateurs. Une obsession.
          </h2>
          <p className="text-[15px] md:text-base text-white/40 mb-12 md:mb-16 max-w-2xl">
            On n&apos;a pas créé une agence web de plus. On a créé l&apos;agence qu&apos;on aurait voulu trouver.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Story + Founders */}
          <AnimatedSection className="lg:w-[45%]">
            <div className="mb-8 space-y-5">
              <p className="text-[15px] md:text-base text-white/50 leading-relaxed">
                <span className="text-[#D4AF37] font-semibold">Keter</span> vient de la Kabbale hébraïque. La Couronne — le sommet absolu. Ce n&apos;est pas un nom choisi par hasard. C&apos;est un engagement : livrer systématiquement le meilleur niveau de travail possible.
              </p>
              <p className="text-[15px] md:text-base text-white/50 leading-relaxed">
                Dawes et Stevens se sont associés avec une conviction simple. La majorité des sites web sont des opportunités manquées. De belles vitrines vides. Des pages qui informent sans jamais convaincre. Keter Marketing existe pour changer ça — en Afrique francophone d&apos;abord, et au-delà.
              </p>
              <p className="text-[15px] md:text-base text-white/50 leading-relaxed">
                Notre méthode : <span className="text-white/80 font-medium">le message avant le design. Le résultat avant l&apos;esthétique. La stratégie avant les pixels.</span> Chaque projet commence par une question : qu&apos;est-ce que ce site doit produire comme résultat concret pour le client ?
              </p>
            </div>

            {/* Founders */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                  <span className="text-[#D4AF37] text-sm font-bold">DA</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Dawes S. Akpovi Tohou</p>
                  <p className="text-[13px] text-[#D4AF37] font-medium mb-1.5">Stratégie & Copywriting</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">
                    Dawes est obsédé par une question : pourquoi certains sites convertissent et d&apos;autres non ? Chez Keter, il est garant du message — chaque mot a un rôle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 flex items-center justify-center shrink-0">
                  <span className="text-[#D4AF37] text-sm font-bold">S</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Stevens</p>
                  <p className="text-[13px] text-[#D4AF37] font-medium mb-1.5">Design & Développement</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">
                    Stevens croit que le design n&apos;est pas une question d&apos;esthétique — c&apos;est une question d&apos;efficacité. Chez Keter, il est garant de l&apos;expérience — chaque pixel a une fonction.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Philosophy */}
          <AnimatedSection delay={0.15} className="lg:w-[55%]">
            <div className="flex flex-col gap-5">
              {philosophy.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/30 hover:bg-white/[0.06] transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 flex items-center justify-center shrink-0 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-[#D4AF37]">{item.number}</span>
                        <h3 className="text-base md:text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[14px] md:text-[15px] text-white/45 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* About CTA */}
            <div className="mt-8">
              <p className="text-[15px] text-white/45 leading-relaxed mb-4">
                On préfère travailler avec peu de clients — et très bien. Si vous voulez un partenaire qui s&apos;implique vraiment dans votre croissance — on a envie de vous parler.
              </p>
              <a
                href="#cta-final"
                className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] hover:text-[#B8960C] transition-colors duration-200 group"
              >
                Réserver un appel avec l&apos;équipe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
