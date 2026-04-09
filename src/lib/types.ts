export type ServiceSlug =
  | 'instrument-clusters'
  | 'hvac-controllers'
  | 'multimedia'
  | 'testing';

export interface Service {
  slug: ServiceSlug;
  image?: string;
  i18n: {
    pl: { name: string; shortDesc: string; description: string };
    en: { name: string; shortDesc: string; description: string };
  };
  features: string[];
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
