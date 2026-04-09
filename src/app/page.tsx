import Link from "next/link";
import { t } from "@/lib/i18n";
import { services } from "@/data/services";
import type { Lang } from "@/lib/types";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

export default async function HomePage() {
  const lang: Lang = 'pl';
  const langParam = `?lang=${lang}`;

  const processSteps = [
    {
      num: '01',
      title: t(lang, 'home.process.step1.title'),
      desc: t(lang, 'home.process.step1.desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: t(lang, 'home.process.step2.title'),
      desc: t(lang, 'home.process.step2.desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      num: '03',
      title: t(lang, 'home.process.step3.title'),
      desc: t(lang, 'home.process.step3.desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      num: '04',
      title: t(lang, 'home.process.step4.title'),
      desc: t(lang, 'home.process.step4.desc'),
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection lang={lang} />

      {/* Services */}
      <section className="relative py-20 px-4">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-custom/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="block text-neon/60 text-xs uppercase tracking-[0.25em] font-medium">
              {t(lang, 'home.services.label')}
            </span>
            <h2 className="section-heading inline-block mt-3">
              {t(lang, 'home.services.title')}
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
              {t(lang, 'home.services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 px-4 bg-section">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/10 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-heading inline-block">
              {t(lang, 'home.process.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="relative bg-card-solid border border-border-custom/30 rounded-xl p-6 hover:border-neon/20 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-black text-neon/20 group-hover:text-neon/40 transition-colors">{step.num}</span>
                  <div className="w-10 h-10 rounded-lg border border-neon/15 bg-neon/5 text-neon flex items-center justify-center group-hover:bg-neon/10 transition-colors">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-custom/50 to-transparent" />

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card-solid border border-border-custom/30 rounded-2xl p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-neon/[0.03] blur-[80px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                {t(lang, 'home.cta.title')}
              </h2>
              <p className="text-text-secondary mb-8 text-lg max-w-lg mx-auto">
                {t(lang, 'home.cta.subtitle')}
              </p>
              <Link
                href={`/contact${langParam}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-neon text-[#030712] font-bold rounded-xl hover:bg-neon-light transition-all text-lg shadow-lg shadow-neon/20"
              >
                {t(lang, 'home.cta.button')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
