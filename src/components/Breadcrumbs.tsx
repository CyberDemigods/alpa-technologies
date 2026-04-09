import Link from 'next/link';
import type { Lang } from '@/lib/types';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  lang: Lang;
}

export default function Breadcrumbs({ items, lang }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-text-secondary">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-2">
              {idx > 0 && (
                <span className="text-text-muted select-none">&gt;</span>
              )}
              {isLast || !item.href ? (
                <span className="text-text-muted">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-neon transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
