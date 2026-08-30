'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { nav } from '@/lib/content';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo/logo-icon-transparent.png"
            alt="Green Drift"
            width={30}
            height={20}
            priority
            className="h-[26px] w-auto"
          />
          <span className="font-display font-bold text-lg tracking-wide uppercase">
            Green<span className="text-leafBright">Drift</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-steel hover:text-paper transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/riders"
            className="px-4 py-2.5 rounded-sm text-sm font-semibold border border-line hover:bg-surface2 transition-colors duration-150"
          >
            Ride
          </Link>
          <Link
            href="/partners"
            className="px-4 py-2.5 rounded-sm text-sm font-semibold bg-gradient-to-br from-leafBright to-leafDeep text-ink hover:shadow-[0_6px_24px_rgba(143,224,90,0.28)] transition-shadow duration-150"
          >
            Invest
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-paper"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line px-6 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-steel" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2.5 pt-2">
            <Link href="/riders" className="flex-1 text-center px-4 py-2.5 rounded-sm border border-line text-sm font-semibold">
              Ride
            </Link>
            <Link
              href="/partners"
              className="flex-1 text-center px-4 py-2.5 rounded-sm bg-gradient-to-br from-leafBright to-leafDeep text-ink text-sm font-semibold"
            >
              Invest
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
