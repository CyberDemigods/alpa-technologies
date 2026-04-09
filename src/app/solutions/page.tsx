import { t } from "@/lib/i18n";
import { solutions } from "@/data/solutions";
import type { Lang } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { img } from "@/lib/assets";

export default async function SolutionsPage() {
  const lang: Lang = 'pl';
  const langParam = `?lang=${lang}`;

  const breadcrumbs = [
    { label: t(lang, "breadcrumb.home"), href: `/?lang=${lang}` },
    { label: t(lang, "breadcrumb.solutions") },
  ];

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbs} lang={lang} />

        <h1 className="section-heading inline-block mt-6 mb-2">
          {t(lang, "solutions.title")}
        </h1>
        <p className="text-text-secondary mb-10 max-w-2xl">
          {t(lang, "solutions.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution) => {
            const info = solution.i18n[lang];
            return (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}${langParam}`}
                className="group bg-card-solid border border-border-custom/30 rounded-xl overflow-hidden hover:border-neon/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-neon/5"
              >
                {solution.image && (
                  <div className="relative h-52 overflow-hidden bg-section">
                    <img
                      src={img(solution.image)}
                      alt={info.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-text-primary mb-2 group-hover:text-neon transition-colors">
                    {info.name}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {info.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.features.slice(0, 3).map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 rounded-full border border-border-custom/40 text-text-muted">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
