'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import HeroSection from '@/components/sections/HeroSection'
import VideoSection from '@/components/sections/VideoSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactFormSection from '@/components/sections/ContactFormSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <VideoSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <ProcessSection />
        <PortfolioSection />
        <AboutSection />
        <ContactFormSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  )
}
