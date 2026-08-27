'use client';

import { useCallback, useEffect, useState } from 'react';
import { t } from '@/lib/i18n';
import { img } from '@/lib/assets';
import type { GalleryImage, Lang } from '@/lib/types';

interface SolutionGalleryProps {
  images: GalleryImage[];
  lang: Lang;
}

/** Siatka zdjęć realizacji z prostym lightboxem (Esc / strzałki / klik w tło). */
export default function SolutionGallery({ images, lang }: SolutionGalleryProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const close = useCallback(() => setOpenIdx(null), []);
  const step = useCallback(
    (dir: number) => {
      setOpenIdx((idx) => (idx === null ? null : (idx + dir + images.length) % images.length));
    },
    [images.length]
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIdx, close, step]);

  if (images.length === 0) return null;

  const current = openIdx !== null ? images[openIdx] : null;

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-text-primary mb-4">
        {t(lang, 'solutions.gallery')}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((image, idx) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIdx(idx)}
            className="group relative aspect-square rounded-xl overflow-hidden border border-border-custom/30 hover:border-neon/40 transition-all cursor-zoom-in"
          >
            <img
              src={img(image.src)}
              alt={image.alt[lang]}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt[lang]}
        >
          <button
            type="button"
            onClick={close}
            aria-label={t(lang, 'solutions.gallery.close')}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); step(-1); }}
              aria-label={t(lang, 'solutions.gallery.prev')}
              className="absolute left-2 sm:left-6 p-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <figure className="max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={img(current.src)}
              alt={current.alt[lang]}
              className="max-h-[80vh] w-auto mx-auto rounded-lg"
            />
            <figcaption className="text-center text-sm text-white/70 mt-3">
              {current.alt[lang]}
              {images.length > 1 && (
                <span className="text-white/40"> · {(openIdx ?? 0) + 1}/{images.length}</span>
              )}
            </figcaption>
          </figure>
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); step(1); }}
              aria-label={t(lang, 'solutions.gallery.next')}
              className="absolute right-2 sm:right-6 p-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
