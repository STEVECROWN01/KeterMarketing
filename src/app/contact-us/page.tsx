'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import Link from 'next/link'
import { ArrowRight, Mail, Clock, MessageSquare, Phone } from 'lucide-react'

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">

        {/* ── Hero Header ── */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Nous Contacter
              </h1>
              <p className="text-white/50 text-lg max-w-lg mb-8">
                Une question, un projet, ou simplement envie d&apos;échanger ? Nous sommes là.
              </p>
              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300 group"
              >
                Demande de devis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ── 3-column info cards ── */}
        <section className="py-16 md:py-20 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Clients existants */}
              <AnimatedSection className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h2 className="text-white font-semibold text-lg">Clients Existants</h2>
                </div>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Notre équipe est disponible du lundi au vendredi, de 8h00 à 18h00 (WAT) pour toute assistance.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:support@ketermarketing.com"
                    className="flex items-center gap-2 text-[#D4AF37] text-sm hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    support@ketermarketing.com
                  </a>
                  <a
                    href="https://wa.me/2290141360803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/40 text-sm hover:text-[#25D366] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +229 01 41 36 08 03
                  </a>
                </div>
              </AnimatedSection>

              {/* Clients potentiels */}
              <AnimatedSection className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h2 className="text-white font-semibold text-lg">Clients Potentiels</h2>
                </div>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  La première étape est de parler à notre équipe. Vous pouvez planifier un appel ou remplir notre formulaire de devis ici.
                </p>
                <Link
                  href="/request-a-quote"
                  className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:underline group"
                >
                  Planifier un appel
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>

              {/* Candidatures */}
              <AnimatedSection className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <h2 className="text-white font-semibold text-lg">Candidatures</h2>
                </div>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">
                  Vous souhaitez rejoindre notre équipe ? Consultez nos postes ouverts et postulez directement sur la page Carrières.
                </p>
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:underline group"
                >
                  Voir les postes ouverts
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Leave us a message — LeadConnector form ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Laissez-nous un message
              </h2>
              <p className="text-white/50 max-w-lg mx-auto">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24h.
              </p>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto">
              <div className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/j9xiCG9t4Z9AzEAI6Mqf"
                  style={{ width: '100%', height: '600px', border: 'none', borderRadius: '0' }}
                  scrolling="no"
                  id="contact-form-iframe"
                  title="Formulaire de contact Keter Marketing"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
