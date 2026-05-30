'use client'

import AnimatedSection from './AnimatedSection'
import { Users, Palette, PenTool, Code, Rocket } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Planification UX',
    subtitle: 'Appel découverte & Wireframe',
    description:
      "Le premier et le plus important élément à traiter est le chemin que le visiteur parcourt sur votre site. Quelles questions a-t-il en atterrissant ? Quelles objections faut-il lever ? Comment construire la confiance ? On aborde tout ça dès le premier jour — en 1h30 d'appel découverte, on présente la structure du site et on échange.",
    icon: Users,
    details: [
      'Analyse de votre cible et ses objections',
      'Définition du parcours visiteur → client',
      'Wireframe de la structure du site',
      'Session collaborative de 1h30',
    ],
  },
  {
    number: '02',
    title: 'Design Visuel',
    subtitle: 'Direction artistique & identité',
    description:
      "En fonction du public que vous ciblez, il existe plusieurs esthétiques qui peuvent le mieux susciter sa confiance. Dans cette deuxième phase, on explore les options et on poursuit celle que votre équipe et la nôtre jugent la plus adaptée — dans le respect de vos guidelines existantes, ou en les réinventant.",
    icon: Palette,
    details: [
      'Exploration de 2-3 directions créatives',
      'Respect ou réinvention de votre branding',
      'Validation collaborative du direction finale',
      'Design pixel-perfect de chaque page',
    ],
  },
  {
    number: '03',
    title: 'Copywriting',
    subtitle: 'Rédaction stratégique de conversion',
    description:
      "La clé du copywriting web est de garder votre contenu concis et informatif. On rédige chaque mot du site — pas de lorem ipsum, pas de texte générique. Chaque phrase a un objectif : convaincre, rassurer, et faire agir. Si pertinent, on optimise le contenu pour les moteurs de recherche.",
    icon: PenTool,
    details: [
      'Copywriting 100% intégré — pas de lorem ipsum',
      'Optimisation SEO des textes',
      'Messages de conversion sur chaque section',
      'Validation avant design',
    ],
  },
  {
    number: '04',
    title: 'Développement & Test',
    subtitle: 'Code propre, responsive, rapide',
    description:
      "On transforme les designs validés en code fonctionnel. Votre site est développé pour être rapide, sécurisé et parfaitement responsive — ordinateurs, tablettes, téléphones. Chaque page est testée sur tous les écrans avant livraison. Rien ne sort sans avoir passé nos tests qualité.",
    icon: Code,
    details: [
      'Développement responsive (mobile-first)',
      'Tests sur tous les écrans et navigateurs',
      'Performance et vitesse optimisées',
      'Intégration Google Analytics & Search Console',
    ],
  },
  {
    number: '05',
    title: 'Mise en ligne & Suivi',
    subtitle: 'Déploiement, formation et support',
    description:
      "Maintenant que votre site est au top, on le met en ligne. Mais on ne disparait pas après — on vous forme (30 minutes), on configure vos outils de suivi, et on vous accompagne pendant 30 jours. Votre site travaille pour vous 24h/24 — on s'assure qu'il le fait bien.",
    icon: Rocket,
    details: [
      'Déploiement et mise en ligne sécurisée',
      'Formation de 30 minutes incluse',
      '30 jours de support post-livraison',
      'Configuration Analytics & Search Console',
    ],
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* Header */}
        <AnimatedSection>
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
            Notre Process
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-3">
            Comment notre process fonctionne.
          </h2>
          <p className="text-[15px] md:text-base text-white/40 max-w-xl mb-14 md:mb-16">
            Un processus éprouvé, étape par étape. Chaque phase a un livrable clair — vous n&apos;êtes jamais dans le flou.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative border-b border-white/10 last:border-b-0 group">
                  {/* Main row */}
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-8 md:py-10">
                    {/* Left: Number + Icon + Title */}
                    <div className="lg:w-[40%] flex items-start gap-5">
                      {/* Number */}
                      <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 flex items-center justify-center transition-colors duration-300">
                        <span className="text-xl md:text-2xl font-bold text-[#D4AF37]">{step.number}</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          <Icon className="w-5 h-5 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors duration-300" />
                          <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-[13px] text-[#D4AF37]/50 font-medium uppercase tracking-[0.08em]">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Right: Description + Details */}
                    <div className="lg:w-[60%]">
                      <p className="text-[15px] md:text-base text-white/45 leading-relaxed mb-5">
                        {step.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.details.map((detail, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-2.5 text-[13px] text-white/35"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mt-1.5 shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connecting line between steps */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[27px] md:left-[31px] -bottom-px w-px h-6 bg-gradient-to-b from-[#D4AF37]/20 to-transparent" />
                  )}
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Process CTA */}
        <AnimatedSection delay={0.4}>
          <div className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#cta-final"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 group"
            >
              Démarrer mon projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/20 text-white/70 hover:bg-white hover:text-[#0B0B0B] text-[14px] font-medium uppercase tracking-[0.06em] bg-transparent transition-all duration-300"
            >
              Voir nos réalisations
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
