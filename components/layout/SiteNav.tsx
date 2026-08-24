'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { artist } from '@/data/artist';
import { SerotoninMeter } from '@/components/ui/SerotoninMeter';

const navLinks = [
  { href: '/music', label: 'Müzik' },
  { href: '/story', label: 'Hikaye' },
  { href: '/social-impact', label: 'Sosyal Etki' },
  { href: '/press', label: 'Basın' },
  { href: '/contact', label: 'İletişim' },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        role="banner"
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[var(--ks-bg)]/92 backdrop-blur-md shadow-lg shadow-black/50'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav
          aria-label="Ana navigasyon"
          className="ks-container flex items-center justify-between h-16"
        >
          {/* Wordmark + Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-[var(--ks-accent)]"
            aria-label="Kayıp Serotonin — Ana sayfaya git"
          >
            <Image
              src={artist.logo}
              alt={artist.logoAlt}
              width={34}
              height={34}
              className="opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              priority
            />
            <span
              className="font-display text-[var(--ks-fg)] text-base tracking-wide leading-none"
              style={{ fontFamily: 'var(--ks-font-display)' }}
            >
              Kayıp Serotonin
            </span>
          </Link>

          {/* Right side: Serotonin meter + Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <SerotoninMeter />

            <ul className="flex items-center gap-6 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-label text-[var(--ks-muted)] hover:text-[var(--ks-fg)] transition-colors duration-200 focus-visible:outline-[var(--ks-accent)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] cursor-pointer focus-visible:outline-[var(--ks-accent)]"
          >
            <span
              className={[
                'block w-6 h-px bg-[var(--ks-fg)] transition-all duration-300',
                isOpen ? 'translate-y-[7px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-6 h-px bg-[var(--ks-fg)] transition-all duration-300',
                isOpen ? 'opacity-0 scale-x-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-6 h-px bg-[var(--ks-fg)] transition-all duration-300',
                isOpen ? '-translate-y-[7px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigasyon menüsü"
        aria-modal="true"
        className={[
          'fixed inset-0 z-40 bg-[var(--ks-bg)] flex flex-col justify-center transition-all duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <nav className="ks-container">
          <ul className="list-none m-0 p-0 flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-display-md text-[var(--ks-fg)] hover:text-[var(--ks-accent)] transition-colors duration-200 focus-visible:outline-[var(--ks-accent)]"
                  style={{
                    transitionDelay: isOpen ? `${i * 60}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(1rem)',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
