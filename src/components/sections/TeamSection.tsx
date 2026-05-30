'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const team = [
  {
    initials: 'DA',
    name: 'Dawes S. Akpovi Tohou',
    role: 'Stratégie & Copywriting',
    description:
      'Obsédé par une question : pourquoi certains sites convertissent et d\'autres non ? Garant du message — chaque mot a un rôle.',
    bg: 'bg-[#D4AF37]/10',
    color: 'text-[#D4AF37]',
  },
  {
    initials: 'ST',
    name: 'Stevens',
    role: 'Design & Développement',
    description:
      'Le design n\'est pas une question d\'esthétique — c\'est une question d\'efficacité. Garant de l\'expérience — chaque pixel a une fonction.',
    bg: 'bg-white/5',
    color: 'text-white',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 md:mb-16">
            <div>
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-3">
                L&apos;Équipe
              </span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white">
                Notre Équipe
              </h2>
            </div>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] hover:text-[#B8960C] transition-colors duration-200 group shrink-0"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Team Grid */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
            {team.map((member, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] p-8 hover:border-[#D4AF37]/30 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className={`w-16 h-16 rounded-full ${member.bg} border border-white/10 flex items-center justify-center mb-5`}>
                  <span className={`${member.color} text-lg font-bold`}>{member.initials}</span>
                </div>

                {/* Info */}
                <p className={`text-[11px] font-semibold uppercase tracking-[0.15em] ${member.color} mb-1`}>
                  {member.role}
                </p>
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-white/40 text-[14px] leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
