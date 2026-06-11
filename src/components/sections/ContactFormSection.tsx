'use client'

import { useState, type FormEvent, type ChangeEvent } from 'react'
import AnimatedSection from './AnimatedSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight, CheckCircle2, Loader2, MapPin, Mail, Phone } from 'lucide-react'
import { WHATSAPP_BOOKING_URL, WHATSAPP_CONTACT_URL, PHONE_NUMBER, EMAIL_CONTACT } from '@/lib/constants'

interface FormData {
  fullName: string
  phone: string
  email: string
  company: string
  referral: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    referral: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [referralError, setReferralError] = useState('')
  const [serverError, setServerError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Custom validation for the Select field (Radix Select doesn't support native required)
    if (!formData.referral) {
      setReferralError('Veuillez sélectionner comment vous nous avez connus.')
      return
    }
    setReferralError('')

    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.error || 'Une erreur est survenue. Veuillez réessayer.')
        setStatus('error')
        return
      }

      setServerError('')
      setStatus('success')
      setFormData({ fullName: '', phone: '', email: '', company: '', referral: '', message: '' })
    } catch {
      setServerError('Erreur réseau. Vérifiez votre connexion et réessayez.')
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#1c1c1c] to-[#0B0B0B] overflow-hidden"
    >
      {/* Decorative radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37]/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ─── Left Column — Heading + Info ─── */}
          <AnimatedSection>
            <div className="flex flex-col justify-center h-full">
              <span className="inline-block text-[#D4AF37] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                Contactez-nous
              </span>
              <h2 className="text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] text-white mb-6">
                Parlons de votre{' '}
                <span className="text-[#D4AF37]">projet</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Vous avez un projet en tête ? Remplissez le formulaire et nous vous répondrons sous 24 heures. Pas de spam, pas de blabla — juste une réponse honnête.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-10">
                <a
                  href={WHATSAPP_CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">WhatsApp</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
                      {EMAIL_CONTACT}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">Localisation</p>
                    <p className="text-white text-sm font-medium">Bénin, Afrique de l&apos;Ouest</p>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-3 transition-all text-sm"
              >
                Préférez-vous un appel ? Réservez 30 min gratuit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>

          {/* ─── Right Column — Form ─── */}
          <AnimatedSection delay={0.15}>
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 sm:p-8 md:p-10">
              <h3 className="text-white text-xl font-semibold mb-8">
                Laissez-nous un message
              </h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h4 className="text-white text-xl font-semibold mb-2">Message envoyé !</h4>
                  <p className="text-white/50 text-sm max-w-sm">
                    Merci pour votre message. Nous vous répondrons sous 24 heures.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-[#D4AF37] text-sm font-medium hover:underline"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Full Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-white/80 text-sm font-medium">
                        Nom complet <span className="text-[#D4AF37]">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        required
                        maxLength={100}
                        value={formData.fullName}
                        onChange={handleChange}
                        className="bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20 h-12 rounded-lg text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/80 text-sm font-medium">
                        Téléphone <span className="text-[#D4AF37]">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={PHONE_NUMBER}
                        required
                        maxLength={30}
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20 h-12 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/80 text-sm font-medium">
                        Email professionnel <span className="text-[#D4AF37]">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@entreprise.com"
                        required
                        maxLength={200}
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20 h-12 rounded-lg text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white/80 text-sm font-medium">
                        Entreprise <span className="text-[#D4AF37]">*</span>
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Nom de l'entreprise"
                        required
                        maxLength={100}
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20 h-12 rounded-lg text-sm"
                      />
                    </div>
                  </div>

                  {/* Row 3: How did you hear about us? (full-width select) */}
                  <div className="space-y-2">
                    <Label className="text-white/80 text-sm font-medium">
                      Comment nous avez-vous connus ? <span className="text-[#D4AF37]">*</span>
                    </Label>
                    <Select
                      value={formData.referral}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, referral: value }))
                      }
                      required
                    >
                      <SelectTrigger className="bg-white/[0.06] border-white/[0.12] text-white data-[placeholder]:text-white/30 focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20 h-12 rounded-lg text-sm w-full">
                        <SelectValue placeholder="Sélectionnez une option..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1c1c1c] border-white/[0.12] text-white">
                        <SelectItem value="tiktok" className="text-white/80 focus:text-white focus:bg-white/[0.08]">
                          TikTok
                        </SelectItem>
                        <SelectItem value="instagram" className="text-white/80 focus:text-white focus:bg-white/[0.08]">
                          Instagram
                        </SelectItem>
                        <SelectItem value="linkedin" className="text-white/80 focus:text-white focus:bg-white/[0.08]">
                          LinkedIn
                        </SelectItem>
                        <SelectItem value="youtube" className="text-white/80 focus:text-white focus:bg-white/[0.08]">
                          YouTube
                        </SelectItem>
                        <SelectItem value="google" className="text-white/80 focus:text-white focus:bg-white/[0.08]">
                          Google
                        </SelectItem>
                        <SelectItem value="recommandation" className="text-white/80 focus:text-white focus:bg-white/[0.08]">
                          Recommandation
                        </SelectItem>
                        <SelectItem value="autre" className="text-white/80 focus:text-white focus:bg-white/[0.08]">
                          Autre
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {referralError && (
                      <p className="text-red-400 text-xs mt-1">{referralError}</p>
                    )}
                  </div>

                  {/* Row 4: Message (full-width textarea) */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/80 text-sm font-medium">
                      Comment pouvons-nous vous aider ? <span className="text-[#D4AF37]">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez votre projet ou votre demande..."
                      required
                      maxLength={5000}
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/[0.06] border-white/[0.12] text-white placeholder:text-white/30 focus-visible:border-[#D4AF37]/60 focus-visible:ring-[#D4AF37]/20 rounded-lg text-sm min-h-[120px] resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && serverError && (
                    <p className="text-red-400 text-sm">
                      {serverError}
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#D4AF37] hover:bg-[#C4A030] text-[#0B0B0B] rounded-full h-14 text-[15px] font-semibold tracking-wide transition-all duration-300 mt-2 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Nous contacter
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-white/30 text-xs text-center mt-3">
                    Réponse sous 24h · Vos données restent confidentielles
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
