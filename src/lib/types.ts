export type ServiceSlug =
  | 'instrument-clusters'
  | 'hvac-controllers'
  | 'multimedia'
  | 'testing';

export interface Service {
  slug: ServiceSlug;
  image?: string;
  i18n: {
    pl: ServiceI18n;
    en: ServiceI18n;
  };
}

export interface ServiceI18n {
  name: string;
  shortDesc: string;
  description: string;
  /** Zakres prac — lista pod nagłówkiem "Zakres prac / Scope of Work" */
  features: string[];
  /** Parametry do określenia przez klienta */
  customizationOptions: string[];
}

export interface ServiceInfo {
  slug: ServiceSlug;
  image?: string;
  i18n: {
    pl: { name: string; description: string };
    en: { name: string; description: string };
  };
}

export type Lang = 'pl' | 'en';
