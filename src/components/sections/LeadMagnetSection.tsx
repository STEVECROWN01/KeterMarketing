'use client'

import { useState, type FormEvent } from 'react'
import AnimatedSection from './AnimatedSection'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_CONTACT_URL } from '@/lib/constants'

export default function LeadMagnetSection() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return

    // Validate email format before redirecting to WhatsApp
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setEmailError('Veuillez entrer une adresse email valide.')
      return
    }
    setEmailError('')

    // Redirect to WhatsApp with pre-filled message
    const msg = encodeURIComponent(
      `Bonjour, je m'appelle ${formData.name} (${formData.email}). Je souhaite recevoir la checklist gratuite d'audit de site web.`
    )
    window.open(`${WHATSAPP_CONTACT_URL}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const checklist = [
    'Structure et parcours visiteur',
    'Copywriting et messages de conversion',
    'Performance et vitesse de chargement',
    'Référencement naturel (SEO)',
    'Appels à l\'action et formulaires',
    'Design et crédibilité visuelle',
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — Form */}
          <AnimatedSection>
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4">
              Gratuit
            </span>
            <h2 className="text-[30px] sm:text-[36px] md:text-[44px] font-semibold leading-[1.1] text-[#0B0B0B] mb-4">
              Utilisez cette checklist gratuite pour{' '}
              <strong>auditer votre site web</strong>
            </h2>
            <p className="text-[#0B0B0B]/50 text-base leading-relaxed mb-8 max-w-md">
              En 10 minutes, identifiez les points précis qui font fuir vos visiteurs. Reçue directement sur WhatsApp.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <div>
                  <label className="block text-[#0B0B0B]/70 text-sm font-medium mb-1.5">
                    Nom complet <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="w-full h-12 px-4 rounded-lg border border-[#0B0B0B]/15 bg-white text-[#0B0B0B] placeholder:text-[#0B0B0B]/30 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[#0B0B0B]/70 text-sm font-medium mb-1.5">
                    Email professionnel <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@entreprise.com"
                    value={formData.email}
                    onChange={(e) => { setFormData((p) => ({ ...p, email: e.target.value })); setEmailError('') }}
                    className="w-full h-12 px-4 rounded-lg border border-[#0B0B0B]/15 bg-white text-[#0B0B0B] placeholder:text-[#0B0B0B]/30 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 w-full justify-center px-6 py-4 rounded-full bg-[#0B0B0B] hover:bg-[#D4AF37] text-white hover:text-[#0B0B0B] font-semibold text-[13px] uppercase tracking-[0.08em] transition-all duration-300 group"
                >
                  Recevoir la checklist gratuite
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[#0B0B0B]/30 text-xs text-center">
                  Aucun spam · Réponse immédiate via WhatsApp
                </p>
              </form>
            ) : (
              <div className="max-w-md p-6 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-center">
                <p className="text-[#0B0B0B] font-semibold text-lg mb-1">✅ Merci !</p>
                <p className="text-[#0B0B0B]/60 text-sm">Vous allez être redirigé vers WhatsApp pour recevoir la checklist.</p>
              </div>
            )}
          </AnimatedSection>

          {/* RIGHT — Checklist preview */}
          <AnimatedSection delay={0.15}>
            <div className="bg-[#0B0B0B] rounded-2xl p-8 border border-white/10">
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.15em] mb-5">
                Ce que contient la checklist
              </p>
              <ul className="space-y-3.5">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70 text-[15px]">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                      <span className="text-[#D4AF37] text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/30 text-xs">
                  Conçu par Keter Marketing · Basé sur l&apos;analyse de 20+ sites
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
