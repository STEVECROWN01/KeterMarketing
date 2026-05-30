'use client'

import { Star } from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'

export default function FeaturedReviewSection() {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <AnimatedSection>
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>

          {/* Client name */}
          <p className="text-[#0B0B0B]/50 text-sm font-medium mb-8 uppercase tracking-[0.12em]">
            Directeur Commercial, PME BTP — Parakou
          </p>

          {/* Big Quote */}
          <blockquote className="text-[#0B0B0B] text-[22px] sm:text-[28px] md:text-[34px] font-light leading-[1.35] italic mb-10 max-w-3xl mx-auto">
            &ldquo;Je ne pouvais pas recommander Keter Marketing plus haut. En{' '}
            <strong className="font-bold not-italic">3 semaines</strong>, notre site a commencé à générer des demandes de devis chaque semaine. C&rsquo;est un{' '}
            <strong className="font-bold not-italic">commercial digital</strong>{' '}
            qui travaille 24h/24 pour nous.&rdquo;
          </blockquote>

          {/* CTA */}
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#0B0B0B]/20 text-[#0B0B0B] text-[13px] font-semibold uppercase tracking-[0.08em] hover:bg-[#0B0B0B] hover:text-white transition-all duration-300"
          >
            Voir l&apos;étude de cas
            <span className="text-base leading-none">↗</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
