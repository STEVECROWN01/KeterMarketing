'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import { Star, CheckCircle, ArrowRight, Loader2 } from 'lucide-react'

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    referral: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Erreur réseau')

      setStatus('success')
      setFormData({ fullName: '', phone: '', email: '', company: '', referral: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

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

              {/* RIGHT — Form (LeadConnector style customized for Keter) */}
              <AnimatedSection delay={0.15}>
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-10">
                  <h2 className="text-white text-xl sm:text-2xl font-medium mb-8">
                    Démarrez votre projet
                  </h2>

                  {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-5 animate-pulse">
                        <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
                      </div>
                      <h3 className="text-white text-xl font-semibold mb-2">Demande envoyée !</h3>
                      <p className="text-white/50 text-sm max-w-sm">
                        Merci pour votre message. Nous vous répondrons sous 24 heures pour planifier votre session stratégique de 30 minutes.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-6 text-[#D4AF37] text-sm font-medium hover:underline"
                      >
                        Envoyer une autre demande
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-white/80 text-sm font-medium">
                          Nom complet <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          placeholder="Votre nom et prénom"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37] transition-all text-sm"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-white/80 text-sm font-medium">
                          Numéro de téléphone <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+229 01 41 36 08 03"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37] transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-white/80 text-sm font-medium">
                          Email professionnel <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="email@entreprise.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37] transition-all text-sm"
                        />
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-white/80 text-sm font-medium">
                          Nom de votre entreprise <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          placeholder="Votre entreprise"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37] transition-all text-sm"
                        />
                      </div>

                      {/* Referral */}
                      <div className="space-y-2">
                        <label htmlFor="referral" className="block text-white/80 text-sm font-medium">
                          Comment nous avez-vous connus ? <span className="text-[#D4AF37]">*</span>
                        </label>
                        <select
                          id="referral"
                          name="referral"
                          required
                          value={formData.referral}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-lg border border-white/10 bg-[#161616] text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37] transition-all text-sm cursor-pointer"
                        >
                          <option value="" disabled className="text-white/30">Sélectionnez une option...</option>
                          <option value="tiktok" className="bg-[#111] text-white/80">TikTok</option>
                          <option value="linkedin" className="bg-[#111] text-white/80">LinkedIn</option>
                          <option value="instagram" className="bg-[#111] text-white/80">Instagram</option>
                          <option value="youtube" className="bg-[#111] text-white/80">YouTube</option>
                          <option value="google" className="bg-[#111] text-white/80">Google</option>
                          <option value="recommandation" className="bg-[#111] text-white/80">Recommandation</option>
                          <option value="autre" className="bg-[#111] text-white/80">Autre</option>
                        </select>
                      </div>

                      {/* Help message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-white/80 text-sm font-medium">
                          Comment pouvons-nous vous aider ? <span className="text-[#D4AF37]">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Décrivez brièvement votre projet, vos objectifs et votre budget..."
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04] text-white placeholder:text-white/35 focus:outline-none focus:border-[#D4AF37] transition-all text-sm min-h-[120px] resize-none"
                        />
                      </div>

                      {/* Error Message */}
                      {status === 'error' && (
                        <p className="text-red-400 text-sm font-medium">
                          Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer ou nous contacter via WhatsApp.
                        </p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex items-center gap-2.5 w-full justify-center px-6 py-4 rounded-full bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.08em] transition-all duration-300 group cursor-pointer"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer ma demande
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-white/30 text-xs text-center">
                        Aucun spam · Vos informations restent strictement confidentielles.
                      </p>
                    </form>
                  )}
                </div>
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
