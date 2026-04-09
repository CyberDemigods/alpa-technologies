import { t } from "@/lib/i18n";
import { solutions } from "@/data/solutions";
import type { Lang } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { img } from "@/lib/assets";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lang: Lang = 'pl';
  const langParam = `?lang=${lang}`;

  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return notFound();

  const info = solution.i18n[lang];
  const otherSolutions = solutions.filter((s) => s.slug !== slug);

  const breadcrumbs = [
    { label: t(lang, "breadcrumb.home"), href: `/?lang=${lang}` },
    { label: t(lang, "breadcrumb.solutions"), href: `/solutions?lang=${lang}` },
    { label: info.name },
  ];

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={breadcrumbs} lang={lang} />

        {/* Back link */}
        <Link
          href={`/solutions${langParam}`}
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-neon transition-colors mt-4 mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {t(lang, 'solutions.back')}
        </Link>

        {/* Hero image */}
        {solution.image && (
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden mb-8 border border-border-custom/30">
            <img
              src={img(solution.image)}
              alt={info.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
          </div>
        )}

        {/* Title & description */}
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">{info.name}</h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          {info.description}
        </p>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            {t(lang, 'solutions.features')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {solution.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-card-solid border border-border-custom/20 rounded-lg px-4 py-3">
                <svg className="w-5 h-5 text-neon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-text-primary">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customization options */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            {t(lang, 'solutions.customization')}
          </h2>
          <div className="bg-card-solid border border-border-custom/30 rounded-xl p-6">
            <ul className="space-y-3">
              {solution.customizationOptions.map((opt) => (
                <li key={opt} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-neon/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span className="text-sm text-text-secondary">{opt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-card-solid border border-neon/20 rounded-2xl p-8 text-center mb-14">
          <h2 className="text-xl font-bold text-text-primary mb-3">
            {t(lang, 'home.cta.title')}
          </h2>
          <p className="text-text-secondary mb-5 max-w-md mx-auto text-sm">
            {t(lang, 'home.cta.subtitle')}
          </p>
          <Link
            href={`/contact${langParam}`}
            className="inline-flex items-center gap-2 px-7 py-3 bg-neon text-deep font-semibold rounded-xl hover:bg-neon-light transition-all shadow-lg shadow-neon/20"
          >
            {t(lang, 'solutions.cta')}
          </Link>
        </div>

        {/* Other solutions */}
        <div>
          <h2 className="text-xl font-semibold text-text-primary mb-5">
            {t(lang, 'solutions.other')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherSolutions.map((s) => {
              const sInfo = s.i18n[lang];
              return (
                <Link
                  key={s.slug}
                  href={`/solutions/${s.slug}${langParam}`}
                  className="group bg-card-solid border border-border-custom/30 rounded-xl p-5 hover:border-neon/20 transition-all"
                >
                  <h3 className="text-sm font-semibold text-text-primary mb-1 group-hover:text-neon transition-colors">
                    {sInfo.name}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2">
                    {sInfo.shortDesc}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
