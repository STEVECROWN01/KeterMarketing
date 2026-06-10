'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Play, Clock, X, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import AnimatedSection from './AnimatedSection'
import { VIMEO_VIDEO_URL } from '@/lib/constants'

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="video" className="bg-[#0B0B0B] py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* LEFT — Video Thumbnail (55%) */}
          <AnimatedSection className="w-full lg:w-[55%] shrink-0">
            <div 
              onClick={() => setIsOpen(true)}
              className="relative group cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#111] border border-white/5 group-hover:border-[#D4AF37]/30 transition-all duration-500">
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(212,175,55,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.4) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                  }}
                />
                {/* Gold glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />

                {/* Keter watermark */}
                <div className="absolute top-5 left-5 text-white/[0.06] text-xs font-bold uppercase tracking-[0.3em] font-mono">
                  Keter Marketing
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping" style={{ animationDuration: '2s' }} />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.3)] group-hover:bg-[#B8960C] transition-colors duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 text-[#0B0B0B] ml-1" fill="#0B0B0B" />
                    </div>
                  </motion.div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                  <Clock className="w-3 h-3 text-white/60" />
                  <span className="text-white/60 text-xs font-medium font-mono">1:30</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT — Text + CTAs (45%) */}
          <AnimatedSection delay={0.15} className="w-full lg:w-[45%]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-4 block">
              Notre approche
            </span>
            <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white mb-5">
              Voici comment on construit des sites qui vendent.
            </h2>
            <p className="text-[15px] md:text-base text-white/50 leading-relaxed mb-8 max-w-md">
              Stratégie, copywriting, design — découvrez notre approche en 90 secondes. Pas de bla-bla. Juste des résultats.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link href="/request-a-quote" className="sm:flex-1">
                <Button className="w-full bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] rounded-md py-4 text-[13px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 h-auto">
                  Réserver un appel
                </Button>
              </Link>
              <Link href="#portfolio" className="sm:flex-1">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white/70 hover:bg-white hover:text-[#0B0B0B] rounded-md py-4 text-[13px] font-medium uppercase tracking-[0.06em] transition-all duration-300 h-auto bg-transparent"
                >
                  Voir nos réalisations
                </Button>
              </Link>
            </div>

            {/* Trust Badges - Conforming to Sher Agency */}
            <div className="flex items-center gap-6 border-t border-white/10 pt-6">
              {/* Clutch Review Style */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-white/[0.04] border border-white/10 rounded flex items-center justify-center">
                  <Star className="size-[22px] fill-[#D4AF37] text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold font-mono leading-none">5.0 / 5.0</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">Avis Clients</p>
                </div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              {/* Partner Badge */}
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded flex items-center justify-center font-bold text-xs text-[#D4AF37] font-mono">
                  TOP
                </div>
                <div>
                  <p className="text-white text-xs font-bold leading-none">Top Agence</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">Web Design</p>
                </div>
              </div>
            </div>

          </AnimatedSection>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-[#111] border border-white/10 z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 border border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white transition-all z-20"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Embedded Video */}
              <iframe
                src={`${VIMEO_VIDEO_URL}?autoplay=1&muted=0`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Vidéo de présentation Keter Marketing"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
