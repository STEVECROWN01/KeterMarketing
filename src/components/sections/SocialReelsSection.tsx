'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const reels = [
  {
    thumbnail: null,
    caption: 'Pourquoi votre site ne vend pas (et comment y remédier)',
    platform: 'TikTok',
    likes: '2.4K',
    comments: '43',
    views: '127K',
    bg: 'from-[#1A1A1A] to-[#111]',
    emoji: '🎯',
  },
  {
    thumbnail: null,
    caption: '3 erreurs que font 90% des agences web avec le copywriting',
    platform: 'LinkedIn',
    likes: '890',
    comments: '61',
    views: '45K',
    bg: 'from-[#0A1628] to-[#0A0A0A]',
    emoji: '✍️',
  },
  {
    thumbnail: null,
    caption: 'On a refait ce site en 3 semaines — voici le résultat',
    platform: 'Instagram',
    likes: '1.6K',
    comments: '38',
    views: '76K',
    bg: 'from-[#1A0A1A] to-[#0A0A0A]',
    emoji: '🚀',
  },
]

export default function SocialReelsSection() {
  return (
    <section className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-36">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-3">
                Nos Contenus
              </span>
              <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-[1.15] text-white">
                Suivez notre méthode.
              </h2>
            </div>
            <Link
              href="/request-a-quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] text-[13px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 group shrink-0"
            >
              Réserver un appel
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Reels Grid */}
        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {reels.map((reel, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 cursor-pointer`}
              >
                {/* Video thumbnail area */}
                <div className={`aspect-[9/14] bg-gradient-to-br ${reel.bg} flex flex-col items-center justify-center relative`}>
                  {/* Platform badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] bg-white/10 backdrop-blur-sm text-white/70 rounded-full border border-white/10">
                      {reel.platform}
                    </span>
                  </div>

                  {/* Emoji / visual */}
                  <span className="text-5xl mb-4">{reel.emoji}</span>

                  {/* Play button */}
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Stats bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
                    <div className="flex items-center gap-4 text-[11px] text-white/60 font-mono">
                      <span>❤️ {reel.likes}</span>
                      <span>💬 {reel.comments}</span>
                      <span>▶ {reel.views}</span>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 bg-[#0B0B0B]">
                  <p className="text-white/70 text-[13px] leading-snug group-hover:text-white transition-colors duration-200">
                    {reel.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
