import type { CategoryInfo } from '@/lib/types';

export const categories: CategoryInfo[] = [
  {
    slug: 'clusters',
    icon: 'gauge',
    productCount: 120,
    i18n: {
      pl: { name: 'Zestawy wskaźników', description: 'Kompletne zestawy wskaźników, prędkościomierze, obrotomierze do popularnych europejskich marek.' },
      en: { name: 'Instrument Clusters', description: 'Complete instrument clusters, speedometers, tachometers for popular European car brands.' },
      fa: { name: '\u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631', description: '\u0645\u062c\u0645\u0648\u0639\u0647 \u06a9\u0627\u0645\u0644 \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631\u060c \u0633\u0631\u0639\u062a\u200c\u0633\u0646\u062c \u0648 \u062f\u0648\u0631\u0633\u0646\u062c \u0628\u0631\u0627\u06cc \u0628\u0631\u0646\u062f\u0647\u0627\u06cc \u0627\u0631\u0648\u067e\u0627\u06cc\u06cc.' },
    },
  },
  {
    slug: 'pcb',
    icon: 'circuit',
    productCount: 95,
    i18n: {
      pl: { name: 'Płytki PCB', description: 'Płytki drukowane (PCB) do zestawów wskaźników i elektroniki samochodowej. Gołe płytki i zmontowane moduły.' },
      en: { name: 'PCB Boards', description: 'Printed circuit boards (PCB) for instrument clusters and automotive electronics. Bare boards and assembled modules.' },
      fa: { name: '\u0628\u0631\u062f\u0647\u0627\u06cc PCB', description: '\u0628\u0631\u062f\u0647\u0627\u06cc \u0645\u062f\u0627\u0631 \u0686\u0627\u067e\u06cc \u0628\u0631\u0627\u06cc \u0635\u0641\u062d\u0647 \u06a9\u06cc\u0644\u0648\u0645\u062a\u0631 \u0648 \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9 \u062e\u0648\u062f\u0631\u0648. \u0628\u0631\u062f\u0647\u0627\u06cc \u062e\u0627\u0644\u06cc \u0648 \u0645\u0648\u0646\u062a\u0627\u0698 \u0634\u062f\u0647.' },
    },
  },
  {
    slug: 'ecu',
    icon: 'cpu',
    productCount: 90,
    i18n: {
      pl: { name: 'Moduły elektroniczne', description: 'Sterowniki ECU, moduły komfortu, sterowniki ABS/ESP i inne podzespoły elektroniczne.' },
      en: { name: 'Electronic Modules', description: 'ECU controllers, comfort modules, ABS/ESP controllers and other electronic components.' },
      fa: { name: '\u0645\u0627\u0698\u0648\u0644\u200c\u0647\u0627\u06cc \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9\u06cc', description: '\u06a9\u0646\u062a\u0631\u0644\u0631 ECU\u060c \u0645\u0627\u0698\u0648\u0644 \u06a9\u0627\u0645\u0641\u0648\u0631\u062a\u060c \u06a9\u0646\u062a\u0631\u0644\u0631 ABS/ESP \u0648 \u0633\u0627\u06cc\u0631 \u0642\u0637\u0639\u0627\u062a \u0627\u0644\u06a9\u062a\u0631\u0648\u0646\u06cc\u06a9\u06cc.' },
    },
  },
  {
    slug: 'lighting',
    icon: 'lightbulb',
    productCount: 150,
    i18n: {
      pl: { name: 'Oświetlenie', description: 'Reflektory LED, lampy tylne, oświetlenie dzienne DRL, halogeny i zestawy oświetleniowe.' },
      en: { name: 'Lighting', description: 'LED headlights, tail lights, DRL daytime running lights, halogens and lighting kits.' },
      fa: { name: '\u0631\u0648\u0634\u0646\u0627\u06cc\u06cc', description: '\u0686\u0631\u0627\u063a\u200c\u0647\u0627\u06cc LED\u060c \u0686\u0631\u0627\u063a \u0639\u0642\u0628\u060c \u0646\u0648\u0631 \u0631\u0648\u0632 DRL\u060c \u0647\u0627\u0644\u0648\u0698\u0646 \u0648 \u06a9\u06cc\u062a\u200c\u0647\u0627\u06cc \u0631\u0648\u0634\u0646\u0627\u06cc\u06cc.' },
    },
  },
  {
    slug: 'sensors',
    icon: 'radar',
    productCount: 70,
    i18n: {
      pl: { name: 'Czujniki i sensory', description: 'Czujniki parkowania, temperatury, ciśnienia opon, sondy lambda i czujniki ABS.' },
      en: { name: 'Sensors', description: 'Parking sensors, temperature, tire pressure, lambda probes and ABS sensors.' },
      fa: { name: '\u0633\u0646\u0633\u0648\u0631\u0647\u0627', description: '\u0633\u0646\u0633\u0648\u0631 \u067e\u0627\u0631\u06a9\u060c \u062f\u0645\u0627\u060c \u0641\u0634\u0627\u0631 \u0644\u0627\u0633\u062a\u06cc\u06a9\u060c \u0633\u0646\u0633\u0648\u0631 \u0644\u0627\u0645\u0628\u062f\u0627 \u0648 \u0633\u0646\u0633\u0648\u0631 ABS.' },
    },
  },
  {
    slug: 'wiring',
    icon: 'cable',
    productCount: 60,
    i18n: {
      pl: { name: 'Akcesoria i okablowanie', description: 'Wiązki elektryczne, złącza, adaptery OBD, silniczki krokowe i akcesoria montażowe.' },
      en: { name: 'Accessories & Wiring', description: 'Wiring harnesses, connectors, OBD adapters, stepper motors and mounting accessories.' },
      fa: { name: '\u0644\u0648\u0627\u0632\u0645 \u062c\u0627\u0646\u0628\u06cc \u0648 \u0633\u06cc\u0645\u200c\u06a9\u0634\u06cc', description: '\u062f\u0633\u062a\u0647 \u0633\u06cc\u0645\u060c \u06a9\u0627\u0646\u06a9\u062a\u0648\u0631\u060c \u0622\u062f\u0627\u067e\u062a\u0648\u0631 OBD\u060c \u0645\u0648\u062a\u0648\u0631 \u0627\u0633\u062a\u067e\u0631 \u0648 \u0644\u0648\u0627\u0632\u0645 \u0646\u0635\u0628.' },
    },
  },
];
