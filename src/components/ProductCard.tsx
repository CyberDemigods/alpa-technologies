import Link from 'next/link';
import { t } from '@/lib/i18n';
import type { Product, Lang } from '@/lib/types';

interface ProductCardProps {
  product: Product;
  lang: Lang;
}

const categoryIcons: Record<string, React.ReactNode> = {
  clusters: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  pcb: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  ecu: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  lighting: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  sensors: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  wiring: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  clusters: { bg: 'bg-amber-500/[0.07]', text: 'text-amber-500', border: 'border-amber-500/20' },
  pcb: { bg: 'bg-green-500/[0.07]', text: 'text-green-500', border: 'border-green-500/20' },
  ecu: { bg: 'bg-blue-500/[0.07]', text: 'text-blue-500', border: 'border-blue-500/20' },
  lighting: { bg: 'bg-yellow-400/[0.07]', text: 'text-yellow-400', border: 'border-yellow-400/20' },
  sensors: { bg: 'bg-purple-500/[0.07]', text: 'text-purple-500', border: 'border-purple-500/20' },
  wiring: { bg: 'bg-red-500/[0.07]', text: 'text-red-500', border: 'border-red-500/20' },
};

export default function ProductCard({ product, lang }: ProductCardProps) {
  const info = product.i18n[lang];
  const langParam = `?lang=${lang}`;
  const colors = categoryColors[product.category] || { bg: 'bg-neon/[0.07]', text: 'text-neon', border: 'border-neon/20' };

  return (
    <Link
      href={`/products/${product.slug}${langParam}`}
      className="group block bg-card-solid border border-border-custom/30 rounded-xl overflow-hidden hover:border-neon/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
    >
      {/* Icon area */}
      <div className={`relative h-40 ${colors.bg} flex items-center justify-center border-b ${colors.border}`}>
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className={`relative ${colors.text} opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
          {categoryIcons[product.category] || (
            <div className="w-10 h-10 rounded-full bg-neon/20" />
          )}
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 right-3 rtl:right-auto rtl:left-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md ${
              product.badge === 'new'
                ? 'bg-neon/15 text-neon border border-neon/25'
                : 'bg-electric/15 text-electric border border-electric/25'
            }`}
          >
            {product.badge === 'new' ? t(lang, 'product.new') : t(lang, 'product.bestseller')}
          </span>
        )}

        {/* SKU */}
        <span className="absolute bottom-2 right-3 rtl:right-auto rtl:left-3 text-[10px] text-text-muted/50 font-mono">
          {product.sku}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category label */}
        <span className={`text-[11px] uppercase tracking-wider font-medium ${colors.text}`}>
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-white font-semibold mt-1.5 mb-2 line-clamp-2 group-hover:text-neon transition-colors leading-snug">
          {info.name}
        </h3>

        {/* Short description */}
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-3">
          {info.shortDesc}
        </p>

        {/* Compatibility tags */}
        {product.compatibility.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.compatibility.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-md bg-section border border-border-custom/30 text-text-muted"
              >
                {tag}
              </span>
            ))}
            {product.compatibility.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 text-text-muted">
                +{product.compatibility.length - 3}
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-border-custom/20">
          <span className="text-sm font-semibold text-neon group-hover:text-neon-light transition-colors">
            {t(lang, 'product.askPrice')}
          </span>
          <svg className="w-4 h-4 text-text-muted group-hover:text-neon group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
