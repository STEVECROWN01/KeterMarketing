'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import ServicePageBottom from '@/components/sections/ServicePageBottom'
import Link from 'next/link'
import { ArrowRight, Shield, RefreshCw, Cpu, HelpCircle, Check } from 'lucide-react'

const features = [
  {
    title: 'Hébergement Ultra-Rapide',
    description: 'Votre site est hébergé sur des serveurs sécurisés et optimisés (vitesse de chargement minimale pour un meilleur taux de conversion).',
    icon: Cpu,
  },
  {
    title: 'Mises à jour & Maintenance',
    description: 'Mises à jour régulières des modules, du framework et correction des bugs sous 24h pour assurer une fluidité constante.',
    icon: RefreshCw,
  },
  {
    title: 'Sécurité & Sauvegardes',
    description: 'Sauvegardes quotidiennes et protection renforcée contre les attaques malveillantes (certificat SSL inclus).',
    icon: Shield,
  },
  {
    title: 'Support Dédié',
    description: 'Une assistance réactive via WhatsApp et Email pour effectuer des modifications de contenu ou ajouter de nouvelles sections rapidement.',
    icon: HelpCircle,
  },
]

export default function WebsiteManagementPage() {
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
                Gestion & Maintenance
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Gestion &amp; <br />
                <span className="text-[#D4AF37]">Maintenance Web</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Laissez-nous gérer la technique. Concentrez-vous sur vos ventes. Hébergement de haute qualité, mises à jour, sécurité et support illimité.
              </p>
              <div>
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300 group"
                >
                  Confier mon site
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-[#0B0B0B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <AnimatedSection key={i} delay={i * 0.1} className="flex gap-6 p-6 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/50 text-[15px] leading-relaxed">{feature.description}</p>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>
        <ServicePageBottom />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
