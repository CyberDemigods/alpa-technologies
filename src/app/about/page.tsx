import Link from "next/link";
import { t, parseLang } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang: Lang = parseLang(params.lang);

  const breadcrumbs = [
    { label: t(lang, "breadcrumb.home"), href: `/?lang=${lang}` },
    { label: t(lang, "breadcrumb.about") },
  ];

  const sections = [
    {
      key: "import",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: "range",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      key: "clients",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      key: "logistics",
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
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
              <h3 className="text-lg font-semibold text-white mb-2">
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
            <h2 className="text-2xl font-bold text-white mb-4">
              {t(lang, "home.cta.title")}
            </h2>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              {t(lang, "home.cta.subtitle")}
            </p>
            <Link
              href={`/contact?lang=${lang}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-neon text-deep font-semibold rounded-xl hover:bg-neon-light transition-all shadow-lg shadow-neon/20"
            >
              {t(lang, "about.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
