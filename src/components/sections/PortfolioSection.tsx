'use client'

import Image from 'next/image'
import AnimatedSection from './AnimatedSection'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Win Agro Tech',
    description: 'Agri Tech Solutions — Formation, élevage & vente de volailles au Bénin',
    image: '/portfolio-winagrotech.png',
    url: 'https://www.winagrotech.com/',
    tag: 'Site Vitrine',
  },
  {
    title: 'Academia Helm',
    description: 'Plateforme de pilotage éducatif nouvelle génération pour l\'Afrique',
    image: '/portfolio-academiahelm.png',
    url: 'https://www.academiahelm.com/',
    tag: 'SaaS / Web App',
  },
  {
    title: 'AfriBayit',
    description: 'Plateforme immobilière Pan-Africaine — Achat, vente & location',
    image: '/portfolio-afribayit.png',
    url: 'https://afribayit.vercel.app/',
    tag: 'Marketplace',
  },
  {
    title: 'Foncier Facile Afrique',
    description: 'Achat de terrains sécurisés au Bénin — Simplification foncière',
    image: '/portfolio-foncierfacile.png',
    url: 'https://www.foncierfacileafrique.fr/',
    tag: 'Site Vitrine',
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-3">
                Portfolio
              </span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white">
                Sites que nous avons créés.
              </h2>
            </div>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#D4AF37] hover:text-[#B8960C] transition-colors duration-200 group shrink-0"
            >
              Obtenir un devis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </AnimatedSection>

        {/* 2×2 Grid */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0B0B0B]/0 group-hover:bg-[#0B0B0B]/30 transition-colors duration-300" />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] bg-[#D4AF37] text-[#0B0B0B] rounded-full">
                      {project.tag}
                    </span>
                  </div>
                  {/* External link icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B0B0B]/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="text-white text-lg font-semibold mb-1 group-hover:text-[#D4AF37] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-[13px] leading-snug">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
