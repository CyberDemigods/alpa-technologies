'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import type { Lang } from './types';
import { DEFAULT_LANG, SUPPORTED_LANGS, t } from './i18n';

export const LANG_STORAGE_KEY = 'alpatech-lang';

/**
 * Język bieżącej strony (static export nie zna ?lang= w czasie builda,
 * więc rozstrzygamy po stronie klienta): ?lang= > localStorage > 'pl'.
 * Prerender leci w 'pl', po hydracji stan przełącza się na właściwy język.
 */
export function useLang(): Lang {
  const searchParams = useSearchParams();
  const paramLang = searchParams.get('lang') as Lang | null;
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    const resolved =
      paramLang && SUPPORTED_LANGS.includes(paramLang)
        ? paramLang
        : stored && SUPPORTED_LANGS.includes(stored)
          ? stored
          : DEFAULT_LANG;
    setLang(resolved);
    localStorage.setItem(LANG_STORAGE_KEY, resolved);
    document.documentElement.lang = resolved;

    // <title>/description z layout.tsx są statyczne (PL). Next 16 streamuje metadata
    // i wstawia <title> już PO hydracji, więc samo jednorazowe nadpisanie przegrywa —
    // pilnujemy <head> przez chwilę i przywracamy właściwy tytuł.
    const title = t(resolved, 'meta.title');
    const description = t(resolved, 'meta.description');
    const apply = () => {
      if (document.title !== title) document.title = title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta && meta.getAttribute('content') !== description) meta.setAttribute('content', description);
    };
    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    const stop = window.setTimeout(() => observer.disconnect(), 5000);
    return () => {
      observer.disconnect();
      window.clearTimeout(stop);
    };
  }, [paramLang]);

  return lang;
}
