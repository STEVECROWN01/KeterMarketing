'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import PortfolioSection from '@/components/sections/PortfolioSection'
import AnimatedSection from '@/components/sections/AnimatedSection'

export default function OurWorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <span className="inline-block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.15em] mb-4">
                Portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Our Work & <br />
                <span className="text-[#D4AF37]">Case Studies</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Découvrez une sélection de sites vitrines, e-commerce et applications SaaS conçus par l&apos;équipe de Keter Marketing pour maximiser l&apos;acquisition clients.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
