export type Category =
  | 'clusters'
  | 'pcb'
  | 'ecu'
  | 'lighting'
  | 'sensors'
  | 'wiring';

export type Brand =
  | 'BMW'
  | 'Mercedes-Benz'
  | 'Volkswagen'
  | 'Audi'
  | 'Toyota'
  | 'Ford'
  | 'Opel'
  | 'Renault'
  | 'Skoda'
  | 'Hyundai'
  | 'Kia'
  | 'Peugeot'
  | 'Universal';

export interface Product {
  slug: string;
  sku: string;
  category: Category;
  brand: Brand;
  compatibility: string[];
  specs: Record<string, string>;
  badge?: 'new' | 'bestseller';
  i18n: {
    pl: { name: string; description: string; shortDesc: string };
    en: { name: string; description: string; shortDesc: string };
    fa: { name: string; description: string; shortDesc: string };
  };
}

export interface CategoryInfo {
  slug: Category;
  icon: string;
  productCount: number;
  i18n: {
    pl: { name: string; description: string };
    en: { name: string; description: string };
    fa: { name: string; description: string };
  };
}

export type Lang = 'pl' | 'en' | 'fa';
