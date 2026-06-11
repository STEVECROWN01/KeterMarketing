'use client'

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from './AnimatedSection'
import { ArrowRight, ExternalLink, Plus, Minus } from 'lucide-react'
import { useState } from 'react'

/* ── Mini Portfolio ── */
import { portfolioList } from '@/lib/data'

const projects = portfolioList

/* ── Services ── */
const services = [
  {
    title: 'Création de site web',
    description: 'Un site vitrine ou une landing page qui convertit vos visiteurs en clients et attire plus de trafic qualifié depuis Google.',
    href: '/webdesign',
  },
  {
    title: 'Maintenance web',
    description: 'Hébergement, sécurité, mises à jour, surveillance d\'uptime, corrections de bugs, gestion de contenu, et bien plus encore.',
    href: '/website-management',
  },
  {
    title: 'Marketing sur les moteurs de recherche',
    description: 'Générez du trafic vers votre site via le référencement organique (SEO) et les annonces payantes (Google Ads / PPC).',
    href: '/search-engine-marketing',
  },
]

/* ── FAQ ── */
const faqs = [
  {
    q: 'Avec quels types d\'entreprises travaillez-vous ?',
    a: 'Nous travaillons avec tous les types d\'entreprises — TPE, PME, startups, ONG, e-commerce. Nous avons de l\'expérience dans la plupart des secteurs et niches d\'activité.',
  },
  {
    q: 'Quels services proposez-vous ?',
    a: 'Nous créons, gérons et faisons croître les sites web. Cela inclut : Conception web, Développement web, Design graphique, Copywriting, Maintenance web, SEO, et Google Ads (PPC).',
  },
  {
    q: 'Quels outils utilisez-vous pour créer vos sites ?',
    a: 'Nous développons principalement sur WordPress, Webflow et sur des frameworks modernes comme Next.js. Nous recommandons ces outils pour leur excellent support et leurs fonctionnalités.',
  },
  {
    q: 'Comment protégez-vous un site qui reçoit beaucoup de trafic lors des modifications ?',
    a: 'Nous construisons votre site dans un environnement de staging (développement), afin que votre site actuel reste intact jusqu\'à ce que nous soyons prêts à passer en production.',
  },
  {
    q: 'Combien de temps faut-il pour créer un nouveau site ?',
    a: 'La durée varie selon la taille et la complexité du projet. Certains projets simples sont livrés en quelques semaines ; d\'autres plus complexes peuvent prendre plusieurs mois.',
  },
  {
    q: 'Où est basée Keter Marketing ?',
    a: 'Nous sommes basés à Cotonou, Bénin, et nous travaillons à 100% en remote. Notre équipe sert des clients en Afrique de l\'Ouest, en France, et partout dans le monde.',
  },
]

/* ── FAQ Item ── */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  const panelId = `sp-faq-panel-${index}`
  const buttonId = `sp-faq-button-${index}`
  return (
    <div className="border-b border-white/[0.08] py-5">
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left group"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="text-white font-medium text-[15px] leading-snug group-hover:text-[#D4AF37] transition-colors">
          {q}
        </span>
        <span className="shrink-0 mt-0.5" aria-hidden="true">
          {open
            ? <Minus className="w-4 h-4 text-[#D4AF37]" />
            : <Plus className="w-4 h-4 text-white/40 group-hover:text-[#D4AF37] transition-colors" />
          }
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="mt-3 text-white/50 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

/* ── Main Export ── */
export default function ServicePageBottom() {
  return (
    <>
      {/* ── Mini Portfolio ── */}
      <section className="py-16 md:py-20 border-t border-white/5 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B0B0B]">Nos Réalisations</h2>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 text-[#0B0B0B] text-sm font-semibold hover:text-[#D4AF37] transition-colors group whitespace-nowrap"
            >
              Toutes les études de cas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <AnimatedSection key={p.slug}>
                <div className="group rounded-xl overflow-hidden border border-[#0B0B0B]/[0.08] bg-[#0B0B0B] hover:border-[#D4AF37]/30 transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-[#0B0B0B]/0 group-hover:bg-[#0B0B0B]/40 transition-colors duration-300" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#D4AF37] text-[#0B0B0B] rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-3 bg-white flex items-center justify-between gap-2">
                    <h3 className="text-[#0B0B0B] font-semibold text-sm leading-tight">{p.title}</h3>
                    <Link
                      href={`/our-work/${p.slug}`}
                      className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#0B0B0B]/15 text-[#0B0B0B] text-[10px] font-semibold uppercase tracking-wider hover:bg-[#0B0B0B] hover:text-white transition-all duration-300 whitespace-nowrap"
                    >
                      Étude <ExternalLink className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ce que nous faisons ── */}
      <section className="py-16 md:py-20 border-t border-white/5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ce que nous faisons</h2>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[13px] uppercase tracking-[0.06em] transition-all duration-300 group whitespace-nowrap"
            >
              Lancer mon projet
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
          <div className="divide-y divide-white/[0.08]">
            {services.map((s) => (
              <AnimatedSection key={s.href}>
                <Link
                  href={s.href}
                  className="group flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-6 hover:opacity-80 transition-opacity"
                >
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed max-w-xl">{s.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 border-t border-white/5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Questions fréquentes</h2>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold hover:underline whitespace-nowrap"
            >
              Nous contacter →
            </Link>
          </AnimatedSection>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-28 border-t border-white/5 bg-[#0B0B0B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Transformez votre présence en ligne.
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto">
              Discutons de votre projet. Keter Marketing crée des sites web stratégiques qui génèrent de vrais clients.
            </p>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300 group"
            >
              Obtenir un devis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
