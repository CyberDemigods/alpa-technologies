'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { t } from '@/lib/i18n';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import type { Lang } from '@/lib/types';

interface ProductFiltersProps {
  lang: Lang;
  currentCategory?: string;
  currentBrand?: string;
}

export default function ProductFilters({ lang, currentCategory, currentBrand }: ProductFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract unique brands from products
  const brands = Array.from(new Set(products.map((p) => p.brand))).sort();

  const updateParam = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      // Always keep lang
      if (!params.has('lang')) {
        params.set('lang', lang);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname, lang],
  );

  const clearFilters = useCallback(() => {
    router.push(`${pathname}?lang=${lang}`);
  }, [router, pathname, lang]);

  return (
    <aside className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
          {t(lang, 'catalog.filterByCategory')}
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => {
            const isActive = currentCategory === cat.slug;
            return (
              <label
                key={cat.slug}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => updateParam('category', isActive ? null : cat.slug)}
                  className="w-4 h-4 rounded border-border-custom bg-section text-neon focus:ring-neon/30 focus:ring-offset-0 accent-neon"
                />
                <span className={`text-sm transition-colors ${isActive ? 'text-neon' : 'text-text-secondary group-hover:text-white'}`}>
                  {cat.i18n[lang].name}
                </span>
                <span className="text-xs text-text-muted ml-auto">
                  {cat.productCount}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Brand filter */}
      <div>
        <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
          {t(lang, 'catalog.filterByBrand')}
        </h3>
        <div className="space-y-2">
          {brands.map((brand) => {
            const isActive = currentBrand === brand;
            return (
              <label
                key={brand}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => updateParam('brand', isActive ? null : brand)}
                  className="w-4 h-4 rounded border-border-custom bg-section text-neon focus:ring-neon/30 focus:ring-offset-0 accent-neon"
                />
                <span className={`text-sm transition-colors ${isActive ? 'text-neon' : 'text-text-secondary group-hover:text-white'}`}>
                  {brand}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Clear */}
      {(currentCategory || currentBrand) && (
        <button
          onClick={clearFilters}
          className="w-full border border-neon/50 text-neon text-sm font-semibold py-2.5 rounded-lg hover:bg-neon/10 transition-colors"
        >
          {t(lang, 'filters.clear') || 'Clear filters'}
        </button>
      )}
    </aside>
  );
}
