'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { t } from '@/lib/i18n';
import type { Lang } from '@/lib/types';

interface ContactFormProps {
  lang: Lang;
}

// Przekaznik formularzy CyberDemigods (Cloudflare Worker -> SMTP OVH -> info@alpatechs.pl).
const FORM_ENDPOINT = 'https://forms.cyberdemigods.com/submit';
const TURNSTILE_SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const TURNSTILE_SITEKEY = '0x4AAAAAAFHvVMy2fkCjGJTa';
// Lokalnie: testowy klucz Turnstile (zawsze przepuszcza) i zgloszenia trafiaja do nas, nie do klienta.
const TURNSTILE_TEST_SITEKEY = '1x00000000000000000000AA';

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'verifying';

interface TurnstileApi {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

function loadTurnstile(): Promise<TurnstileApi> {
  return new Promise((resolve, reject) => {
    if (window.turnstile) return resolve(window.turnstile);
    let script = document.querySelector<HTMLScriptElement>(`script[src="${TURNSTILE_SCRIPT}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = TURNSTILE_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener('load', () => (window.turnstile ? resolve(window.turnstile) : reject()));
    script.addEventListener('error', () => reject());
  });
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [token, setToken] = useState('');
  const mountedAt = useRef(Date.now());
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  const isLocal = typeof window !== 'undefined' && window.location.hostname === 'localhost';

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !widgetRef.current || widgetId.current) return;
        widgetId.current = turnstile.render(widgetRef.current, {
          sitekey: window.location.hostname === 'localhost' ? TURNSTILE_TEST_SITEKEY : TURNSTILE_SITEKEY,
          appearance: 'interaction-only',
          theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
          language: lang,
          callback: (value: string) => setToken(value),
          'expired-callback': () => setToken(''),
          'error-callback': () => setToken(''),
        });
      })
      .catch(() => {
        // Skrypt Turnstile zablokowany - wysylka i tak sie nie powiedzie, formularz pokaze bledy z mailem/telefonem.
      });
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
    // Widget renderujemy raz - jezyk po hydracji nie wymaga ponownego renderu.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Weryfikacja Turnstile skonczyla sie po kliknieciu "Wyslij" - chowamy komunikat, mozna wyslac ponownie.
  useEffect(() => {
    if (token && status === 'verifying') setStatus('idle');
  }, [token, status]);

  const subjectOptions = [
    { value: 'clusters', label: t(lang, 'contact.subjectClusters') },
    { value: 'hvac', label: t(lang, 'contact.subjectHVAC') },
    { value: 'multimedia', label: t(lang, 'contact.subjectMultimedia') },
    { value: 'testing', label: t(lang, 'contact.subjectTesting') },
    { value: 'other', label: t(lang, 'contact.subjectOther') },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    if (!token) {
      setStatus('verifying');
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const subjectValue = String(data.get('subject') || '');

    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site: isLocal ? 'alpatechs-test' : 'alpatechs',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          subject: subjectOptions.find((opt) => opt.value === subjectValue)?.label || subjectValue,
          message: data.get('message'),
          website: data.get('website'),
          lang,
          page: window.location.href,
          elapsed: Date.now() - mountedAt.current,
          token,
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean };
      if (!res.ok || !body.ok) throw new Error('send failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
      // Token Turnstile jest jednorazowy - po nieudanej probie potrzebny nowy.
      setToken('');
      if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
    }
  };

  const inputClasses =
    'w-full bg-section border border-border-custom rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon/30 transition-colors text-sm';

  const labelClasses = 'block text-sm font-medium text-text-secondary mb-1.5';

  if (status === 'sent') {
    return (
      <div role="status" className="rounded-xl border border-neon/30 bg-neon/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neon/15 text-neon">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-text-primary mb-2">{t(lang, 'contact.sentTitle')}</h2>
        <p className="text-text-secondary mb-6">{t(lang, 'contact.sentText')}</p>
        <button
          type="button"
          onClick={() => {
            mountedAt.current = Date.now();
            setStatus('idle');
            if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
          }}
          className="text-sm font-semibold text-neon hover:text-neon-light transition-colors"
        >
          {t(lang, 'contact.sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="cf-name" className={labelClasses}>{t(lang, 'contact.nameLabel')}</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          maxLength={200}
          autoComplete="name"
          placeholder={t(lang, 'contact.namePlaceholder')}
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className={labelClasses}>{t(lang, 'contact.emailLabel')}</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="email@example.com"
          className={inputClasses}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cf-phone" className={labelClasses}>{t(lang, 'contact.phoneLabel')}</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          maxLength={50}
          autoComplete="tel"
          placeholder={t(lang, 'contact.phonePlaceholder')}
          className={inputClasses}
        />
      </div>

      {/* Subject - Project Type */}
      <div>
        <label htmlFor="cf-subject" className={labelClasses}>{t(lang, 'contact.subjectLabel')}</label>
        <select id="cf-subject" name="subject" required className={inputClasses}>
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
        <label htmlFor="cf-message" className={labelClasses}>{t(lang, 'contact.messageLabel')}</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={5000}
          placeholder={t(lang, 'contact.messagePlaceholder')}
          className={inputClasses + ' resize-none'}
        />
      </div>

      {/* Honeypot - niewidoczne dla ludzi, boty je wypelniaja */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Turnstile (Cloudflare) - pokazuje sie tylko, gdy potrzebna interakcja */}
      <div ref={widgetRef} />

      {status === 'verifying' && (
        <p role="alert" className="text-sm text-neon">{t(lang, 'contact.verifying')}</p>
      )}
      {status === 'error' && (
        <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {t(lang, 'contact.error')}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-neon text-[#030712] font-semibold py-3 rounded-lg hover:bg-neon-light transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? t(lang, 'contact.sending') : t(lang, 'contact.submit')}
      </button>

      <p className="text-xs leading-relaxed text-text-muted">{t(lang, 'contact.privacy')}</p>
    </form>
  );
}
