import Link from "next/link";
import { t, parseLang } from "@/lib/i18n";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Lang } from "@/lib/types";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const lang: Lang = 'pl';

  const featured = products.filter((p) => p.badge).slice(0, 6);

  const whyCards = [
    {
      key: "import",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: "quality",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      key: "logistics",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      key: "b2b",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection lang={lang} />

      {/* Categories */}
      <section className="relative py-20 px-4">
        {/* Subtle top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-custom/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-neon/60 text-xs uppercase tracking-[0.25em] font-medium">
              {t(lang, 'hero.badge')}
            </span>
            <h2 className="section-heading inline-block mt-3">
              {t(lang, "home.categories.title")}
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              {t(lang, "home.categories.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-20 px-4 bg-section">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/10 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-neon/60 text-xs uppercase tracking-[0.25em] font-medium">
                {t(lang, 'nav.products')}
              </span>
              <h2 className="section-heading inline-block mt-3">
                {t(lang, "home.featured.title")}
              </h2>
              <p className="text-text-secondary mt-4">
                {t(lang, "home.featured.subtitle")}
              </p>
            </div>
            <Link
              href={`/products?lang=${lang}`}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-neon hover:text-neon-light transition-colors shrink-0"
            >
              {t(lang, "hero.cta")}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="relative py-20 px-4">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-custom/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading inline-block">
              {t(lang, "home.why.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((card) => (
              <div key={card.key} className="bg-card-solid border border-border-custom/30 rounded-xl p-6 text-center hover:border-neon/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl border border-neon/15 bg-neon/5 text-neon flex items-center justify-center mx-auto mb-4 group-hover:bg-neon/10 group-hover:scale-105 transition-all">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t(lang, `home.why.${card.key}.title`)}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {t(lang, `home.why.${card.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-section">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/10 to-transparent" />

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card-solid border border-border-custom/30 rounded-2xl p-10 sm:p-14 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-neon/[0.03] blur-[80px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t(lang, "home.cta.title")}
              </h2>
              <p className="text-text-secondary mb-8 text-lg max-w-lg mx-auto">
                {t(lang, "home.cta.subtitle")}
              </p>
              <Link
                href={`/contact?lang=${lang}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-neon text-deep font-bold rounded-xl hover:bg-neon-light transition-all text-lg shadow-lg shadow-neon/20"
              >
                {t(lang, "home.cta.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
