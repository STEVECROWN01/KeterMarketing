'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-[#0B0B0B] overflow-hidden pt-20 md:pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Rating badge — top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm">
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </span>
              <span className="font-semibold text-white text-sm">5.0</span>
              <span className="text-white/40 text-sm">—</span>
              <span className="text-white/60 text-sm">Plus de 20 clients satisfaits</span>
            </span>
          </motion.div>

          {/* Headline — two lines, second line bigger + gold */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-bold leading-[1.08] tracking-tight mb-8"
          >
            <span className="text-white/70 font-normal">Des Sites Web Qui Génèrent de</span>
            <br />
            <span className="text-[#D4AF37]">Vrais Clients</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl mb-10"
          >
            Keter Marketing conçoit des sites web stratégiques qui transforment vos visiteurs en prises de contact qualifiées.
            <span className="text-white/80 font-medium"> Copywriting intégré. Résultats mesurables.</span>
          </motion.p>

          {/* Two CTA buttons — centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-3 mb-6"
          >
            <Link href="#cta-final">
              <Button className="bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] rounded-md px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 h-auto shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                Réserver un appel
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white hover:text-[#0B0B0B] rounded-md px-8 py-4 text-[14px] font-medium uppercase tracking-[0.06em] transition-all duration-300 h-auto bg-transparent"
              >
                Voir nos réalisations
              </Button>
            </Link>
          </motion.div>

          {/* Micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="text-[13px] text-white/30"
          >
            Appel découverte gratuit · 30 minutes · Sans engagement
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent pointer-events-none" />
    </section>
  )
}
