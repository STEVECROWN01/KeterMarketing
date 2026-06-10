'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/hooks/use-scroll';

const navLinks = [
  { label: 'Création Web', href: '/webdesign' },
  { label: 'Maintenance Web', href: '/website-management' },
  { label: 'Acquisition Google', href: '/search-engine-marketing' },
  { label: 'Portfolio', href: '/our-work' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
        {
          'bg-[#0B0B0B]/95 backdrop-blur-lg border-white/10 md:top-4 md:max-w-4xl md:shadow-[0_0_30px_rgba(0,0,0,0.4)]':
            scrolled && !open,
          'bg-[#0B0B0B]/90': open,
        },
      )}
    >
      <nav
        className={cn(
          'flex h-16 w-full items-center justify-between px-4 md:h-14 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/keter-logo.png"
            alt="Keter Marketing"
            width={120}
            height={36}
            className="h-7 md:h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links + CTA */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              className={buttonVariants({
                variant: 'ghost',
                className: 'text-white/60 hover:text-white hover:bg-white/5 text-[13px] font-medium',
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="ml-2 bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[12px] uppercase tracking-[0.08em] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            <Link href="/request-a-quote">Démarrer mon projet</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden border-white/15 text-white hover:bg-white/5 hover:border-white/30"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'bg-[#0B0B0B]/95 backdrop-blur-lg fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-white/10 md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-5',
          )}
        >
          <div className="grid gap-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className={buttonVariants({
                  variant: 'ghost',
                  className: 'justify-start text-white/70 hover:text-[#D4AF37] hover:bg-white/5 text-[15px] font-medium',
                })}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[13px] uppercase tracking-[0.08em] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Link href="/request-a-quote" onClick={() => setOpen(false)}>
                Démarrer mon projet
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
