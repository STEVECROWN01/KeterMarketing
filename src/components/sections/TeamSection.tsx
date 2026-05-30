'use client'

import AnimatedSection from './AnimatedSection'
import { Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Dawes S. Akpovi Tohou',
    role: 'Stratégie & Copywriting',
    initials: 'DA',
    description: 'Obsédé par une question : pourquoi certains sites convertissent et d\'autres non ? Garant du message — chaque mot a un rôle.',
    linkedin: '#',
  },
  {
    name: 'Stevens',
    role: 'Design & Développement',
    initials: 'ST',
    description: 'Le design n\'est pas une question d\'esthétique — c\'est une question d\'efficacité. Garant de l\'expérience — chaque pixel a une fonction.',
    linkedin: '#',
  },
]

export default function TeamSection() {
  return (
    <section className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <AnimatedSection>
          <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
            L&apos;Équipe
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-3">
            Deux fondateurs. Une obsession.
          </h2>
          <p className="text-[15px] md:text-base text-white/40 max-w-xl mb-14 md:mb-16">
            On préfère travailler avec peu de clients — et très bien. Chaque projet reçoit toute notre attention.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative p-8 md:p-10 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#D4AF37]/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                {/* Avatar */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/15 group-hover:bg-[#D4AF37]/25 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <span className="text-[#D4AF37] text-lg font-bold">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-200">
                      {member.name}
                    </h3>
                    <p className="text-[13px] text-[#D4AF37] font-medium">{member.role}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[15px] text-white/45 leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[13px] text-white/30 hover:text-[#0A66C2] transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
