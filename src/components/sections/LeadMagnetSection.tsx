'use client'

import AnimatedSection from './AnimatedSection'
import { CheckSquare, ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function LeadMagnetSection() {
  return (
    <section className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left — Checklist visual */}
          <AnimatedSection className="w-full lg:w-[45%]">
            <div className="relative p-8 md:p-10 rounded-xl border border-white/10 bg-white/[0.03]">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center">
                    <CheckSquare className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#D4AF37]">
                    Checklist Gratuite
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                  Utilisez cette checklist pour auditer votre site web
                </h3>

                <p className="text-[14px] text-white/40 leading-relaxed mb-6">
                  25 points de contrôle essentiels pour évaluer la performance de votre site — conversion, SEO, design, copywriting.
                </p>

                {/* Checklist items preview */}
                <div className="space-y-2.5">
                  {[
                    'Votre headline répond-elle à "Qu\'est-ce que je gagne ?"',
                    'Le parcours visiteur → client est-il clair en < 5 secondes ?',
                    'Chaque section a-t-elle un CTA visible ?',
                    'Votre site charge-t-il en moins de 3 secondes ?',
                    'Avez-vous des preuves sociales (avis, logos, chiffres) ?',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-[13px] text-white/35">
                      <div className="w-4 h-4 rounded border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                        {i < 3 && <div className="w-2 h-2 rounded-sm bg-[#D4AF37]" />}
                      </div>
                      {item}
                    </div>
                  ))}
                  <p className="text-[12px] text-white/20 pl-7">+ 20 autres points de contrôle...</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — CTA */}
          <AnimatedSection delay={0.15} className="w-full lg:w-[55%]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
              Gratuit
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-5">
              Utilisez ces conseils pour améliorer votre site web.
            </h2>
            <p className="text-[15px] md:text-base text-white/45 leading-relaxed mb-8 max-w-lg">
              On a audité des dizaines de sites et identifié les erreurs les plus fréquentes. Cette checklist résume exactement ce qu&apos;il faut vérifier — et corriger — pour que votre site commence à générer des résultats.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="#cta-final"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 group"
              >
                <Download className="w-4 h-4" />
                Obtenir la checklist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#cta-final"
                className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-white/50 hover:text-[#D4AF37] transition-colors duration-200 group"
              >
                Ou réserver un appel gratuit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
