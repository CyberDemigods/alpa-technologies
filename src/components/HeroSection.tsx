import Link from 'next/link';
import { t } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const langParam = `?lang=${lang}`;

  const stats = [
    { value: '500+', label: t(lang, 'hero.stat1') },
    { value: '50+', label: t(lang, 'hero.stat2') },
    { value: 'B2B', label: t(lang, 'hero.stat3') },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-deep">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Diagonal accent lines */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-neon/[0.06] rounded-full" />
          <div className="absolute -top-1/3 -right-1/6 w-[600px] h-[600px] border border-neon/[0.04] rounded-full" />
          <div className="absolute top-20 right-20 w-[400px] h-[400px] border border-neon/[0.03] rounded-full" />
        </div>

        {/* Ambient glow - subtle */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-neon/[0.03] blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-electric/[0.02] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon/20 bg-neon/5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              <span className="text-neon text-sm font-medium">{t(lang, 'hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">{t(lang, 'hero.title').split(' ').slice(0, 2).join(' ')}</span>
              <br />
              <span className="bg-gradient-to-r from-neon via-neon-light to-electric bg-clip-text text-transparent">
                {t(lang, 'hero.title').split(' ').slice(2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-xl">
              {t(lang, 'hero.subtitle')}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href={`/products${langParam}`}
                className="group bg-neon text-deep font-bold px-7 py-3.5 rounded-xl hover:bg-neon-light transition-all text-sm inline-flex items-center gap-2 shadow-lg shadow-neon/20"
              >
                {t(lang, 'hero.ctaPrimary')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/contact${langParam}`}
                className="border border-neon/40 text-neon font-semibold px-7 py-3.5 rounded-xl hover:bg-neon/10 hover:border-neon/60 transition-all text-sm"
              >
                {t(lang, 'hero.ctaSecondary')}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-10 bg-border-custom/40 hidden sm:block" />}
                  <div className={i > 0 ? 'sm:pl-3' : ''}>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-text-muted mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Automotive visual */}
          <div className="hidden lg:flex items-center justify-center relative">
            {/* Speedometer / Dashboard illustration */}
            <div className="relative w-[420px] h-[420px]">
              {/* Outer ring */}
              <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full animate-[spin_60s_linear_infinite]">
                <circle cx="210" cy="210" r="200" fill="none" stroke="rgba(245,158,11,0.08)" strokeWidth="1" />
                <circle cx="210" cy="210" r="200" fill="none" stroke="rgba(245,158,11,0.3)" strokeWidth="2" strokeDasharray="8 12" />
              </svg>

              {/* Middle ring */}
              <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full">
                <circle cx="210" cy="210" r="160" fill="none" stroke="rgba(245,158,11,0.06)" strokeWidth="1" />
                {/* Tick marks */}
                {Array.from({ length: 24 }).map((_, i) => {
                  const angle = (i * 15 * Math.PI) / 180;
                  const x1 = 210 + 150 * Math.cos(angle);
                  const y1 = 210 + 150 * Math.sin(angle);
                  const x2 = 210 + 160 * Math.cos(angle);
                  const y2 = 210 + 160 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={i % 3 === 0 ? 'rgba(245,158,11,0.4)' : 'rgba(245,158,11,0.15)'}
                      strokeWidth={i % 3 === 0 ? 2 : 1}
                    />
                  );
                })}
              </svg>

              {/* Inner ring with glow */}
              <svg viewBox="0 0 420 420" className="absolute inset-0 w-full h-full">
                <defs>
                  <radialGradient id="innerGlow">
                    <stop offset="0%" stopColor="rgba(245,158,11,0.08)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
                <circle cx="210" cy="210" r="120" fill="url(#innerGlow)" />
                <circle cx="210" cy="210" r="120" fill="none" stroke="rgba(245,158,11,0.1)" strokeWidth="1" />
              </svg>

              {/* Center content - speedometer needle area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {/* Gauge icon */}
                  <svg className="w-16 h-16 text-neon mx-auto mb-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-neon/60 text-xs uppercase tracking-[0.3em] font-medium">PersianParts</span>
                </div>
              </div>

              {/* Floating category badges */}
              <div className="absolute top-6 right-8 px-3 py-1.5 bg-card-solid/80 border border-border-custom/40 rounded-lg text-xs text-text-secondary backdrop-blur-sm">
                {t(lang, 'hero.badge.ecu')}
              </div>
              <div className="absolute bottom-16 left-0 px-3 py-1.5 bg-card-solid/80 border border-border-custom/40 rounded-lg text-xs text-text-secondary backdrop-blur-sm">
                {t(lang, 'hero.badge.clusters')}
              </div>
              <div className="absolute top-1/3 -right-4 px-3 py-1.5 bg-card-solid/80 border border-neon/20 rounded-lg text-xs text-neon backdrop-blur-sm">
                {t(lang, 'hero.badge.sku')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
    </section>
  );
}
