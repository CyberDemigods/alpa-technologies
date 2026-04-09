import Link from 'next/link';
import { img } from '@/lib/assets';
import type { Lang } from '@/lib/types';
import type { ServiceInfo } from '@/lib/types';

interface ServiceCardProps {
  service: ServiceInfo;
  lang: Lang;
}

const icons: Record<string, React.ReactNode> = {
  'instrument-clusters': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'hvac-controllers': (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  multimedia: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  testing: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
};

export default function ServiceCard({ service, lang }: ServiceCardProps) {
  const info = service.i18n[lang];
  const langParam = `?lang=${lang}`;

  return (
    <Link
      href={`/solutions/${service.slug}${langParam}`}
      className="group bg-card-solid border border-border-custom/30 rounded-xl overflow-hidden hover:border-neon/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neon/5"
    >
      {/* Image */}
      {service.image && (
        <div className="relative h-48 overflow-hidden bg-section">
          <img
            src={img(service.image)}
            alt={info.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg border border-neon/15 bg-neon/5 text-neon flex items-center justify-center group-hover:bg-neon/10 transition-colors">
            {icons[service.slug]}
          </div>
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-neon transition-colors">
            {info.name}
          </h3>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          {info.description}
        </p>
      </div>
    </Link>
  );
}
