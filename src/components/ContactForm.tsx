'use client';

import { useState, type FormEvent } from 'react';
import { t } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

interface ContactFormProps {
  lang: Lang;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const subjectOptions = [
    { value: 'clusters', label: t(lang, 'contact.subjectClusters') },
    { value: 'hvac', label: t(lang, 'contact.subjectHVAC') },
    { value: 'multimedia', label: t(lang, 'contact.subjectMultimedia') },
    { value: 'testing', label: t(lang, 'contact.subjectTesting') },
    { value: 'other', label: t(lang, 'contact.subjectOther') },
  ];

  const inputClasses =
    'w-full bg-section border border-border-custom rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-colors text-sm';

  const labelClasses = 'block text-sm font-medium text-text-secondary mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label className={labelClasses}>{t(lang, 'contact.nameLabel')}</label>
        <input
          type="text"
          required
          placeholder={t(lang, 'contact.namePlaceholder')}
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label className={labelClasses}>{t(lang, 'contact.emailLabel')}</label>
        <input type="email" required placeholder="email@example.com" className={inputClasses} />
      </div>

      {/* Phone */}
      <div>
        <label className={labelClasses}>{t(lang, 'contact.phoneLabel')}</label>
        <input
          type="tel"
          placeholder={t(lang, 'contact.phonePlaceholder')}
          className={inputClasses}
        />
      </div>

      {/* Subject - Project Type */}
      <div>
        <label className={labelClasses}>{t(lang, 'contact.subjectLabel')}</label>
        <select required className={inputClasses}>
          <option value="">--</option>
          {subjectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className={labelClasses}>{t(lang, 'contact.messageLabel')}</label>
        <textarea
          required
          rows={5}
          placeholder={t(lang, 'contact.messagePlaceholder')}
          className={inputClasses + ' resize-none'}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitted}
        className="w-full bg-neon text-[#030712] font-semibold py-3 rounded-lg hover:bg-neon-light transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitted ? t(lang, 'contact.sent') : t(lang, 'contact.submit')}
      </button>
    </form>
  );
}
