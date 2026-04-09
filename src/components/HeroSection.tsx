import Link from 'next/link';
import { t } from '@/lib/i18n';
import { img } from '@/lib/assets';
import type { Lang } from '@/lib/types';

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const langParam = `?lang=${lang}`;

  const stats = [
    { value: t(lang, 'hero.stat1.value'), label: t(lang, 'hero.stat1.label') },
    { value: t(lang, 'hero.stat2.value'), label: t(lang, 'hero.stat2.label') },
    { value: t(lang, 'hero.stat3.value'), label: t(lang, 'hero.stat3.label') },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={img('/images/hero-pcb.jpg')}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay - hardcoded to stay dark in both themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/80 to-[#030712]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/40" />
      </div>

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-neon/[0.04] blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon/20 bg-neon/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              <span className="text-neon text-sm font-medium">{t(lang, 'hero.badge')}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">{t(lang, 'hero.title.line1')}</span>
              <br />
              <span className="bg-gradient-to-r from-neon via-neon-light to-electric bg-clip-text text-transparent">
                {t(lang, 'hero.title.line2')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
              {t(lang, 'hero.subtitle')}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href={`/solutions${langParam}`}
                className="group bg-neon text-[#030712] font-bold px-7 py-3.5 rounded-xl hover:bg-neon-light transition-all text-sm inline-flex items-center gap-2 shadow-lg shadow-neon/20"
              >
                {t(lang, 'hero.ctaPrimary')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href={`/contact${langParam}`}
                className="border border-neon/40 text-neon font-semibold px-7 py-3.5 rounded-xl hover:bg-neon/10 hover:border-neon/60 transition-all text-sm backdrop-blur-sm"
              >
                {t(lang, 'hero.ctaSecondary')}
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-10 bg-white/20 hidden sm:block" />}
                  <div className={i > 0 ? 'sm:pl-3' : ''}>
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product photo grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={img('/images/pcb-clusters.jpg')} alt="PCB Instrument Cluster" className="w-full h-40 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={img('/images/hvac-controller.jpg')} alt="HVAC Controller" className="w-full h-48 object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={img('/images/multimedia-unit.jpg')} alt="Multimedia System" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={img('/images/engineering-workspace.jpg')} alt="PCB Engineering" className="w-full h-40 object-cover" />
                </div>
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
