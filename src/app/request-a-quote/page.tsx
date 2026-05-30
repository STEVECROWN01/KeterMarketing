'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import { Star } from 'lucide-react'

export default function RequestQuotePage() {
  const [injected, setInjected] = useState(false)

  useEffect(() => {
    // We replicate the exact same lazy injection mechanism as Sher Agency!
    // Since LeadConnector / MsgSndr is an external iframe tool, we embed it directly.
    // If the user wants to test it, we'll embed the Keter form or keep it fully clean
    // and responsive with a fallback or directly load the custom identical form.
    // Let's implement the EXACT SAME lazy injection widget markup structure as Sher!
    const injectForm = () => {
      if (injected) return
      setInjected(true)
    }

    const events = ['scroll', 'mousemove', 'touchstart', 'keydown']
    events.forEach((evt) => {
      window.addEventListener(evt, injectForm, { once: true })
    })

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, injectForm)
      })
    }
  }, [injected])

  const items = [
    { text: 'Obtenez plus de trafic de recherche' },
    { text: 'Convertissez vos visiteurs en prospects' },
    { text: 'Rendez votre image de marque exceptionnelle' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0B0B0B]">
          {/* Background Highlight */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.02] rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-16 lg:gap-24 items-start">
              
              {/* LEFT — Title + Checks + Badges (Sher Agency Quote Page style) */}
              <AnimatedSection className="lg:sticky lg:top-28">
                <h1 className="text-[32px] sm:text-[42px] md:text-[50px] font-semibold leading-[1.1] text-white mb-6">
                  Optimisez votre site pour <strong>booster vos ventes</strong>
                </h1>
                <p className="text-white/50 text-base md:text-lg mb-10 max-w-md">
                  Nous transformons les sites web obsolètes ou inefficaces en véritables atouts de croissance qui :
                </p>

                {/* Check list */}
                <div className="space-y-4 mb-12">
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                        <span className="text-[#D4AF37] text-xs font-bold">✓</span>
                      </div>
                      <span className="text-white/80 text-[15px] font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                {/* Badges Clutch / Partner style */}
                <div className="flex items-center gap-6 border-t border-white/10 pt-8 max-w-md">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-white/[0.04] border border-white/10 rounded flex items-center justify-center">
                      <Star className="w-5.5 h-5.5 fill-[#D4AF37] text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold font-mono leading-none">5.0 / 5.0</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">38 Avis Clients</p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded flex items-center justify-center font-bold text-xs text-[#D4AF37] font-mono">
                      TOP
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold leading-none">Top Agence</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">Web Design</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* RIGHT — Formulaire LeadConnector chargé en lazy */}
              <AnimatedSection delay={0.15}>
                {!injected ? (
                  <div className="text-center py-20">
                    <p className="text-white/40 text-sm animate-pulse mb-3">Chargement du formulaire...</p>
                    <p className="text-white/20 text-xs">Bougez votre souris ou faites défiler pour charger immédiatement</p>
                  </div>
                ) : (
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/KAY778x3PVdeb4J8MnJq"
                    style={{ width: '100%', height: '820px', border: 'none', overflow: 'hidden' }}
                    id="inline-KAY778x3PVdeb4J8MnJq"
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-activation-type="alwaysActivated"
                    data-form-name="Nouvelle Demande Client"
                    title="Nouvelle Demande Client"
                  />
                )}
              </AnimatedSection>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
