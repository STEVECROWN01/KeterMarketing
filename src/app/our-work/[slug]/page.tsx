'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import { ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react'

/* ── Project Data ── */
const projects: Record<string, {
  title: string
  category: string
  tags: string[]
  url: string
  image: string
  description: string
  process: string[]
  result: string
}> = {
  'win-agro-tech': {
    title: 'Win Agro Tech',
    category: 'Site Vitrine',
    tags: ['UI Design', 'UX Design', 'WordPress'],
    url: 'https://www.winagrotech.com/',
    image: '/portfolio-winagrotech.png',
    description: 'Win Agro Tech est une entreprise béninoise spécialisée dans la formation agricole, l\'élevage et la vente de volailles. L\'objectif était de créer une présence en ligne professionnelle qui inspire confiance et génère des contacts qualifiés.',
    process: [
      'Nous avons d\'abord analysé la cible : agriculteurs, éleveurs et investisseurs locaux, pour comprendre leurs besoins et leur niveau de maturité numérique.',
      'Nous avons conçu plusieurs concepts visuels alignés avec l\'identité de la marque. Le concept retenu privilégiait une palette terreuse, des images authentiques de terrain et une navigation simple.',
      'Nous avons conçu les pages clés : accueil, services, formations, contact — puis préparé les maquettes pour le développement WordPress.',
      'Développement complet sous WordPress avec un formulaire de capture de leads, intégration WhatsApp, et optimisation des performances et du SEO local.',
    ],
    result: 'Un site vitrine professionnel, rapide et optimisé pour le SEO local qui a multiplié par 3 les demandes de contact entrantes.',
  },
  'academia-helm': {
    title: 'Academia Helm',
    category: 'SaaS / Web App',
    tags: ['UI Design', 'UX Design', 'Web App'],
    url: 'https://www.academiahelm.com/',
    image: '/portfolio-academiahelm.png',
    description: 'Academia Helm est une plateforme SaaS de pilotage éducatif nouvelle génération conçue pour les établissements scolaires africains. Elle centralise la gestion des élèves, des notes, des présences et de la communication parents-enseignants.',
    process: [
      'Audit complet des besoins : entretiens avec des directeurs d\'école, enseignants et parents pour cartographier les points de friction du système traditionnel.',
      'Architecture UX : définition des parcours utilisateurs pour 4 profils distincts (administrateur, enseignant, parent, élève) avec des tableaux de bord adaptés à chaque rôle.',
      'Design System complet : composants réutilisables, palette de couleurs, typographie et grille responsive, pensés pour une utilisation sur mobile en zones à faible connectivité.',
      'Développement et déploiement de l\'application web complète, avec un onboarding simplifié pour maximiser l\'adoption.',
    ],
    result: 'Une application web SaaS complète déployée dans plusieurs établissements pilotes au Bénin et au Togo.',
  },
  'afribayit': {
    title: 'AfriBayit',
    category: 'Marketplace',
    tags: ['UI Design', 'UX Design', 'Marketplace'],
    url: 'https://afribayit.vercel.app/',
    image: '/portfolio-afribayit.png',
    description: 'AfriBayit est une marketplace immobilière pan-africaine permettant l\'achat, la vente et la location de biens immobiliers à travers l\'Afrique. La plateforme vise à fluidifier et sécuriser les transactions immobilières sur le continent.',
    process: [
      'Recherche marché approfondie sur les plateformes immobilières existantes en Afrique pour identifier les opportunités différenciatrices et les besoins non satisfaits.',
      'Conception d\'une expérience utilisateur intuitive : recherche par localisation, filtres avancés, fiches biens détaillées et système de messagerie intégrée entre acheteurs et vendeurs.',
      'Design responsive pensé mobile-first, avec une attention particulière aux temps de chargement pour les connexions à débit limité.',
      'Développement de la marketplace complète avec gestion des annonces, tableau de bord vendeur, système de favoris et intégration de la cartographie.',
    ],
    result: 'Une marketplace fonctionnelle et moderne, prête à être déployée à l\'échelle du continent avec une expérience utilisateur premium.',
  },
  'foncier-facile-afrique': {
    title: 'Foncier Facile Afrique',
    category: 'Site Vitrine',
    tags: ['UI Design', 'UX Design', 'WordPress'],
    url: 'https://www.foncierfacileafrique.fr/',
    image: '/portfolio-foncierfacile.png',
    description: 'Foncier Facile Afrique simplifie l\'achat de terrains sécurisés au Bénin pour la diaspora africaine en France et en Europe. Le site devait inspirer confiance, rassurer sur la légalité des transactions et générer des demandes de contact.',
    process: [
      'Analyse du profil cible : diaspora béninoise en Europe, méfiante des arnaques immobilières, recherchant des garanties légales solides et un interlocuteur de confiance.',
      'Stratégie de contenu axée sur la preuve sociale : témoignages clients, certifications légales, processus transparent étape par étape pour rassurer et convaincre.',
      'Design premium avec une identité visuelle forte évoquant la fiabilité et le sérieux. Photos de terrains réels, cartes et documents légaux mis en valeur.',
      'Développement WordPress avec formulaire de qualification des leads, intégration WhatsApp et CRM pour le suivi des prospects.',
    ],
    result: 'Un site vitrine qui convertit les visiteurs méfiants en leads qualifiés grâce à une stratégie de contenu centrée sur la confiance.',
  },
}

const allProjects = [
  { slug: 'win-agro-tech', title: 'Win Agro Tech', image: '/portfolio-winagrotech.png' },
  { slug: 'academia-helm', title: 'Academia Helm', image: '/portfolio-academiahelm.png' },
  { slug: 'afribayit', title: 'AfriBayit', image: '/portfolio-afribayit.png' },
  { slug: 'foncier-facile-afrique', title: 'Foncier Facile Afrique', image: '/portfolio-foncierfacile.png' },
]

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = projects[slug]
  if (!project) notFound()

  const otherProjects = allProjects.filter((p) => p.slug !== slug)

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] text-sm mb-8 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Toutes les réalisations
              </Link>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
                {project.title}
              </h1>
              <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-8">
                {project.description}
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300 group"
              >
                Voir en direct
                <ExternalLink className="w-4 h-4" />
              </a>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Screenshot ── */}
        <section className="py-12 md:py-16 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-white mb-8">Le Site</h2>
              <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/60 aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/40 via-transparent to-transparent" />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 right-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                >
                  Voir en direct <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── The Process ── */}
        <section className="py-16 md:py-20 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Le Processus</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.process.map((step, i) => (
                <AnimatedSection key={i}>
                  <div className="p-6 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/20 transition-colors duration-300">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-bold text-[#D4AF37]/20 leading-none shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-white/55 text-sm leading-relaxed pt-1">{step}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Other Projects ── */}
        <section className="py-16 md:py-20 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Nos Autres Réalisations</h2>
              <Link href="/our-work" className="text-[#D4AF37] text-sm font-semibold hover:underline shrink-0">
                Voir tout →
              </Link>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherProjects.map((p) => (
                <AnimatedSection key={p.slug}>
                  <Link
                    href={`/our-work/${p.slug}`}
                    className="group block rounded-xl overflow-hidden border border-white/8 bg-white/[0.02] hover:border-[#D4AF37]/30 transition-all duration-300"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#0B0B0B]/0 group-hover:bg-[#0B0B0B]/40 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider">
                          Voir le projet
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold text-sm group-hover:text-[#D4AF37] transition-colors">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transformez votre présence en ligne.
              </h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Discutons de votre projet et de comment Keter Marketing peut créer votre prochain site web haut de gamme.
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

      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
