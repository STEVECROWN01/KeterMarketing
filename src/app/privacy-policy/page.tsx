'use client'

import { useSyncExternalStore } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import { PHONE_NUMBER, EMAIL_CONTACT, SITE_URL } from '@/lib/constants'

const sections = [
  {
    title: '1. Collecte des Données',
    content: `Nous collectons des informations lorsque vous utilisez notre site web, remplissez un formulaire de contact, ou demandez un devis. Ces informations peuvent inclure : votre nom, adresse e-mail, numéro de téléphone, le nom de votre entreprise, et toute autre information que vous choisissez de nous communiquer. Nous collectons également automatiquement certaines données techniques comme votre adresse IP, le type de navigateur utilisé, et les pages visitées via des cookies et outils d'analyse.`,
  },
  {
    title: '2. Utilisation des Données',
    content: `Les données collectées sont utilisées pour : répondre à vos demandes de contact et de devis, vous fournir nos services de création web et de marketing digital, vous envoyer des informations pertinentes sur nos offres (avec votre consentement), améliorer notre site web et nos services, respecter nos obligations légales et contractuelles.`,
  },
  {
    title: '3. Cookies',
    content: `Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies essentiels sont nécessaires au bon fonctionnement du site. Les cookies analytiques (Google Analytics) nous aident à comprendre comment les visiteurs interagissent avec notre site. Vous pouvez configurer votre navigateur pour refuser les cookies, cependant certaines fonctionnalités du site pourraient ne plus être disponibles.`,
  },
  {
    title: '4. Partage des Données',
    content: `Keter Marketing ne vend, ne loue, ni ne partage vos données personnelles avec des tiers à des fins commerciales. Nous pouvons partager vos données avec des prestataires de services tiers qui nous aident à opérer notre site web et à vous fournir nos services (ex : outils d'emailing, CRM), uniquement dans la mesure nécessaire à la réalisation de ces services et dans le respect de la présente politique.`,
  },
  {
    title: '5. Sécurité',
    content: `Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction. Notre site est hébergé sur des serveurs sécurisés avec chiffrement HTTPS. Cependant, aucune méthode de transmission sur Internet n'est 100% sécurisée.`,
  },
  {
    title: '6. Vos Droits',
    content: `Conformément à la réglementation applicable en matière de protection des données, vous disposez des droits suivants : droit d'accès à vos données personnelles, droit de rectification des informations inexactes, droit à l'effacement de vos données, droit d'opposition au traitement de vos données, droit à la portabilité de vos données. Pour exercer ces droits, contactez-nous à l'adresse indiquée ci-dessous.`,
  },
  {
    title: '7. Contact',
    content: `Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter :\n\nKeter Marketing\nCotonou, Bénin, Afrique de l'Ouest\nEmail : ${EMAIL_CONTACT}\nWhatsApp : ${PHONE_NUMBER}`,
  },
]

function useFormattedDate() {
  const subscribe = () => () => {}
  const getSnapshot = () =>
    new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
  const getServerSnapshot = () => ''
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export default function PrivacyPolicyPage() {
  const dateStr = useFormattedDate()

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">

        {/* ── Header ── */}
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.04),transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Politique de Confidentialité
              </h1>
              <p className="text-white/40 text-sm">
                Dernière mise à jour : {dateStr || '…'}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            <AnimatedSection>
              <p className="text-white/55 leading-relaxed mb-10 text-base">
                Chez <strong className="text-white">Keter Marketing</strong>, la protection de vos données personnelles est une priorité. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web <strong className="text-[#D4AF37]">{SITE_URL.replace('https://', '')}</strong>.
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              {sections.map((section, i) => (
                <AnimatedSection key={i}>
                  <div className="border-l-2 border-[#D4AF37]/30 pl-6">
                    <h2 className="text-white font-semibold text-lg mb-3">{section.title}</h2>
                    <p className="text-white/50 leading-relaxed text-sm whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
