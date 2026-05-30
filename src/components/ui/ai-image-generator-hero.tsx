"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectSlide {
  id: string
  src: string
  alt: string
  title: string
  tag: string
  url: string
}

interface ProjectCarouselHeroProps {
  title: React.ReactNode
  subtitle: string
  description: React.ReactNode
  ctaText: string
  ctaSecondaryText?: string
  onCtaClick?: () => void
  onSecondaryCtaClick?: () => void
  projects: ProjectSlide[]
  features?: Array<{
    title: string
    description: string
    icon?: React.ReactNode
  }>
  ratingBadge?: React.ReactNode
  microCopy?: string
}

export function ImageCarouselHero({
  title,
  description,
  ctaText,
  ctaSecondaryText,
  onCtaClick,
  onSecondaryCtaClick,
  projects,
  features = [],
  ratingBadge,
  microCopy,
}: ProjectCarouselHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((activeIndex + 1) % projects.length)
  }, [activeIndex, projects.length, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((activeIndex - 1 + projects.length) % projects.length)
  }, [activeIndex, projects.length, goToSlide])

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isPaused, projects.length])

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-[#0B0B0B] overflow-hidden"
    >
      {/* Animated background gradient — gold accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#D4AF37]/3 via-transparent to-[#D4AF37]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        {/* Rating badge */}
        {ratingBadge && (
          <div className="mb-6">
            {ratingBadge}
          </div>
        )}

        {/* Headline */}
        <div className="relative z-20 text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.08] tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        </div>

        {/* Project Carousel */}
        <div
          className="relative w-full max-w-4xl mb-8 sm:mb-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main carousel viewport */}
          <div className="relative aspect-[16/9] sm:aspect-[16/8.5] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(212,175,55,0.1)]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  index === activeIndex
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-[1.02] z-0"
                )}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover object-top"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                {/* Gradient overlay at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-[#0B0B0B]/20 to-transparent" />
                
                {/* Project info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] bg-[#D4AF37] text-[#0B0B0B] rounded-full mb-2 sm:mb-3">
                        {project.tag}
                      </span>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[12px] sm:text-[13px] font-medium hover:bg-white/20 hover:border-[#D4AF37]/40 transition-all duration-300 group"
                    >
                      Voir le site
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0B0B0B]/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0B0B0B]/80 hover:border-[#D4AF37]/40 transition-all duration-300"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0B0B0B]/60 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0B0B0B]/80 hover:border-[#D4AF37]/40 transition-all duration-300"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === activeIndex
                    ? "w-8 h-2.5 bg-[#D4AF37]"
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Voir ${project.title}`}
              />
            ))}
          </div>

          {/* Project thumbnails row */}
          <div className="hidden sm:flex items-center justify-center gap-3 mt-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "relative w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300",
                  index === activeIndex
                    ? "border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] opacity-100"
                    : "border-white/10 opacity-40 hover:opacity-70 hover:border-white/30"
                )}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
          <button
            onClick={onCtaClick}
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-md",
              "bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold",
              "text-[14px] uppercase tracking-[0.06em]",
              "hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300",
              "active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]",
              "group",
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {ctaSecondaryText && (
            <button
              onClick={onSecondaryCtaClick}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-md",
                "border border-white/20 text-white/70 hover:bg-white hover:text-[#0B0B0B]",
                "text-[14px] font-medium uppercase tracking-[0.06em]",
                "bg-transparent transition-all duration-300",
                "active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]",
              )}
            >
              {ctaSecondaryText}
            </button>
          )}
        </div>

        {/* Micro-copy */}
        {microCopy && (
          <p className="text-[13px] text-white/30 mb-10 sm:mb-12">{microCopy}</p>
        )}

        {/* Features / Key Stats Section */}
        {features.length > 0 && (
          <div className="relative z-20 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "text-center p-5 sm:p-6 rounded-xl",
                  "bg-white/[0.03] backdrop-blur-sm border border-white/10",
                  "hover:bg-white/[0.06] hover:border-[#D4AF37]/30 transition-all duration-300",
                  "group",
                )}
              >
                {feature.icon && (
                  <div className="flex items-center justify-center mb-3 text-[#D4AF37]">
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1.5 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[13px] sm:text-sm text-white/40">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none z-30" />
    </section>
  )
}
