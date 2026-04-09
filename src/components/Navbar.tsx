'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { t } from '@/lib/i18n';
import type { Lang } from '@/lib/types';
import ThemeToggle from './ThemeToggle';

const LANG_STORAGE_KEY = 'alpatech-lang';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const SUPPORTED: Lang[] = ['pl', 'en'];

export default function Navbar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const paramLang = searchParams.get('lang') as Lang | null;
  const [lang, setLang] = useState<Lang>('pl');

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    const resolved = paramLang && SUPPORTED.includes(paramLang) ? paramLang : stored && SUPPORTED.includes(stored) ? stored : 'pl';
    setLang(resolved);
    localStorage.setItem(LANG_STORAGE_KEY, resolved);
  }, [paramLang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLang = useCallback(
    (newLang: Lang) => {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
      const params = new URLSearchParams(searchParams.toString());
      params.set('lang', newLang);
      router.push(`${pathname}?${params.toString()}`);
      setMobileOpen(false);
    },
    [searchParams, router, pathname],
  );

  const langParam = `?lang=${lang}`;

  const navLinks = [
    { label: t(lang, 'nav.home'), href: `/${langParam}` },
    { label: t(lang, 'nav.solutions'), href: `/solutions${langParam}` },
    { label: t(lang, 'nav.about'), href: `/about${langParam}` },
    { label: t(lang, 'nav.contact'), href: `/contact${langParam}` },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled shadow-lg shadow-black/10' : 'nav-idle'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${langParam}`} className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <img src={`${BASE_PATH}/images/alpa-logo.png`} alt="Alpa Technologies" className="h-9 w-auto drop-shadow-[0_0_1px_rgba(255,255,255,0.3)]" />
            <span className="text-text-primary">Alpa</span>
            <span className="bg-gradient-to-r from-neon to-electric bg-clip-text text-transparent">Technologies</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-neon transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: theme + lang picker + CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme toggle */}
            <ThemeToggle />

            {/* Language picker */}
            <div className="flex items-center gap-1 rounded-lg border border-border-custom/30 p-0.5">
              {SUPPORTED.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors uppercase ${
                    lang === l
                      ? 'bg-neon text-deep'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/contact${langParam}`}
              className="bg-neon text-deep text-sm font-semibold px-5 py-2 rounded-lg hover:bg-neon-light transition-colors"
            >
              {t(lang, 'nav.cta')}
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-text-secondary hover:text-text-primary"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-deep/95 backdrop-blur-xl border-t border-border-custom/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-text-secondary hover:text-neon transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile lang picker */}
            <div className="flex items-center gap-2 pt-3 border-t border-border-custom/20">
              {SUPPORTED.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors uppercase ${
                    lang === l
                      ? 'bg-neon text-deep'
                      : 'text-text-muted hover:text-text-primary border border-border-custom/30'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <Link
              href={`/contact${langParam}`}
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-neon text-deep text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-neon-light transition-colors mt-3"
            >
              {t(lang, 'nav.cta')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
