import Link from 'next/link';
import { t } from '@/lib/i18n';
import type { CategoryInfo, Lang } from '@/lib/types';

interface CategoryCardProps {
  category: CategoryInfo;
  lang: Lang;
}

const categoryIcons: Record<string, React.ReactNode> = {
  clusters: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  pcb: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  ecu: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  lighting: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  sensors: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  wiring: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
};

const categoryAccents: Record<string, string> = {
  clusters: 'group-hover:border-amber-500/40 group-hover:shadow-amber-500/10',
  pcb: 'group-hover:border-green-500/40 group-hover:shadow-green-500/10',
  ecu: 'group-hover:border-blue-500/40 group-hover:shadow-blue-500/10',
  lighting: 'group-hover:border-yellow-400/40 group-hover:shadow-yellow-400/10',
  sensors: 'group-hover:border-purple-500/40 group-hover:shadow-purple-500/10',
  wiring: 'group-hover:border-red-500/40 group-hover:shadow-red-500/10',
};

const iconAccents: Record<string, string> = {
  clusters: 'text-amber-500 border-amber-500/20 bg-amber-500/5',
  pcb: 'text-green-500 border-green-500/20 bg-green-500/5',
  ecu: 'text-blue-500 border-blue-500/20 bg-blue-500/5',
  lighting: 'text-yellow-400 border-yellow-400/20 bg-yellow-400/5',
  sensors: 'text-purple-500 border-purple-500/20 bg-purple-500/5',
  wiring: 'text-red-500 border-red-500/20 bg-red-500/5',
};

export default function CategoryCard({ category, lang }: CategoryCardProps) {
  const info = category.i18n[lang];
  const langParam = `?category=${category.slug}&lang=${lang}`;
  const accent = categoryAccents[category.slug] || '';
  const iconAccent = iconAccents[category.slug] || 'text-neon border-neon/20 bg-neon/5';

  return (
    <Link
      href={`/products${langParam}`}
      className={`group block bg-card-solid border border-border-custom/30 rounded-xl p-6 transition-all duration-300 hover:shadow-xl ${accent}`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-lg border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${iconAccent}`}>
        {categoryIcons[category.slug] || (
          <div className="w-5 h-5 rounded-full bg-neon/30" />
        )}
      </div>

      {/* Name */}
      <h3 className="text-white font-bold text-lg mb-1.5 group-hover:text-neon transition-colors">
        {info.name}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
        {info.description}
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between">
        <span className="text-neon/70 text-sm font-medium">
          {category.productCount} {t(lang, 'catalog.products')}
        </span>
        <svg className="w-4 h-4 text-text-muted group-hover:text-neon group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
