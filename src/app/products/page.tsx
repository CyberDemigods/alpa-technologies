import { t, parseLang } from "@/lib/i18n";
import { products } from "@/data/products";
import type { Lang, Category, Brand } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string; category?: string; brand?: string }>;
}) {
  const params = await searchParams;
  const lang: Lang = parseLang(params.lang);
  const categoryFilter = params.category as Category | undefined;
  const brandFilter = params.brand as Brand | undefined;

  let filtered = products;

  if (categoryFilter) {
    filtered = filtered.filter((p) => p.category === categoryFilter);
  }
  if (brandFilter) {
    filtered = filtered.filter((p) => p.brand === brandFilter);
  }

  const breadcrumbs = [
    { label: t(lang, "breadcrumb.home"), href: `/?lang=${lang}` },
    { label: t(lang, "breadcrumb.products") },
  ];

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbs} lang={lang} />

        <h1 className="section-heading inline-block mt-6 mb-8">
          {t(lang, "products.title")}
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters */}
          <aside className="lg:w-64 shrink-0">
            <ProductFilters
              lang={lang}
              currentCategory={categoryFilter}
              currentBrand={brandFilter}
            />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-text-secondary mb-6">
              {filtered.length} {t(lang, "products.results")}
            </p>

            {filtered.length === 0 ? (
              <div className="glass-card p-12 text-center">
                <p className="text-text-muted text-lg">
                  {t(lang, "products.no_results")}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    lang={lang}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
