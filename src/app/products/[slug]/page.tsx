import { notFound } from "next/navigation";
import Link from "next/link";
import { t, parseLang } from "@/lib/i18n";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Lang } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang: Lang = 'pl';

  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category);
  const categoryName = category?.i18n[lang]?.name ?? product.category;
  const productName = product.i18n[lang].name;

  const breadcrumbs = [
    { label: t(lang, "breadcrumb.home"), href: `/?lang=${lang}` },
    { label: t(lang, "breadcrumb.products"), href: `/products?lang=${lang}` },
    {
      label: categoryName,
      href: `/products?lang=${lang}&category=${product.category}`,
    },
    { label: productName },
  ];

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const badgeLabel = product.badge
    ? t(lang, `product.badge.${product.badge}`)
    : null;

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbs} lang={lang} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product image placeholder */}
          <div className="glass-card aspect-square flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-section via-card-solid to-deep flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4 opacity-30">
                  {product.category === "clusters" && "\u{1F4CA}"}
                  {product.category === "pcb" && "\u{1F4DF}"}
                  {product.category === "ecu" && "\u{1F4BB}"}
                  {product.category === "lighting" && "\u{1F4A1}"}
                  {product.category === "sensors" && "\u{1F4E1}"}
                  {product.category === "wiring" && "\u{1F50C}"}
                </div>
                <p className="text-text-muted text-sm">{product.sku}</p>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div>
            {badgeLabel && (
              <span
                className={
                  product.badge === "new"
                    ? "badge--new mb-4 inline-block"
                    : "badge--bestseller mb-4 inline-block"
                }
              >
                {badgeLabel}
              </span>
            )}

            <h1 className="text-3xl font-bold text-text-primary mb-2">
              {productName}
            </h1>

            <p className="text-text-secondary text-sm mb-6">
              {t(lang, "product.sku")}: {product.sku}
            </p>

            <p className="text-text-muted leading-relaxed mb-8">
              {product.i18n[lang].description}
            </p>

            {/* Specs table */}
            <div className="glass-card p-6 mb-8">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                {t(lang, "product.specs")}
              </h2>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="contents">
                    <dt className="text-text-secondary text-sm font-medium">
                      {key}
                    </dt>
                    <dd className="text-text-primary text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Compatibility */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                {t(lang, "product.compatibility")}
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.compatibility.map((car) => (
                  <span
                    key={car}
                    className="px-3 py-1.5 text-sm bg-card-solid border border-border-custom rounded-full text-text-muted"
                  >
                    {car}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/contact?lang=${lang}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-neon text-deep font-bold rounded-lg hover:bg-neon-light transition-colors text-lg"
            >
              {t(lang, "product.ask_price")}
            </Link>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="section-heading inline-block mb-8">
              {t(lang, "product.related")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} lang={lang} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
