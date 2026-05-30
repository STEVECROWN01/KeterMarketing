'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import ServicePageBottom from '@/components/sections/ServicePageBottom'
import Link from 'next/link'
import { ArrowRight, Search, BarChart3, Target, Award, TrendingUp } from 'lucide-react'

export default function SearchEngineMarketingPage() {
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
                SEO & Google Ads
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Marketing sur <br />
                <span className="text-[#D4AF37]">les Moteurs de Recherche</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                Positionnez votre marque devant vos futurs clients lorsqu&apos;ils recherchent activement vos services sur Google. SEO d&apos;acquisition et publicité ROI-focused.
              </p>
              <div>
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300 group"
                >
                  Acquérir du trafic
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SEO & PPC breakdown */}
        <section className="py-24 bg-[#0B0B0B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* SEO Block */}
              <AnimatedSection className="p-8 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Référencement Naturel (SEO)</h2>
                <p className="text-white/50 text-[15px] leading-relaxed mb-6">
                  Construisez une visibilité durable sur le long terme. Nous optimisons le code, les performances techniques et le contenu de votre site internet pour vous positionner dans les premiers résultats organiques de recherche Google.
                </p>
                <ul className="space-y-3">
                  {['Recherche de mots-clés transactionnels', 'Optimisation On-Page (balises, structure)', 'Audit technique et vitesse de chargement', 'Stratégie de contenu orientée conversion'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* PPC Block */}
              <AnimatedSection delay={0.1} className="p-8 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Campagnes Google Ads (PPC)</h2>
                <p className="text-white/50 text-[15px] leading-relaxed mb-6">
                  Générez des prospects qualifiés immédiatement. Nous concevons, rédigeons et pilotons vos campagnes de liens sponsorisés sur le réseau de recherche Google pour maximiser votre retour sur investissement (ROI).
                </p>
                <ul className="space-y-3">
                  {['Création et configuration de campagnes Ads', 'Rédaction d\'annonces à fort taux de clic', 'Ciblage géographique et démographique précis', 'Suivi quotidien et optimisation des enchères'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2.5 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

            </div>
          </div>
        </section>

        {/* ── Résultats clients ── */}
        <section className="py-16 md:py-20 border-t border-white/5 bg-[#0B0B0B]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Comment nous avons aidé Win Agro Tech</h2>
              <p className="text-white/40 text-sm">Une refonte web + stratégie SEO locale en moins de 4 semaines.</p>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '3 semaines', label: 'Pour refondre le site' },
                { value: '+180%', label: 'De trafic organique' },
                { value: 'Top 3', label: 'Sur Google pour 5 mots-clés cibles' },
                { value: '5 étoiles', label: 'Avis clients vérifiés' },
              ].map((stat, i) => (
                <AnimatedSection key={i}>
                  <div className="p-5 rounded-xl border border-white/8 bg-white/[0.02] text-center hover:border-[#D4AF37]/20 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-1">{stat.value}</p>
                    <p className="text-white/40 text-xs leading-snug">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection className="mt-6 flex gap-4">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#D4AF37] transition-colors group"
              >
                Plus d&apos;études de cas
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/our-work/win-agro-tech"
                className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:underline group"
              >
                Étude de cas complète
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <ServicePageBottom />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
