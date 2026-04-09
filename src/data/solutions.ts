import type { Service } from '@/lib/types';

export const solutions: Service[] = [
  {
    slug: 'instrument-clusters',
    image: '/images/pcb-clusters.jpg',
    features: [
      'Embedded software (firmware)',
      'PCB layout & schematic',
      'Stepper motor control',
      'LCD/TFT display integration',
      'CAN bus communication',
      'Custom gauge faces',
    ],
    customizationOptions: [
      'Liczba silniczków krokowych',
      'Rozmiar i typ wyświetlacza LCD',
      'Protokół komunikacji (CAN/LIN/K-Line)',
      'Projekt tarczy zegarów',
      'Podświetlenie LED (kolor, układ)',
      'Złącza i interfejsy',
    ],
    i18n: {
      pl: {
        name: 'Zestawy wskaźników',
        shortDesc: 'Kompletne oprogramowanie i projekt PCB do zestawów wskaźników samochodowych.',
        description: 'Projektujemy i dostarczamy kompletne rozwiązania dla zestawów wskaźników samochodowych - od oprogramowania embedded sterującego silniczkami krokowymi i wyświetlaczami, przez projekt płytki PCB, aż po integrację z szyną CAN pojazdu. Każdy projekt jest dostosowywany do specyfikacji klienta: liczby wskaźników, typu wyświetlacza, protokołu komunikacji i designu tarczy.',
      },
      en: {
        name: 'Instrument Clusters',
        shortDesc: 'Complete software and PCB design for automotive instrument clusters.',
        description: 'We design and deliver complete solutions for automotive instrument clusters - from embedded software controlling stepper motors and displays, through PCB layout, to CAN bus integration. Every project is customized to client specifications: number of gauges, display type, communication protocol and face design.',
      },
    },
  },
  {
    slug: 'hvac-controllers',
    image: '/images/hvac-controller.jpg',
    features: [
      'Embedded control software',
      'PCB design (single/multi-zone)',
      'Touch & rotary knob interface',
      'LCD/LED display integration',
      'Temperature sensor processing',
      'CAN/LIN bus integration',
    ],
    customizationOptions: [
      'Liczba stref klimatyzacji',
      'Typ interfejsu (pokrętła, dotyk, przyciski)',
      'Rozmiar i typ wyświetlacza',
      'Protokół komunikacji z ECU',
      'Design panelu frontowego',
      'Czujniki temperatury i wilgotności',
    ],
    i18n: {
      pl: {
        name: 'Kontrolery HVAC',
        shortDesc: 'Elektronika i oprogramowanie do paneli sterowania klimatyzacją samochodową.',
        description: 'Projektujemy kontrolery HVAC (ogrzewanie, wentylacja, klimatyzacja) do pojazdów. Nasze rozwiązania obejmują oprogramowanie embedded, projekt PCB, integrację interfejsu użytkownika (pokrętła, przyciski, ekran dotykowy) oraz komunikację z systemem klimatyzacji pojazdu przez CAN/LIN bus.',
      },
      en: {
        name: 'HVAC Controllers',
        shortDesc: 'Electronics and software for automotive climate control panels.',
        description: 'We design HVAC controllers (heating, ventilation, air conditioning) for vehicles. Our solutions include embedded software, PCB design, user interface integration (knobs, buttons, touchscreen) and communication with vehicle climate system via CAN/LIN bus.',
      },
    },
  },
  {
    slug: 'multimedia',
    image: '/images/multimedia-unit.jpg',
    features: [
      'Android/Linux based software',
      'PCB & enclosure design',
      'Touchscreen integration',
      'Navigation & GPS',
      'Bluetooth & phone integration',
      'Radio/DAB+ & media player',
    ],
    customizationOptions: [
      'Rozmiar ekranu dotykowego',
      'System operacyjny (Android/Linux)',
      'Obsługiwane formaty DIN',
      'Łączność (BT, WiFi, 4G)',
      'Wejścia/wyjścia audio-video',
      'Integracja z kamerą cofania',
    ],
    i18n: {
      pl: {
        name: 'Systemy multimedialne',
        shortDesc: 'Projekt i oprogramowanie head unitów i systemów infotainment.',
        description: 'Tworzymy systemy multimedialne do pojazdów - head unity z ekranami dotykowymi, nawigacją GPS, integracją Bluetooth, radiem i odtwarzaczem multimediów. Klient określa rozmiar ekranu, system operacyjny, wymagane interfejsy i funkcje, a my dostarczamy kompletny projekt PCB i oprogramowanie.',
      },
      en: {
        name: 'Multimedia Systems',
        shortDesc: 'Design and software for head units and infotainment systems.',
        description: 'We create multimedia systems for vehicles - head units with touchscreens, GPS navigation, Bluetooth integration, radio and media player. Client defines screen size, operating system, required interfaces and features, and we deliver complete PCB design and software.',
      },
    },
  },
  {
    slug: 'testing',
    image: '/images/testing-equipment.jpg',
    features: [
      'Functional testing',
      'CAN bus simulation',
      'LED & motor verification',
      'LCD display testing',
      'Automated test sequences',
      'Pass/fail reporting',
    ],
    customizationOptions: [
      'Typ testowanego urządzenia',
      'Protokoły komunikacji',
      'Scenariusze testowe',
      'Format raportów',
      'Interfejs operatora',
      'Integracja z linią produkcyjną',
    ],
    i18n: {
      pl: {
        name: 'Sprzęt testowy',
        shortDesc: 'Dedykowane testery do weryfikacji jakości elektroniki samochodowej.',
        description: 'Projektujemy dedykowane stanowiska testowe do weryfikacji jakości elektroniki samochodowej. Testery symulują środowisko pojazdu (szyna CAN, zasilanie), weryfikują działanie silniczków krokowych, wyświetlaczy, diod LED i komunikację. Automatyczne sekwencje testowe z raportowaniem pass/fail.',
      },
      en: {
        name: 'Testing Equipment',
        shortDesc: 'Dedicated testers for automotive electronics quality verification.',
        description: 'We design dedicated test stations for automotive electronics quality verification. Testers simulate vehicle environment (CAN bus, power supply), verify stepper motor operation, displays, LEDs and communication. Automated test sequences with pass/fail reporting.',
      },
    },
  },
];
