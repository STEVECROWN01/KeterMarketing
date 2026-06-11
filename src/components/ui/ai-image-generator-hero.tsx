"use client"

import type React from "react"
import { useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageCard {
  id: string
  src: string
  alt: string
  rotation: number
}

interface ImageCarouselHeroProps {
  title: React.ReactNode
  subtitle?: string
  description: React.ReactNode
  ctaText: string
  ctaSecondaryText?: string
  onCtaClick?: () => void
  onSecondaryCtaClick?: () => void
  images: ImageCard[]
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
  subtitle,
  description,
  ctaText,
  ctaSecondaryText,
  onCtaClick,
  onSecondaryCtaClick,
  images,
  features = [],
  ratingBadge,
  microCopy,
}: ImageCarouselHeroProps) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0.5, y: 0.5 })
  const [isHovering, setIsHovering] = React.useState(false)
  const angleRef = useRef(0)
  const [rotatingCards, setRotatingCards] = React.useState<number[]>(() =>
    images.map((_, i) => i * (360 / images.length))
  )
  const rafRef = useRef<number | null>(null)

  // Continuous rotation animation using requestAnimationFrame (no re-renders per frame)
  useEffect(() => {
    let lastTime = performance.now()

    const animate = (now: number) => {
      const delta = now - lastTime
      // 0.4 degrees per 50ms → 8 degrees per second
      const increment = (delta / 50) * 0.4
      lastTime = now
      angleRef.current = (angleRef.current + increment) % 360

      setRotatingCards((prev) =>
        prev.map((_, i) => (angleRef.current + i * (360 / images.length)) % 360)
      )
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [images.length])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }, [])

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
        {/* Rating badge — above carousel */}
        {ratingBadge && (
          <div className="mb-6">
            {ratingBadge}
          </div>
        )}

        <div
          className="relative w-full max-w-6xl h-72 sm:h-96 md:h-[500px] lg:h-[560px] mb-8 sm:mb-12"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Rotating Image Cards */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ perspective: "1000px" }}>
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180)
              
              const radius = 260
              
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius * 0.4

              const perspectiveX = isHovering ? (mousePosition.x - 0.5) * 20 : 0
              const perspectiveY = isHovering ? (mousePosition.y - 0.5) * 20 : 0

              const depth = Math.sin(angle)
              const scale = 0.75 + (depth + 1) * 0.15
              const opacity = 0.5 + (depth + 1) * 0.25
              const zIndex = Math.round((depth + 1) * 10)

              return (
                <div
                  key={image.id}
                  className="absolute transition-all duration-300"
                  style={{
                    transform: `
                      translate(${x}px, ${y}px)
                      rotateX(${perspectiveY}deg)
                      rotateY(${perspectiveX}deg)
                      rotateZ(${image.rotation}deg)
                      scale(${scale})
                    `,
                    transformStyle: "preserve-3d",
                    zIndex: zIndex,
                    opacity: opacity,
                    width: "clamp(120px, 24vw, 380px)",
                    height: "clamp(80px, 15vw, 250px)",
                  }}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden",
                      "transition-all duration-300 hover:scale-105",
                      "cursor-pointer group",
                      "border border-white/10",
                      "shadow-[0_0_20px_rgba(212,175,55,0.1)] sm:shadow-[0_0_30px_rgba(212,175,55,0.15)]",
                    )}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top"
                      quality={95}
                      priority={index < 2}
                      sizes="(max-width: 640px) 240px, (max-width: 1024px) 560px, 760px"
                    />
                    {/* Gold shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Subtle border glow on hover */}
                    <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-all duration-300" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {subtitle && (
            <span className="inline-block text-[#D4AF37] text-sm font-semibold uppercase tracking-[0.15em] mb-3">
              {subtitle}
            </span>
          )}
          <h1 className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-bold leading-[1.08] tracking-tight mb-6">
            {title}
          </h1>

          <p className="text-base md:text-lg text-white/50 leading-relaxed max-w-xl mx-auto mb-8">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
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
            <p className="text-[13px] text-white/30">{microCopy}</p>
          )}
        </div>

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
