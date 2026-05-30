'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetClose } from '@/components/ui/sheet'

const navLinks = [
  { label: 'Notre Process', href: '#process' },
  { label: 'Nos Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'À Propos', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.3)]'
          : 'bg-[#0B0B0B]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo LEFT */}
        <Link href="#hero" className="flex items-center shrink-0">
          <Image
            src="/keter-logo.png"
            alt="Keter Marketing"
            width={130}
            height={38}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </Link>

        {/* Nav links CENTER */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA RIGHT */}
        <div className="hidden md:block">
          <Link href="#cta-final">
            <Button className="bg-white hover:bg-[#D4AF37] text-[#0B0B0B] hover:text-[#0B0B0B] rounded-md px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 h-auto">
              Démarrer mon projet
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-[#0B0B0B] border-white/10 p-0">
              <div className="flex flex-col h-full pt-20">
                <div className="flex flex-col gap-0.5 px-6">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="px-3 py-3.5 text-base font-medium text-white/70 hover:text-[#D4AF37] hover:bg-white/5 rounded-lg transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto px-6 pb-8">
                  <SheetClose asChild>
                    <Link href="#cta-final" className="block">
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] rounded-md py-3.5 text-[14px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 h-auto">
                        Démarrer mon projet
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
