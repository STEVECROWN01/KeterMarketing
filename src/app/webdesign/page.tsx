import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import ProcessSection from '@/components/sections/ProcessSection'
import AnimatedSection from '@/components/sections/AnimatedSection'
import ServicePageBottom from '@/components/sections/ServicePageBottom'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function WebDesignPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Notre Méthode
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Notre Processus de <br />
                <span className="text-[#D4AF37]">Design & Développement</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Découvrez comment nous créons des sites internet haut de gamme conçus pour capter l&apos;attention de votre cible et générer des ventes.
              </p>
              <div>
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300 group"
                >
                  Lancer mon projet
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process Steps Section */}
        <ProcessSection />
        <ServicePageBottom />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
