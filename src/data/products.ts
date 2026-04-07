import type { Product } from '@/lib/types';

export const products: Product[] = [
  // ── INSTRUMENT CLUSTERS (kompletne zestawy) ────────
  {
    slug: 'instrument-cluster-vw-golf-5-1k',
    sku: 'RC-CL-001',
    category: 'clusters',
    brand: 'Volkswagen',
    compatibility: ['VW Golf V (2003-2009)', 'VW Jetta III (2005-2010)'],
    badge: 'bestseller',
    specs: {
      'OEM': '1K0 920 860 / 1K0 920 874',
      'Typ wyświetlacza': 'LCD monochromatyczny',
      'Jednostka': 'km/h',
      'Paliwo': 'Benzyna / Diesel',
      'Napięcie': '12V',
      'Złącze': '32-pin',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Zestaw wskaźników VW Golf V (1K)',
        shortDesc: 'Kompletny instrument cluster do VW Golf V. Wersja benzynowa i diesel, km/h.',
        description: 'Kompletny zestaw wskaźników (instrument cluster) do Volkswagen Golf V (1K). Dostępna wersja benzynowa i diesel z wyświetlaczem LCD, skala w km/h. Produkt nowy, fabrycznie zapakowany. Wymaga kodowania po montażu (VCDS/ODIS).',
      },
      en: {
        name: 'Instrument Cluster VW Golf V (1K)',
        shortDesc: 'Complete instrument cluster for VW Golf V. Petrol and diesel versions, km/h.',
        description: 'Complete instrument cluster for Volkswagen Golf V (1K). Available in petrol and diesel versions with LCD display, km/h scale. Brand new, factory sealed. Requires coding after installation (VCDS/ODIS).',
      },
      fa: {
        name: '\u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0641\u0648\u0644\u06a9\u0633 \u0648\u0627\u06af\u0646 \u06af\u0644\u0641 V',
        shortDesc: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0628\u0631\u0627\u06cc \u06af\u0644\u0641 V. \u0646\u0633\u062e\u0647 \u0628\u0646\u0632\u06cc\u0646\u06cc \u0648 \u062f\u06cc\u0632\u0644.',
        description: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0628\u0631\u0627\u06cc \u0641\u0648\u0644\u06a9\u0633 \u0648\u0627\u06af\u0646 \u06af\u0644\u0641 V. \u0646\u0633\u062e\u0647 \u0628\u0646\u0632\u06cc\u0646\u06cc \u0648 \u062f\u06cc\u0632\u0644 \u0628\u0627 \u0646\u0645\u0627\u06cc\u0634\u06af\u0631 LCD. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'instrument-cluster-bmw-e90-e91',
    sku: 'RC-CL-002',
    category: 'clusters',
    brand: 'BMW',
    compatibility: ['BMW E90 (2005-2012)', 'BMW E91 (2005-2012)'],
    badge: 'new',
    specs: {
      'OEM': '6 211 350 / 6 974 649',
      'Typ wyświetlacza': 'LCD monochromatyczny',
      'Jednostka': 'km/h',
      'Paliwo': 'Benzyna',
      'Napięcie': '12V',
      'Złącze': '32-pin',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Zestaw wskaźników BMW E90 / E91',
        shortDesc: 'Kompletny instrument cluster do BMW serii 3. Wersja benzynowa, km/h.',
        description: 'Kompletny zestaw wskaźników do BMW serii 3 (E90/E91). Wersja benzynowa z wyświetlaczem LCD, skala km/h. Produkt nowy. Wymaga kodowania BMW ISTA/INPA po montażu.',
      },
      en: {
        name: 'Instrument Cluster BMW E90 / E91',
        shortDesc: 'Complete instrument cluster for BMW 3 Series. Petrol version, km/h.',
        description: 'Complete instrument cluster for BMW 3 Series (E90/E91). Petrol version with LCD display, km/h scale. Brand new. Requires coding via BMW ISTA/INPA after installation.',
      },
      fa: {
        name: '\u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 BMW E90 / E91',
        shortDesc: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0628\u0631\u0627\u06cc BMW \u0633\u0631\u06cc 3. \u0646\u0633\u062e\u0647 \u0628\u0646\u0632\u06cc\u0646\u06cc.',
        description: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 BMW \u0633\u0631\u06cc 3. \u0646\u0633\u062e\u0647 \u0628\u0646\u0632\u06cc\u0646\u06cc \u0628\u0627 LCD. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'instrument-cluster-audi-a3-8p',
    sku: 'RC-CL-003',
    category: 'clusters',
    brand: 'Audi',
    compatibility: ['Audi A3 8P (2003-2013)', 'Audi A3 Sportback (2004-2013)'],
    specs: {
      'OEM': '8P0 920 930 / 8P0 920 931',
      'Typ wyświetlacza': 'LCD FIS',
      'Jednostka': 'km/h',
      'Paliwo': 'Benzyna / Diesel',
      'Napięcie': '12V',
      'Złącze': '32-pin',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Zestaw wskaźników Audi A3 8P',
        shortDesc: 'Kompletny instrument cluster do Audi A3 8P z wyświetlaczem FIS.',
        description: 'Kompletny zestaw wskaźników do Audi A3 (8P). Z wyświetlaczem FIS (Full Information System), skala km/h. Kompatybilny z 2003-2013. Nowy, wymaga kodowania VCDS.',
      },
      en: {
        name: 'Instrument Cluster Audi A3 8P',
        shortDesc: 'Complete instrument cluster for Audi A3 8P with FIS display.',
        description: 'Complete instrument cluster for Audi A3 (8P). With FIS (Full Information System) display, km/h scale. Compatible with 2003-2013. New, requires VCDS coding.',
      },
      fa: {
        name: '\u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0622\u0626\u0648\u062f\u06cc A3 8P',
        shortDesc: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0628\u0631\u0627\u06cc \u0622\u0626\u0648\u062f\u06cc A3 8P \u0628\u0627 \u0646\u0645\u0627\u06cc\u0634\u06af\u0631 FIS.',
        description: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0622\u0626\u0648\u062f\u06cc A3. \u0628\u0627 \u0646\u0645\u0627\u06cc\u0634\u06af\u0631 FIS. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'instrument-cluster-skoda-octavia-1z',
    sku: 'RC-CL-004',
    category: 'clusters',
    brand: 'Skoda',
    compatibility: ['Skoda Octavia II (2004-2013)', 'Skoda Yeti (2009-2017)'],
    specs: {
      'OEM': '1Z0 920 810 / 1Z0 920 840',
      'Typ wyświetlacza': 'LCD Maxi-DOT',
      'Jednostka': 'km/h',
      'Napięcie': '12V',
      'Złącze': '32-pin',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Zestaw wskaźników Skoda Octavia II (1Z)',
        shortDesc: 'Kompletny instrument cluster do Skoda Octavia II z Maxi-DOT.',
        description: 'Kompletny zestaw wskaźników do Skoda Octavia II (1Z). Wyświetlacz Maxi-DOT, skala km/h. Kompatybilny z Octavia 2004-2013 i Yeti 2009-2017. Nowy, kodowanie VCDS.',
      },
      en: {
        name: 'Instrument Cluster Skoda Octavia II (1Z)',
        shortDesc: 'Complete instrument cluster for Skoda Octavia II with Maxi-DOT.',
        description: 'Complete instrument cluster for Skoda Octavia II (1Z). Maxi-DOT display, km/h scale. Compatible with Octavia 2004-2013 and Yeti 2009-2017. New, VCDS coding required.',
      },
      fa: {
        name: '\u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0627\u0634\u06a9\u0648\u062f\u0627 \u0627\u06a9\u062a\u0627\u0648\u06cc\u0627 II',
        shortDesc: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0628\u0631\u0627\u06cc \u0627\u0634\u06a9\u0648\u062f\u0627 \u0627\u06a9\u062a\u0627\u0648\u06cc\u0627 II.',
        description: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0627\u0634\u06a9\u0648\u062f\u0627 \u0627\u06a9\u062a\u0627\u0648\u06cc\u0627 II. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },

  // ── PCB BOARDS (płytki drukowane) ─────────────────
  {
    slug: 'pcb-vw-golf-5-cluster',
    sku: 'RC-PCB-001',
    category: 'pcb',
    brand: 'Volkswagen',
    compatibility: ['VW Golf V (2003-2009)', 'VW Jetta III (2005-2010)', 'VW Touran (2003-2010)'],
    badge: 'bestseller',
    specs: {
      'Typ': 'Goła płytka PCB (bez komponentów)',
      'Materiał': 'FR-4 laminat',
      'Warstwy': '2',
      'Grubość': '1.6mm',
      'Wykończenie': 'HASL (ołowiowe)',
      'Pasuje do OEM': '1K0 920 860 / 1K0 920 874',
      'Pady': 'Silniczki krokowe x4, LED x12, złącze taśmowe',
    },
    i18n: {
      pl: {
        name: 'Płytka PCB zestawu wskaźników VW Golf V / Jetta',
        shortDesc: 'Goła płytka drukowana do instrument cluster VW Golf V, Jetta, Touran. FR-4, 2 warstwy.',
        description: 'Płytka drukowana (PCB) do zestawu wskaźników Volkswagen Golf V (1K), Jetta III, Touran. Goła płytka bez zamontowanych komponentów - przeznaczona do samodzielnego montażu silniczków krokowych, diod LED, wyświetlacza LCD i złączy. Materiał FR-4, 2 warstwy, wykończenie HASL. Idealna jako zamiennik uszkodzonej oryginalnej płytki.',
      },
      en: {
        name: 'PCB Board for VW Golf V / Jetta Instrument Cluster',
        shortDesc: 'Bare PCB board for VW Golf V, Jetta, Touran instrument cluster. FR-4, 2 layers.',
        description: 'Printed circuit board (PCB) for Volkswagen Golf V (1K), Jetta III, Touran instrument cluster. Bare board without mounted components - designed for self-assembly of stepper motors, LEDs, LCD display and connectors. FR-4 material, 2 layers, HASL finish. Ideal replacement for damaged original board.',
      },
      fa: {
        name: '\u0628\u0631\u062f PCB \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u06af\u0644\u0641 V',
        shortDesc: '\u0628\u0631\u062f \u062e\u0627\u0644\u06cc PCB \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u06af\u0644\u0641 V\u060c \u062c\u062a\u0627\u060c \u062a\u0648\u0631\u0627\u0646.',
        description: '\u0628\u0631\u062f \u0645\u062f\u0627\u0631 \u0686\u0627\u067e\u06cc \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u06af\u0644\u0641 V. \u0628\u0631\u062f \u062e\u0627\u0644\u06cc \u0628\u062f\u0648\u0646 \u0642\u0637\u0639\u0627\u062a. \u0645\u0646\u0627\u0633\u0628 \u0628\u0631\u0627\u06cc \u062a\u0639\u0645\u06cc\u0631.',
      },
    },
  },
  {
    slug: 'pcb-bmw-e90-cluster',
    sku: 'RC-PCB-002',
    category: 'pcb',
    brand: 'BMW',
    compatibility: ['BMW E90 (2005-2012)', 'BMW E91 (2005-2012)', 'BMW E92 (2006-2013)'],
    badge: 'new',
    specs: {
      'Typ': 'Goła płytka PCB (bez komponentów)',
      'Materiał': 'FR-4 laminat',
      'Warstwy': '4',
      'Grubość': '1.6mm',
      'Wykończenie': 'ENIG (złoto)',
      'Pasuje do OEM': '6 211 350 / 6 974 649',
      'Pady': 'Silniczki krokowe x5, LED x18, FPC złącze',
    },
    i18n: {
      pl: {
        name: 'Płytka PCB zestawu wskaźników BMW E90 / E91 / E92',
        shortDesc: 'Goła płytka drukowana do instrument cluster BMW serii 3 (E9x). FR-4, 4 warstwy, ENIG.',
        description: 'Płytka drukowana (PCB) do zestawu wskaźników BMW serii 3 (E90/E91/E92). Goła płytka bez komponentów, 4 warstwy, wykończenie ENIG (złoto) dla lepszej lutowności. Pady na 5 silniczków krokowych, 18 diod LED, złącze FPC do wyświetlacza. Zamiennik oryginalnej płytki Siemens/VDO.',
      },
      en: {
        name: 'PCB Board for BMW E90 / E91 / E92 Instrument Cluster',
        shortDesc: 'Bare PCB board for BMW 3 Series (E9x) cluster. FR-4, 4 layers, ENIG finish.',
        description: 'Printed circuit board (PCB) for BMW 3 Series (E90/E91/E92) instrument cluster. Bare board without components, 4 layers, ENIG (gold) finish for better solderability. Pads for 5 stepper motors, 18 LEDs, FPC connector for display. Replacement for original Siemens/VDO board.',
      },
      fa: {
        name: '\u0628\u0631\u062f PCB \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 BMW E90',
        shortDesc: '\u0628\u0631\u062f \u062e\u0627\u0644\u06cc PCB \u0628\u0631\u0627\u06cc BMW \u0633\u0631\u06cc 3. \u06f4 \u0644\u0627\u06cc\u0647\u060c ENIG.',
        description: '\u0628\u0631\u062f \u0645\u062f\u0627\u0631 \u0686\u0627\u067e\u06cc \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 BMW \u0633\u0631\u06cc 3. \u0628\u062f\u0648\u0646 \u0642\u0637\u0639\u0627\u062a\u060c \u06f4 \u0644\u0627\u06cc\u0647. \u062c\u0627\u06cc\u06af\u0632\u06cc\u0646 \u0628\u0631\u062f Siemens/VDO.',
      },
    },
  },
  {
    slug: 'pcb-audi-a4-b7-cluster',
    sku: 'RC-PCB-003',
    category: 'pcb',
    brand: 'Audi',
    compatibility: ['Audi A4 B7 (2004-2008)', 'Audi A4 Avant B7 (2004-2008)'],
    specs: {
      'Typ': 'Goła płytka PCB (bez komponentów)',
      'Materiał': 'FR-4 laminat',
      'Warstwy': '2',
      'Grubość': '1.6mm',
      'Wykończenie': 'HASL (bezołowiowe)',
      'Pasuje do OEM': '8E0 920 900 / 8E0 920 901',
      'Pady': 'Silniczki krokowe x4, LED x14, złącze 32-pin',
    },
    i18n: {
      pl: {
        name: 'Płytka PCB zestawu wskaźników Audi A4 B7',
        shortDesc: 'Goła płytka drukowana do instrument cluster Audi A4 B7. FR-4, bezołowiowe.',
        description: 'Płytka PCB do zestawu wskaźników Audi A4 B7 (2004-2008). Goła płytka FR-4, 2 warstwy, wykończenie HASL bezołowiowe. Kompatybilna z wersjami benzynowymi i diesel. Pady na 4 silniczki krokowe, 14 LED, złącze 32-pin.',
      },
      en: {
        name: 'PCB Board for Audi A4 B7 Instrument Cluster',
        shortDesc: 'Bare PCB board for Audi A4 B7 cluster. FR-4, lead-free.',
        description: 'PCB board for Audi A4 B7 (2004-2008) instrument cluster. Bare FR-4 board, 2 layers, lead-free HASL finish. Compatible with petrol and diesel versions. Pads for 4 stepper motors, 14 LEDs, 32-pin connector.',
      },
      fa: {
        name: '\u0628\u0631\u062f PCB \u0622\u0626\u0648\u062f\u06cc A4 B7',
        shortDesc: '\u0628\u0631\u062f \u062e\u0627\u0644\u06cc PCB \u0628\u0631\u0627\u06cc \u0622\u0626\u0648\u062f\u06cc A4 B7. \u0628\u062f\u0648\u0646 \u0633\u0631\u0628.',
        description: '\u0628\u0631\u062f PCB \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0622\u0626\u0648\u062f\u06cc A4 B7. \u0628\u0631\u062f FR-4\u060c \u06f2 \u0644\u0627\u06cc\u0647. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'pcb-opel-astra-h-cluster',
    sku: 'RC-PCB-004',
    category: 'pcb',
    brand: 'Opel',
    compatibility: ['Opel Astra H (2004-2010)', 'Opel Zafira B (2005-2014)'],
    badge: 'new',
    specs: {
      'Typ': 'Goła płytka PCB (bez komponentów)',
      'Materiał': 'FR-4 laminat',
      'Warstwy': '2',
      'Grubość': '1.2mm',
      'Wykończenie': 'HASL',
      'Pasuje do OEM': '13 216 684 / 13 267 542',
      'Pady': 'Silniczki krokowe x4, LED x10, wyświetlacz TFT',
    },
    i18n: {
      pl: {
        name: 'Płytka PCB zestawu wskaźników Opel Astra H / Zafira B',
        shortDesc: 'Goła płytka drukowana do instrument cluster Opel Astra H i Zafira B.',
        description: 'Płytka PCB do zestawu wskaźników Opel Astra H / Zafira B. Goła płytka FR-4, 2 warstwy. Kompatybilna z wyświetlaczem TFT kolorowym. Pady na 4 silniczki krokowe i 10 diod LED.',
      },
      en: {
        name: 'PCB Board for Opel Astra H / Zafira B Instrument Cluster',
        shortDesc: 'Bare PCB for Opel Astra H and Zafira B instrument cluster.',
        description: 'PCB board for Opel Astra H / Zafira B instrument cluster. Bare FR-4 board, 2 layers. Compatible with color TFT display. Pads for 4 stepper motors and 10 LEDs.',
      },
      fa: {
        name: '\u0628\u0631\u062f PCB \u0627\u067e\u0644 \u0622\u0633\u062a\u0631\u0627 H',
        shortDesc: '\u0628\u0631\u062f \u062e\u0627\u0644\u06cc PCB \u0628\u0631\u0627\u06cc \u0627\u067e\u0644 \u0622\u0633\u062a\u0631\u0627 H \u0648 \u0632\u0627\u0641\u06cc\u0631\u0627 B.',
        description: '\u0628\u0631\u062f PCB \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0627\u067e\u0644 \u0622\u0633\u062a\u0631\u0627 H / \u0632\u0627\u0641\u06cc\u0631\u0627 B. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'pcb-peugeot-307-cluster',
    sku: 'RC-PCB-005',
    category: 'pcb',
    brand: 'Peugeot',
    compatibility: ['Peugeot 307 (2001-2008)', 'Peugeot 407 (2004-2011)'],
    specs: {
      'Typ': 'Goła płytka PCB (bez komponentów)',
      'Materiał': 'FR-4 laminat',
      'Warstwy': '2',
      'Grubość': '1.6mm',
      'Wykończenie': 'HASL',
      'Pasuje do OEM': '6106 GP / 6106 GQ',
      'Pady': 'Silniczki krokowe x4, LED x8, wyświetlacz LCD',
    },
    i18n: {
      pl: {
        name: 'Płytka PCB zestawu wskaźników Peugeot 307 / 407',
        shortDesc: 'Goła płytka drukowana do instrument cluster Peugeot 307 i 407.',
        description: 'Płytka PCB do zestawu wskaźników Peugeot 307 / 407. FR-4, 2 warstwy. Pady na 4 silniczki krokowe, 8 LED, złącze wyświetlacza LCD.',
      },
      en: {
        name: 'PCB Board for Peugeot 307 / 407 Instrument Cluster',
        shortDesc: 'Bare PCB for Peugeot 307 and 407 instrument cluster.',
        description: 'PCB board for Peugeot 307 / 407 instrument cluster. FR-4, 2 layers. Pads for 4 stepper motors, 8 LEDs, LCD display connector.',
      },
      fa: {
        name: '\u0628\u0631\u062f PCB \u067e\u0698\u0648 307 / 407',
        shortDesc: '\u0628\u0631\u062f \u062e\u0627\u0644\u06cc PCB \u0628\u0631\u0627\u06cc \u067e\u0698\u0648 307 \u0648 407.',
        description: '\u0628\u0631\u062f PCB \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u067e\u0698\u0648 307 / 407. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },

  // ── ECU MODULES ───────────────────────────────────
  {
    slug: 'ecu-vw-golf-5-bosch',
    sku: 'RC-ECU-001',
    category: 'ecu',
    brand: 'Volkswagen',
    compatibility: ['VW Golf V (2003-2009)', 'VW Passat B6 (2005-2010)'],
    badge: 'bestseller',
    specs: {
      'OEM': '03C 906 056 / 0 261 S04 859',
      'Producent': 'Bosch MED17.5',
      'Paliwo': 'Benzyna 1.4 TSI',
      'Napięcie': '12V',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Sterownik ECU Bosch MED17.5 VW Golf V 1.4 TSI',
        shortDesc: 'Nowy sterownik silnika Bosch MED17.5 do VW Golf V / Passat B6 1.4 TSI.',
        description: 'Sterownik silnika (ECU) Bosch MED17.5 do Volkswagen Golf V i Passat B6 z silnikiem 1.4 TSI. Produkt nowy, wymaga programowania i kodowania IMMO po montażu.',
      },
      en: {
        name: 'ECU Bosch MED17.5 VW Golf V 1.4 TSI',
        shortDesc: 'New engine ECU Bosch MED17.5 for VW Golf V / Passat B6 1.4 TSI.',
        description: 'Engine control unit (ECU) Bosch MED17.5 for VW Golf V and Passat B6 with 1.4 TSI engine. Brand new, requires programming and IMMO coding after installation.',
      },
      fa: {
        name: 'ECU Bosch MED17.5 \u06af\u0644\u0641 V',
        shortDesc: '\u0645\u0627\u0698\u0648\u0644 ECU \u0628\u0648\u0634 \u0628\u0631\u0627\u06cc \u06af\u0644\u0641 V / \u067e\u0627\u0633\u0627\u062a B6.',
        description: '\u0645\u0627\u0698\u0648\u0644 \u06a9\u0646\u062a\u0631\u0644 \u0645\u0648\u062a\u0648\u0631 Bosch MED17.5 \u0628\u0631\u0627\u06cc \u06af\u0644\u0641 V \u0648 \u067e\u0627\u0633\u0627\u062a B6 \u0628\u0627 \u0645\u0648\u062a\u0648\u0631 1.4 TSI. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'bcm-skoda-octavia-2',
    sku: 'RC-ECU-002',
    category: 'ecu',
    brand: 'Skoda',
    compatibility: ['Skoda Octavia II (2004-2013)', 'VW Golf V (2003-2009)'],
    specs: {
      'OEM': '1K0 937 087 / 1K0 937 125',
      'Producent': 'Delphi',
      'Typ': 'Moduł komfortu BCM',
      'Napięcie': '12V',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Moduł komfortu BCM Skoda Octavia II / VW Golf V',
        shortDesc: 'Nowy moduł komfortu (Body Control Module) do Skoda Octavia II i VW Golf V.',
        description: 'Moduł komfortu BCM (Body Control Module) do Skoda Octavia II i VW Golf V. Steruje centralnym zamkiem, oświetleniem wewnętrznym, wycieraczkami. Nowy, wymaga kodowania VCDS.',
      },
      en: {
        name: 'BCM Body Control Module Skoda Octavia II / VW Golf V',
        shortDesc: 'New Body Control Module for Skoda Octavia II and VW Golf V.',
        description: 'BCM (Body Control Module) for Skoda Octavia II and VW Golf V. Controls central locking, interior lighting, wipers. New, requires VCDS coding.',
      },
      fa: {
        name: '\u0645\u0627\u0698\u0648\u0644 BCM \u0627\u0634\u06a9\u0648\u062f\u0627 \u0627\u06a9\u062a\u0627\u0648\u06cc\u0627 II',
        shortDesc: '\u0645\u0627\u0698\u0648\u0644 \u06a9\u0646\u062a\u0631\u0644 \u0628\u062f\u0646\u0647 \u0628\u0631\u0627\u06cc \u0627\u0634\u06a9\u0648\u062f\u0627 \u0627\u06a9\u062a\u0627\u0648\u06cc\u0627 II.',
        description: '\u0645\u0627\u0698\u0648\u0644 BCM \u0628\u0631\u0627\u06cc \u0627\u0634\u06a9\u0648\u062f\u0627 \u0627\u06a9\u062a\u0627\u0648\u06cc\u0627 II \u0648 \u06af\u0644\u0641 V. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'abs-module-bmw-f30',
    sku: 'RC-ECU-003',
    category: 'ecu',
    brand: 'BMW',
    compatibility: ['BMW F30 (2012-2019)', 'BMW F31 (2012-2019)'],
    specs: {
      'OEM': '3451 6 862 246 / 3452 6 862 247',
      'Producent': 'Bosch / Continental',
      'Typ': 'Sterownik ABS/DSC',
      'Napięcie': '12V',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Moduł ABS/DSC BMW F30 / F31',
        shortDesc: 'Nowy sterownik ABS/DSC do BMW serii 3 (F30/F31).',
        description: 'Sterownik modułu ABS/DSC do BMW serii 3 (F30/F31). Produkt nowy, kompatybilny z benzyną i diesel. Wymaga kalibracji po montażu.',
      },
      en: {
        name: 'ABS/DSC Module BMW F30 / F31',
        shortDesc: 'New ABS/DSC controller for BMW 3 Series (F30/F31).',
        description: 'ABS/DSC module controller for BMW 3 Series (F30/F31). Brand new, compatible with petrol and diesel. Requires calibration after installation.',
      },
      fa: {
        name: '\u0645\u0627\u0698\u0648\u0644 ABS/DSC BMW F30',
        shortDesc: '\u06a9\u0646\u062a\u0631\u0644\u0631 ABS/DSC \u0628\u0631\u0627\u06cc BMW \u0633\u0631\u06cc 3.',
        description: '\u0645\u0627\u0698\u0648\u0644 ABS/DSC \u0628\u0631\u0627\u06cc BMW F30/F31. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648. \u0646\u06cc\u0627\u0632 \u0628\u0647 \u06a9\u0627\u0644\u06cc\u0628\u0631\u0627\u0633\u06cc\u0648\u0646.',
      },
    },
  },

  // ── LIGHTING ──────────────────────────────────────
  {
    slug: 'led-headlight-module-audi-a4-b8',
    sku: 'RC-LT-001',
    category: 'lighting',
    brand: 'Audi',
    compatibility: ['Audi A4 B8 (2008-2016)', 'Audi A4 Avant B8 (2008-2016)'],
    badge: 'new',
    specs: {
      'OEM': '8K0 941 597 / 8K0 941 598',
      'Typ': 'Moduł sterownika LED DRL',
      'Napięcie': '12V',
      'Moc': '21W',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Moduł sterownika LED DRL Audi A4 B8',
        shortDesc: 'Nowy moduł sterujący oświetleniem dziennym LED do Audi A4 B8.',
        description: 'Moduł sterownika LED oświetlenia dziennego (DRL) do Audi A4 B8. Steruje diodami LED w reflektorze. Produkt nowy, plug & play.',
      },
      en: {
        name: 'LED DRL Driver Module Audi A4 B8',
        shortDesc: 'New LED DRL driver module for Audi A4 B8.',
        description: 'LED daytime running light (DRL) driver module for Audi A4 B8. Controls LED diodes in headlight. Brand new, plug & play.',
      },
      fa: {
        name: '\u0645\u0627\u0698\u0648\u0644 LED DRL \u0622\u0626\u0648\u062f\u06cc A4 B8',
        shortDesc: '\u0645\u0627\u0698\u0648\u0644 \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632 LED DRL \u0628\u0631\u0627\u06cc \u0622\u0626\u0648\u062f\u06cc A4 B8.',
        description: '\u0645\u0627\u0698\u0648\u0644 \u0631\u0627\u0647\u200c\u0627\u0646\u062f\u0627\u0632 LED DRL \u0628\u0631\u0627\u06cc \u0622\u0626\u0648\u062f\u06cc A4 B8. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'led-taillight-pcb-vw-golf-7',
    sku: 'RC-LT-002',
    category: 'lighting',
    brand: 'Volkswagen',
    compatibility: ['VW Golf VII (2012-2020)'],
    specs: {
      'Typ': 'Płytka PCB lampy tylnej LED',
      'Pozycja': 'Lewa / Prawa',
      'Napięcie': '12V',
      'Diody': 'SMD LED',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Płytka PCB lampy tylnej LED VW Golf VII',
        shortDesc: 'Płytka drukowana z diodami LED do lampy tylnej VW Golf VII.',
        description: 'Płytka PCB lampy tylnej LED do Volkswagen Golf VII. Zmontowana z diodami SMD LED. Dostępna wersja lewa i prawa. Zamiennik uszkodzonej oryginalnej płytki.',
      },
      en: {
        name: 'LED Tail Light PCB Board VW Golf VII',
        shortDesc: 'PCB board with SMD LEDs for VW Golf VII tail light.',
        description: 'LED tail light PCB board for Volkswagen Golf VII. Assembled with SMD LEDs. Available in left and right versions. Replacement for damaged original board.',
      },
      fa: {
        name: '\u0628\u0631\u062f PCB \u0686\u0631\u0627\u063a \u0639\u0642\u0628 \u06af\u0644\u0641 VII',
        shortDesc: '\u0628\u0631\u062f PCB \u0628\u0627 LED \u0628\u0631\u0627\u06cc \u0686\u0631\u0627\u063a \u0639\u0642\u0628 \u06af\u0644\u0641 VII.',
        description: '\u0628\u0631\u062f PCB \u0686\u0631\u0627\u063a \u0639\u0642\u0628 LED \u06af\u0644\u0641 VII. \u0645\u0648\u0646\u062a\u0627\u0698 \u0634\u062f\u0647 \u0628\u0627 LED SMD. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },

  // ── SENSORS ───────────────────────────────────────
  {
    slug: 'stepper-motor-x27-168',
    sku: 'RC-SN-001',
    category: 'sensors',
    brand: 'Universal',
    compatibility: ['GM / Chevrolet', 'Pontiac', 'Hummer H2', 'Buick'],
    badge: 'bestseller',
    specs: {
      'Model': 'X27.168 (Switec/Juken)',
      'Typ': 'Mikrosilniczek krokowy',
      'Kąt kroku': '1/3 stopnia',
      'Napięcie': '5V',
      'Pakowanie': '4 szt. / 10 szt.',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Silniczek krokowy X27.168 do zestawów wskaźników',
        shortDesc: 'Mikrosilniczek krokowy X27.168 (Switec/Juken) do naprawy zestawów wskaźników GM.',
        description: 'Silniczek krokowy X27.168 typu Switec/Juken stosowany w zestawach wskaźników GM, Chevrolet, Pontiac, Hummer H2. Napędza wskazówki prędkościomierza, obrotomierza, wskaźnika paliwa i temperatury. Sprzedawany w zestawach 4 lub 10 szt.',
      },
      en: {
        name: 'Stepper Motor X27.168 for Instrument Clusters',
        shortDesc: 'Micro stepper motor X27.168 (Switec/Juken) for GM instrument cluster repair.',
        description: 'Stepper motor X27.168 (Switec/Juken type) used in GM, Chevrolet, Pontiac, Hummer H2 instrument clusters. Drives speedometer, tachometer, fuel and temperature gauge needles. Sold in packs of 4 or 10.',
      },
      fa: {
        name: '\u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631 X27.168',
        shortDesc: '\u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631 X27.168 \u0628\u0631\u0627\u06cc \u062a\u0639\u0645\u06cc\u0631 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 GM.',
        description: '\u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631 X27.168 \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 GM\u060c \u0634\u0648\u0631\u0648\u0644\u0647. \u0641\u0631\u0648\u0634 \u0628\u0633\u062a\u0647\u200c\u0627\u06cc.',
      },
    },
  },
  {
    slug: 'stepper-motor-x25-168',
    sku: 'RC-SN-002',
    category: 'sensors',
    brand: 'Universal',
    compatibility: ['VW', 'Audi', 'Skoda', 'Seat', 'BMW', 'Mercedes-Benz'],
    specs: {
      'Model': 'X25.168 (VID29-05P)',
      'Typ': 'Mikrosilniczek krokowy',
      'Kąt kroku': '1/12 stopnia',
      'Napięcie': '5V',
      'Pakowanie': '4 szt. / 10 szt.',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Silniczek krokowy X25.168 do zestawów wskaźników europejskich',
        shortDesc: 'Mikrosilniczek krokowy X25.168 do naprawy zestawów wskaźników VW, Audi, BMW, Mercedes.',
        description: 'Silniczek krokowy X25.168 (VID29-05P) stosowany w zestawach wskaźników europejskich marek: VW, Audi, Skoda, BMW, Mercedes. Precyzyjniejszy od X27.168 (kąt kroku 1/12 stopnia). Sprzedawany w zestawach 4 lub 10 szt.',
      },
      en: {
        name: 'Stepper Motor X25.168 for European Instrument Clusters',
        shortDesc: 'Micro stepper motor X25.168 for VW, Audi, BMW, Mercedes cluster repair.',
        description: 'Stepper motor X25.168 (VID29-05P) used in European car instrument clusters: VW, Audi, Skoda, BMW, Mercedes. More precise than X27.168 (1/12 degree step angle). Sold in packs of 4 or 10.',
      },
      fa: {
        name: '\u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631 X25.168',
        shortDesc: '\u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631 X25.168 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u0631\u0648\u0647\u0627\u06cc \u0627\u0631\u0648\u067e\u0627\u06cc\u06cc.',
        description: '\u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631 X25.168 \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u062e\u0648\u062f\u0631\u0648\u0647\u0627\u06cc \u0627\u0631\u0648\u067e\u0627\u06cc\u06cc. \u0641\u0631\u0648\u0634 \u0628\u0633\u062a\u0647\u200c\u0627\u06cc.',
      },
    },
  },

  // ── WIRING / ACCESSORIES ──────────────────────────
  {
    slug: 'cluster-repair-kit-vw-group',
    sku: 'RC-WR-001',
    category: 'wiring',
    brand: 'Universal',
    compatibility: ['VW Golf V/VI', 'Audi A3 8P', 'Skoda Octavia II', 'Seat Leon II'],
    badge: 'new',
    specs: {
      'Zawartość': '4x silniczek krokowy, 12x LED 3mm, 1x taśma FPC, pasta lutownicza',
      'Typ': 'Zestaw naprawczy',
      'Kompatybilność': 'Platforma PQ35 (VW Group)',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Zestaw naprawczy zestawu wskaźników VW Group PQ35',
        shortDesc: 'Kompletny zestaw naprawczy do instrument cluster VW Golf V/VI, Audi A3, Skoda Octavia II.',
        description: 'Zestaw naprawczy do zestawu wskaźników pojazdów z platformy PQ35 (VW Golf V/VI, Audi A3 8P, Skoda Octavia II, Seat Leon II). Zawiera 4 silniczki krokowe X25.168, 12 diod LED 3mm (biały), taśmę FPC i pastę lutowniczą. Wszystko potrzebne do naprawy martwych wskazówek i przepalonego podświetlenia.',
      },
      en: {
        name: 'Instrument Cluster Repair Kit VW Group PQ35',
        shortDesc: 'Complete repair kit for VW Golf V/VI, Audi A3, Skoda Octavia II cluster.',
        description: 'Repair kit for PQ35 platform instrument clusters (VW Golf V/VI, Audi A3 8P, Skoda Octavia II, Seat Leon II). Contains 4 X25.168 stepper motors, 12 3mm LEDs (white), FPC ribbon cable and solder paste. Everything needed to fix dead gauges and burned-out backlighting.',
      },
      fa: {
        name: '\u06a9\u06cc\u062a \u062a\u0639\u0645\u06cc\u0631 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 VW Group',
        shortDesc: '\u06a9\u06cc\u062a \u06a9\u0627\u0645\u0644 \u062a\u0639\u0645\u06cc\u0631 \u0628\u0631\u0627\u06cc \u06af\u0644\u0641 V/VI\u060c \u0622\u0626\u0648\u062f\u06cc A3.',
        description: '\u06a9\u06cc\u062a \u062a\u0639\u0645\u06cc\u0631 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u067e\u0644\u062a\u0641\u0631\u0645 PQ35. \u0634\u0627\u0645\u0644 \u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631\u060c LED \u0648 \u06a9\u0627\u0628\u0644.',
      },
    },
  },
  {
    slug: 'fpc-ribbon-cable-cluster',
    sku: 'RC-WR-002',
    category: 'wiring',
    brand: 'Universal',
    compatibility: ['VW', 'Audi', 'Skoda', 'BMW', 'Mercedes-Benz', 'Opel'],
    specs: {
      'Typ': 'Taśma elastyczna FPC/FFC',
      'Piny': '24 / 30 / 40',
      'Rozstaw': '0.5mm / 1.0mm',
      'Długość': '100mm / 150mm',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Taśma FPC/FFC do zestawów wskaźników',
        shortDesc: 'Elastyczna taśma kablowa FPC do połączenia wyświetlacza LCD z płytką PCB zestawu wskaźników.',
        description: 'Taśma elastyczna FPC/FFC stosowana do połączenia wyświetlacza LCD z płytką główną zestawu wskaźników. Dostępne różne warianty pinów (24/30/40) i rozstawów (0.5mm/1.0mm). Pasuje do większości europejskich zestawów wskaźników. Częsta przyczyna problemów z wyświetlaczem.',
      },
      en: {
        name: 'FPC/FFC Ribbon Cable for Instrument Clusters',
        shortDesc: 'Flexible FPC cable for connecting LCD display to instrument cluster PCB board.',
        description: 'FPC/FFC flexible ribbon cable for connecting LCD display to instrument cluster main board. Available in various pin counts (24/30/40) and pitches (0.5mm/1.0mm). Fits most European instrument clusters. Common cause of display issues.',
      },
      fa: {
        name: '\u06a9\u0627\u0628\u0644 FPC \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631',
        shortDesc: '\u06a9\u0627\u0628\u0644 \u0627\u0646\u0639\u0637\u0627\u0641\u200c\u067e\u0630\u06cc\u0631 FPC \u0628\u0631\u0627\u06cc \u0627\u062a\u0635\u0627\u0644 LCD.',
        description: '\u06a9\u0627\u0628\u0644 FPC/FFC \u0628\u0631\u0627\u06cc \u0627\u062a\u0635\u0627\u0644 \u0646\u0645\u0627\u06cc\u0634\u06af\u0631 LCD \u0628\u0647 \u0628\u0631\u062f \u0627\u0635\u0644\u06cc. \u0645\u062d\u0635\u0648\u0644 \u0646\u0648.',
      },
    },
  },
  {
    slug: 'obd2-elm327-diagnostic',
    sku: 'RC-WR-003',
    category: 'wiring',
    brand: 'Universal',
    compatibility: ['OBD-II (wszystkie samochody od 2001)'],
    specs: {
      'Chip': 'ELM327 v2.1',
      'Łączność': 'Bluetooth 4.0 / USB',
      'Protokoły': 'CAN, K-Line, J1850',
      'Aplikacje': 'Torque, VCDS Lite, Car Scanner',
      'Stan': 'Nowy',
    },
    i18n: {
      pl: {
        name: 'Adapter diagnostyczny OBD2 ELM327 Bluetooth',
        shortDesc: 'Adapter diagnostyczny OBD2 z chipem ELM327 v2.1, Bluetooth 4.0.',
        description: 'Adapter diagnostyczny OBD-II z chipem ELM327 v2.1. Łączność Bluetooth 4.0, kompatybilny z aplikacjami Torque, Car Scanner, VCDS Lite. Obsługuje protokoły CAN, K-Line, J1850. Pasuje do wszystkich samochodów z gniazdem OBD-II (od 2001 roku).',
      },
      en: {
        name: 'OBD2 Diagnostic Adapter ELM327 Bluetooth',
        shortDesc: 'OBD2 diagnostic adapter with ELM327 v2.1 chip, Bluetooth 4.0.',
        description: 'OBD-II diagnostic adapter with ELM327 v2.1 chip. Bluetooth 4.0, compatible with Torque, Car Scanner, VCDS Lite apps. Supports CAN, K-Line, J1850 protocols. Fits all cars with OBD-II port (2001+).',
      },
      fa: {
        name: '\u0622\u062f\u0627\u067e\u062a\u0648\u0631 \u062a\u0634\u062e\u06cc\u0635\u06cc OBD2 ELM327',
        shortDesc: '\u0622\u062f\u0627\u067e\u062a\u0648\u0631 OBD2 \u0628\u0627 \u0686\u06cc\u067e ELM327\u060c \u0628\u0644\u0648\u062a\u0648\u062b.',
        description: '\u0622\u062f\u0627\u067e\u062a\u0648\u0631 \u062a\u0634\u062e\u06cc\u0635\u06cc OBD-II \u0628\u0627 \u0686\u06cc\u067e ELM327. \u0628\u0644\u0648\u062a\u0648\u062b 4.0. \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 \u062e\u0648\u062f\u0631\u0648\u0647\u0627.',
      },
    },
  },
];
