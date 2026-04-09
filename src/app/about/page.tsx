import Link from "next/link";
import { t } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function AboutPage() {
  const lang: Lang = 'pl';

  const breadcrumbs = [
    { label: t(lang, "breadcrumb.home"), href: `/?lang=${lang}` },
    { label: t(lang, "breadcrumb.about") },
  ];

  const sections = [
    {
      key: "engineering",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      key: "custom",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      key: "quality",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      key: "global",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={breadcrumbs} lang={lang} />

        <h1 className="section-heading inline-block mt-6 mb-6">
          {t(lang, "about.title")}
        </h1>

        <p className="text-text-secondary text-lg leading-relaxed mb-12">
          {t(lang, "about.intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {sections.map((s) => (
            <div key={s.key} className="bg-card-solid border border-border-custom/30 rounded-xl p-6 hover:border-neon/20 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg border border-neon/15 bg-neon/5 text-neon flex items-center justify-center mb-4 group-hover:bg-neon/10 group-hover:scale-105 transition-all">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {t(lang, `about.${s.key}.title`)}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {t(lang, `about.${s.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-card-solid border border-border-custom/30 rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] rounded-full bg-neon/[0.03] blur-[80px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              {t(lang, "home.cta.title")}
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              {t(lang, "home.cta.subtitle")}
            </p>
            <Link
              href={`/contact?lang=${lang}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-neon text-[#030712] font-semibold rounded-xl hover:bg-neon-light transition-all shadow-lg shadow-neon/20"
            >
              {t(lang, "about.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
