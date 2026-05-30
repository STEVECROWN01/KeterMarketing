'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import HeroSection from '@/components/sections/HeroSection'
import MarqueeSection from '@/components/sections/MarqueeSection'
import VideoSection from '@/components/sections/VideoSection'
import ServicesSection from '@/components/sections/ServicesSection'
import FeaturedReviewSection from '@/components/sections/FeaturedReviewSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import StatsSection from '@/components/sections/StatsSection'
import LeadMagnetSection from '@/components/sections/LeadMagnetSection'
import TeamSection from '@/components/sections/TeamSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">
        {/* 1 — Hero */}
        <HeroSection />

        {/* 2 — Ticker clients défilant (Sher: client name marquee) */}
        <MarqueeSection />

        {/* 3 — Vidéo explicative + badges (Sher: "Here's how we make websites") */}
        <VideoSection />

        {/* 4 — Ce que nous faisons (Sher: "What we do" with arrow list) */}
        <ServicesSection />

        {/* 5 — Avis vedette (Sher: single featured testimonial) */}
        <FeaturedReviewSection />

        {/* 6 — Témoignages vidéo / Real Client Stories */}
        <TestimonialsSection />

        {/* 7 — Notre processus (Sher: "How Our Process Works") */}
        <ProcessSection />

        {/* 8 — Portfolio / "Websites We Created" */}
        <PortfolioSection />

        {/* 10 — Chiffres clés (Sher: stats section) */}
        <StatsSection />

        {/* 11 — Checklist gratuite / Lead Magnet (Sher: "Free Checklist to Audit Your Website") */}
        <LeadMagnetSection />

        {/* 12 — Notre Équipe (Sher: "Our Team") */}
        <TeamSection />

        {/* 13 — FAQ (Sher: 2-column with Contact Us CTA) */}
        <FAQSection />

        {/* 14 — CTA Final */}
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
