'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="cta-final" className="bg-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-semibold leading-[1.15] text-[#0B0B0B] mb-6">
              Votre prochain client cherche peut-être une agence comme Keter{' '}
              <span className="text-white">en ce moment.</span>
            </h2>
            <p className="text-base md:text-lg text-[#0B0B0B]/60 leading-relaxed mb-10 max-w-2xl mx-auto">
              Vous avez lu jusqu&apos;ici. Ça veut dire que votre site n&apos;est pas encore là où il devrait être. La prochaine étape : 30 minutes d&apos;appel, gratuit, sans engagement. On analyse votre situation et on vous dit honnêtement ce qu&apos;on ferait différemment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Link href="/request-a-quote">
                <Button className="bg-[#0B0B0B] hover:bg-[#1A1A1A] text-white rounded-md px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 h-auto min-w-[260px]">
                  Réserver mon appel gratuit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/our-work">
                <Button
                  variant="outline"
                  className="border-[#0B0B0B]/20 text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white rounded-md px-8 py-4 text-[14px] font-medium uppercase tracking-[0.06em] transition-all duration-300 h-auto min-w-[260px] bg-transparent"
                >
                  Voir nos réalisations
                </Button>
              </Link>
            </div>

            {/* Micro-copy */}
            <p className="text-[13px] text-[#0B0B0B]/40">
              30 minutes · Gratuit · Sans engagement · Réponse honnête garantie
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
