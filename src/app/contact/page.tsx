import { t } from "@/lib/i18n";
import type { Lang } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

export default async function ContactPage() {
  const lang: Lang = 'pl';

  const breadcrumbs = [
    { label: t(lang, "breadcrumb.home"), href: `/?lang=${lang}` },
    { label: t(lang, "breadcrumb.contact") },
  ];

  return (
    <section className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbs} lang={lang} />

        <h1 className="section-heading inline-block mt-6 mb-2">
          {t(lang, "contact.title")}
        </h1>
        <p className="text-text-secondary mb-10">
          {t(lang, "contact.subtitle")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm lang={lang} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact info */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                {t(lang, "contact.info.title")}
              </h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-0.5" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-text-muted">{t(lang, 'contact.emailLabel')}</p>
                    <a
                      href={`mailto:${t(lang, "contact.info.email")}`}
                      className="text-text-primary hover:text-neon transition-colors"
                    >
                      {t(lang, "contact.info.email")}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-0.5" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-text-muted">{t(lang, 'contact.phoneLabel')}</p>
                    <a
                      href={`tel:${t(lang, "contact.info.phone").replace(/\s/g, "")}`}
                      className="text-text-primary hover:text-neon transition-colors"
                    >
                      {t(lang, "contact.info.phone")}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neon mt-0.5" aria-hidden="true">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-text-muted">{t(lang, 'contact.info.addressLabel')}</p>
                    <p className="text-text-primary">{t(lang, "contact.info.address")}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Working hours */}
            <div className="glass-card p-6">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                {t(lang, "contact.hours.title")}
              </h2>
              <ul className="space-y-2 text-sm">
                <li className="text-text-muted">
                  {t(lang, "contact.hours.weekdays")}
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
