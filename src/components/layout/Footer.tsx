'use client'

import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_CONTACT_URL } from '@/lib/constants'
import { InstagramIcon, LinkedInIcon, FacebookIcon, WhatsAppIcon } from '@/components/icons/SocialIcons'

/* ── Data ── */

const services = [
  { title: 'Création de site web', href: '/webdesign' },
  { title: 'Landing pages', href: '/webdesign' },
  { title: 'Maintenance Web', href: '/website-management' },
  { title: 'Acquisition Google', href: '/search-engine-marketing' },
]

const company = [
  { title: 'Notre Process', href: '/webdesign' },
  { title: 'Portfolio', href: '/our-work' },
  { title: 'Contactez-nous', href: '/contact-us' },
  { title: 'Carrières', href: '/careers' },
]

const socialLinks = [
  {
    icon: <InstagramIcon className="size-4" />,
    link: 'https://www.instagram.com/',
    label: 'Instagram',
    hoverColor: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
  },
  {
    icon: <LinkedInIcon className="size-4" />,
    link: 'https://www.linkedin.com/company/keter-marketing/',
    label: 'LinkedIn',
    hoverColor: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
  },
  {
    icon: <FacebookIcon className="size-4" />,
    link: 'https://www.facebook.com/',
    label: 'Facebook',
    hoverColor: 'hover:text-[#1877F2] hover:border-[#1877F2]/40',
  },
  {
    icon: <WhatsAppIcon className="size-4" />,
    link: WHATSAPP_CONTACT_URL,
    label: 'WhatsApp',
    hoverColor: 'hover:text-[#25D366] hover:border-[#25D366]/40',
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0B0B0B]">
      {/* Top radial gradient glow */}
      <div className="bg-[radial-gradient(35%_80%_at_30%_0%,rgba(212,175,55,0.06),transparent)] mx-auto max-w-5xl md:border-x md:border-white/5">
        {/* Top separator line */}
        <div className="bg-white/5 h-px w-full" />

        {/* Main grid */}
        <div className="grid max-w-5xl grid-cols-6 gap-6 p-6 md:p-8">
          {/* Left column — Logo, tagline, social */}
          <div className="col-span-6 flex flex-col gap-5 md:col-span-4">
            <Link href="/" className="w-max">
              <Image
                src="/keter-logo.png"
                alt="Keter Marketing"
                width={110}
                height={32}
                className="h-7 w-auto opacity-30 hover:opacity-60 transition-opacity duration-300"
                priority
              />
            </Link>
            <p className="text-white/30 max-w-sm font-mono text-sm text-balance leading-relaxed">
              La Couronne. Des sites web stratégiques qui génèrent de vrais clients — pas juste des visiteurs. Copywriting intégré. Résultats mesurables.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className={`rounded-md border border-white/10 p-2 text-white/40 transition-all duration-200 hover:bg-white/5 ${item.hoverColor}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-white/20 mb-2 block text-[11px] uppercase tracking-[0.15em] font-semibold">
              Services
            </span>
            <div className="flex flex-col gap-0.5">
              {services.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className="w-max py-1 text-sm text-white/40 duration-200 hover:text-[#D4AF37] hover:underline"
                  href={href}
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-white/20 mb-2 block text-[11px] uppercase tracking-[0.15em] font-semibold">
              Entreprise
            </span>
            <div className="flex flex-col gap-0.5">
              {company.map(({ href, title }, i) => (
                <Link
                  key={i}
                  className="w-max py-1 text-sm text-white/40 duration-200 hover:text-[#D4AF37] hover:underline"
                  href={href}
                >
                  {title}
                </Link>
              ))}
              <a
                className="w-max py-1 text-sm text-white/40 duration-200 hover:text-[#25D366] hover:underline"
                href={WHATSAPP_CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom separator line */}
        <div className="bg-white/5 h-px w-full" />

        {/* Bottom bar */}
        <div className="flex max-w-5xl flex-col sm:flex-row justify-between items-center gap-2 px-6 pt-3 pb-6 md:px-8">
          <p className="text-white/15 font-mono text-xs tracking-wide">
            © {year} Keter Marketing — La Couronne. Tous droits réservés.
          </p>
          <Link
            href="/privacy-policy"
            className="text-white/15 font-mono text-xs tracking-wide hover:text-white/40 transition-colors"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}
