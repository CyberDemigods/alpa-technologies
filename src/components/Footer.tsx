'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { t } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

const LANG_STORAGE_KEY = 'alpatech-lang';
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const SUPPORTED: Lang[] = ['pl', 'en'];

export default function Footer() {
  const searchParams = useSearchParams();
  const paramLang = searchParams.get('lang') as Lang | null;
  const [lang, setLang] = useState<Lang>('pl');

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    const resolved = paramLang && SUPPORTED.includes(paramLang) ? paramLang : stored && SUPPORTED.includes(stored) ? stored : 'pl';
    setLang(resolved);
  }, [paramLang]);

  const langParam = `?lang=${lang}`;

  const navLinks = [
    { label: t(lang, 'nav.home'), href: `/${langParam}` },
    { label: t(lang, 'nav.solutions'), href: `/solutions${langParam}` },
    { label: t(lang, 'nav.about'), href: `/about${langParam}` },
    { label: t(lang, 'nav.contact'), href: `/contact${langParam}` },
  ];

  return (
    <footer className="bg-deep border-t border-border-custom/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href={`/${langParam}`} className="inline-flex items-center gap-2 text-xl font-bold tracking-tight mb-4">
              <img src={`${BASE_PATH}/images/alpa-logo.png`} alt="Alpa Technologies" className="h-8 w-auto" />
              <span className="text-text-primary">Alpa</span>
              <span className="bg-gradient-to-r from-neon to-electric bg-clip-text text-transparent">Technologies</span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mt-3">
              {t(lang, 'footer.brandDesc')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">{t(lang, 'footer.linksTitle')}</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-neon transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4">{t(lang, 'footer.contactTitle')}</h3>
            <ul className="space-y-2.5 text-sm text-text-secondary">
              <li>
                <a href={`mailto:${t(lang, 'contact.info.email')}`} className="hover:text-neon transition-colors">
                  {t(lang, 'contact.info.email')}
                </a>
              </li>
              <li>{t(lang, 'contact.info.address')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-custom/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; 2026 Alpa Technologies. {t(lang, 'footer.rights')}
          </p>
          <p className="text-[10px] uppercase tracking-widest text-text-muted/60">
            {t(lang, 'footer.forgedBy')}{' '}
            <a
              href="https://cyberdemigods.com"
              target="_blank"
              rel="noopener"
              className="hover:text-neon/80 transition-colors"
            >
              CyberDemigods
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
