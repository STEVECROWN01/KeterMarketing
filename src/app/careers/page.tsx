'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import AnimatedSection from '@/components/sections/AnimatedSection'
import { ArrowRight, Briefcase, Sparkles, Star, Zap, Heart, ExternalLink } from 'lucide-react'
import { WHATSAPP_CONTACT_URL, EMAIL_CONTACT } from '@/lib/constants'

const jobs = [
  {
    id: 'dev-web',
    title: 'Développeur Web',
    type: 'Temps plein',
    location: 'Remote / Cotonou',
    tags: ['WordPress', 'Webflow', 'HTML/CSS', 'JavaScript', 'Figma'],
    description:
      'Construisez de beaux sites web et landing pages à partir de maquettes Figma approuvées. Vous travaillez en étroite collaboration avec notre équipe créative pour livrer des expériences utilisateur haut de gamme.',
    requirements: [
      '2+ ans d\'expérience en développement web',
      'Maîtrise de WordPress et/ou Webflow',
      'Connaissance des bonnes pratiques SEO technique',
      'Souci du détail et sens de l\'esthétique',
    ],
  },
  {
    id: 'comm-digitale',
    title: 'Chargé(e) de Communication Digitale',
    type: 'Temps plein',
    location: 'Remote / Cotonou',
    tags: ['Copywriting', 'Social Media', 'Figma', 'Marketing', 'SEO'],
    description:
      'Créez du contenu stratégique qui génère de l\'engagement et des leads qualifiés pour nos clients. Vous gérez les réseaux sociaux, rédigez des textes percutants et analysez les performances.',
    requirements: [
      '1+ an d\'expérience en marketing digital',
      'Excellentes compétences rédactionnelles en français',
      'Maîtrise des principaux réseaux sociaux',
      'Capacité à analyser les métriques et ajuster la stratégie',
    ],
  },
]

const values = [
  {
    icon: <Star className="w-5 h-5 text-[#D4AF37]" />,
    title: 'Excellence Sans Compromis',
    description: 'Chaque projet est traité comme notre chef-d\'œuvre. Nous ne livrons que ce qui impressionne.',
  },
  {
    icon: <Zap className="w-5 h-5 text-[#D4AF37]" />,
    title: 'Impact Mesurable',
    description: 'Nous ne travaillons pas pour la beauté seule — chaque décision de design doit générer des résultats réels.',
  },
  {
    icon: <Heart className="w-5 h-5 text-[#D4AF37]" />,
    title: 'Équipe Soudée',
    description: 'Une petite équipe resserrée où chaque voix compte. Vous grandissez avec l\'agence.',
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> On recrute
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Postes Ouverts
              </h1>
              <p className="text-white/50 text-lg max-w-xl mb-8 leading-relaxed">
                Rejoignez une agence qui construit des choses qui comptent. Nous cherchons des talents ambitieux prêts à créer du meilleur.
              </p>
              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {['WordPress', 'Webflow', 'Figma', 'JavaScript', 'SEO', 'Copywriting', 'Social Media'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-white/10 text-white/40 bg-white/[0.03]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Job Listings ── */}
        <section className="py-16 md:py-20 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-5">
              {jobs.map((job) => (
                <AnimatedSection key={job.id}>
                  <div className="group p-6 md:p-8 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#D4AF37]/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-9 h-9 rounded-md bg-[#D4AF37]/10 flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-[#D4AF37]" />
                          </div>
                          <h2 className="text-xl font-bold text-white">{job.title}</h2>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/40 ml-12">
                          <span>{job.type}</span>
                          <span>·</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <a
                        href={`${WHATSAPP_CONTACT_URL}?text=Bonjour, je souhaite postuler pour le poste de ${encodeURIComponent(job.title)} chez Keter Marketing.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-[#D4AF37]/40 text-[#D4AF37] text-sm font-semibold hover:bg-[#D4AF37]/10 transition-colors whitespace-nowrap group/btn"
                      >
                        Postuler
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </div>

                    <p className="text-white/55 text-sm leading-relaxed mb-4 ml-0 md:ml-12">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4 ml-0 md:ml-12">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] rounded-full bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="ml-0 md:ml-12 space-y-1.5">
                      {job.requirements.map((req, i) => (
                        <div key={i} className="flex items-start gap-2 text-white/40 text-sm">
                          <span className="text-[#D4AF37] mt-0.5">→</span>
                          {req}
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Notre Culture ── */}
        <section className="py-16 md:py-20 border-b border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notre Culture</h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Nous ne sommes pas une agence comme les autres. Chez Keter, l&apos;excellence est le standard minimum.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <AnimatedSection key={i}>
                  <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#D4AF37]/20 transition-colors duration-300 h-full">
                    <div className="w-10 h-10 rounded-md bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                      {v.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA / Apply ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt(e) à nous rejoindre ?
              </h2>
              <p className="text-white/50 mb-8 max-w-md mx-auto">
                Envoyez-nous votre CV et une courte présentation via WhatsApp ou par email.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`${WHATSAPP_CONTACT_URL}?text=Bonjour, je souhaite postuler pour un poste chez Keter Marketing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300 group"
                >
                  Postuler via WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}?subject=Candidature`}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-md border border-white/15 text-white/70 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] text-[14px] uppercase tracking-[0.06em] transition-all duration-300"
                >
                  Envoyer par Email
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
