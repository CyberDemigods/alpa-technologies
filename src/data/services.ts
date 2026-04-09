import type { ServiceInfo } from '@/lib/types';

export const services: ServiceInfo[] = [
  {
    slug: 'instrument-clusters',
    image: '/images/pcb-clusters.jpg',
    i18n: {
      pl: {
        name: 'Zestawy wskaźników',
        description: 'Projektowanie oprogramowania i płytek PCB do zestawów wskaźników samochodowych. Prędkościomierze, obrotomierze, wskaźniki paliwa i temperatury.',
      },
      en: {
        name: 'Instrument Clusters',
        description: 'Software and PCB design for automotive instrument clusters. Speedometers, tachometers, fuel and temperature gauges.',
      },
    },
  },
  {
    slug: 'hvac-controllers',
    image: '/images/hvac-controller.jpg',
    i18n: {
      pl: {
        name: 'Kontrolery HVAC',
        description: 'Panele sterowania klimatyzacją i ogrzewaniem. Projektowanie elektroniki, oprogramowania i interfejsu użytkownika.',
      },
      en: {
        name: 'HVAC Controllers',
        description: 'Climate control panels for heating and air conditioning. Electronics design, software and user interface.',
      },
    },
  },
  {
    slug: 'multimedia',
    image: '/images/multimedia-unit.jpg',
    i18n: {
      pl: {
        name: 'Systemy multimedialne',
        description: 'Head unity i systemy infotainment. Projekt PCB, oprogramowanie, integracja ekranów dotykowych i systemów nawigacji.',
      },
      en: {
        name: 'Multimedia Systems',
        description: 'Head units and infotainment systems. PCB design, software, touchscreen and navigation system integration.',
      },
    },
  },
  {
    slug: 'testing',
    image: '/images/testing-equipment.jpg',
    i18n: {
      pl: {
        name: 'Sprzęt testowy',
        description: 'Dedykowane testery do elektroniki samochodowej. Weryfikacja jakości zestawów wskaźników, kontrolerów HVAC i systemów multimedialnych.',
      },
      en: {
        name: 'Testing Equipment',
        description: 'Dedicated testers for automotive electronics. Quality verification of instrument clusters, HVAC controllers and multimedia systems.',
      },
    },
  },
];
