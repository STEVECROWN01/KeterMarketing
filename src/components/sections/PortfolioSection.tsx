'use client'

import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Win Agro Tech',
    description: 'Agri Tech Solutions — Formation, élevage & vente de volailles au Bénin',
    image: '/portfolio-winagrotech.png',
    url: 'https://www.winagrotech.com/',
    slug: 'win-agro-tech',
    tag: 'Site Vitrine',
  },
  {
    title: 'Academia Helm',
    description: 'Plateforme de pilotage éducatif nouvelle génération pour l\'Afrique',
    image: '/portfolio-academiahelm.png',
    url: 'https://www.academiahelm.com/',
    slug: 'academia-helm',
    tag: 'SaaS / Web App',
  },
  {
    title: 'AfriBayit',
    description: 'Plateforme immobilière Pan-Africaine — Achat, vente & location',
    image: '/portfolio-afribayit.png',
    url: 'https://afri-bayit.vercel.app/',
    slug: 'afribayit',
    tag: 'Marketplace',
  },
  {
    title: 'Foncier Facile Afrique',
    description: 'Achat de terrains sécurisés au Bénin — Simplification foncière',
    image: '/portfolio-foncierfacile.png',
    url: 'https://www.foncierfacileafrique.fr/',
    slug: 'foncier-facile-afrique',
    tag: 'Site Vitrine',
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* Header — Sher Agency style: title left, CTA right */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-3">
                Portfolio
              </span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-[#0B0B0B]">
                Sites que nous avons créés.
              </h2>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#0B0B0B]/20 text-[#0B0B0B] text-[13px] font-semibold uppercase tracking-[0.08em] hover:bg-[#0B0B0B] hover:text-white transition-all duration-300 group"
              >
                Plus de réalisations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* 2×2 Grid */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-[#0B0B0B] border border-[#0B0B0B]/5 hover:border-[#D4AF37]/30 transition-all duration-300 shadow-sm"
              >
                {/* Image area — links to live site */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-[#0B0B0B]/0 group-hover:bg-[#0B0B0B]/50 transition-colors duration-300" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] bg-[#D4AF37] text-[#0B0B0B] rounded-full">
                      {project.tag}
                    </span>
                  </div>

                  {/* "Voir le projet" button — appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0B0B0B] text-[13px] font-semibold uppercase tracking-[0.06em]">
                      Voir le projet
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Info + Case Study link */}
                <div className="p-5 bg-white flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[#0B0B0B] text-lg font-semibold mb-1 group-hover:text-[#D4AF37] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-[#0B0B0B]/40 text-[13px] leading-snug">{project.description}</p>
                  </div>
                  <Link
                    href={`/our-work/${project.slug}`}
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#0B0B0B]/15 text-[#0B0B0B] text-[11px] font-semibold uppercase tracking-[0.08em] hover:bg-[#0B0B0B] hover:text-white hover:border-[#0B0B0B] transition-all duration-300 whitespace-nowrap"
                  >
                    Étude de cas
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
