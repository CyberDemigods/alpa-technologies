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
    // <title> i description z layout.tsx są statyczne (PL) — nadpisujemy po hydracji
    document.title = t(resolved, 'meta.title');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t(resolved, 'meta.description'));
  }, [paramLang]);

  return lang;
}
