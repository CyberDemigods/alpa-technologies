import type { Lang } from './types';

export const DEFAULT_LANG: Lang = 'pl';
export const SUPPORTED_LANGS: Lang[] = ['pl', 'en'];

const translations: Record<Lang, Record<string, string>> = {
  pl: {
    // Nav
    'nav.home': 'Start',
    'nav.solutions': 'Rozwiązania',
    'nav.about': 'O nas',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Zapytaj o projekt',

    // Hero
    'hero.badge': 'Automotive Electronics Engineering',
    'hero.title.line1': 'Projektujemy elektronikę',
    'hero.title.line2': 'samochodową',
    'hero.subtitle': 'Oprogramowanie embedded, projekty PCB i kompletne rozwiązania dla zestawów wskaźników, kontrolerów HVAC i systemów multimedialnych. Każdy projekt dostosowany do specyfikacji klienta.',
    'hero.ctaPrimary': 'Zobacz rozwiązania',
    'hero.ctaSecondary': 'Opisz swój projekt',
    'hero.stat1.value': 'B2B',
    'hero.stat1.label': 'Projekty na zamówienie',
    'hero.stat2.value': 'PCB+SW',
    'hero.stat2.label': 'Hardware i software',
    'hero.stat3.value': 'OEM',
    'hero.stat3.label': 'Dla producentów',

    // Home sections
    'home.services.label': 'Nasze rozwiązania',
    'home.services.title': 'Co projektujemy',
    'home.services.subtitle': 'Kompleksowe rozwiązania elektroniki samochodowej - od koncepcji po gotowy projekt produkcyjny.',
    'home.process.title': 'Jak pracujemy',
    'home.process.step1.title': 'Specyfikacja',
    'home.process.step1.desc': 'Określasz wymagania: typ urządzenia, liczbę wskaźników, rozmiar ekranu, protokoły komunikacji i inne parametry.',
    'home.process.step2.title': 'Projekt',
    'home.process.step2.desc': 'Tworzymy schematykę, layout PCB i oprogramowanie embedded. Iterujemy projekt do akceptacji.',
    'home.process.step3.title': 'Prototyp',
    'home.process.step3.desc': 'Produkujemy prototypy, testujemy funkcjonalność i weryfikujemy zgodność ze specyfikacją.',
    'home.process.step4.title': 'Produkcja',
    'home.process.step4.desc': 'Dostarczamy kompletną dokumentację produkcyjną: pliki Gerber, BOM, firmware i instrukcje montażu.',
    'home.cta.title': 'Masz projekt do realizacji?',
    'home.cta.subtitle': 'Opisz swoje wymagania, a przygotujemy wycenę i harmonogram realizacji.',
    'home.cta.button': 'Opisz swój projekt',

    // Solutions
    'solutions.title': 'Nasze rozwiązania',
    'solutions.subtitle': 'Każdy projekt jest realizowany indywidualnie, zgodnie ze specyfikacją klienta.',
    'solutions.features': 'Zakres prac',
    'solutions.customization': 'Parametry do określenia',
    'solutions.cta': 'Zapytaj o ten projekt',
    'solutions.back': 'Wszystkie rozwiązania',
    'solutions.other': 'Inne rozwiązania',

    // About
    'about.title': 'O Alpa Technologies',
    'about.intro': 'Alpa Technologies to firma inżynierska specjalizująca się w projektowaniu elektroniki samochodowej. Dostarczamy kompletne rozwiązania - od oprogramowania embedded i projektów PCB po gotowe prototypy i dokumentację produkcyjną.',
    'about.engineering.title': 'Inżynieria',
    'about.engineering.desc': 'Zespół inżynierów z doświadczeniem w projektowaniu elektroniki samochodowej. Oprogramowanie embedded, schematy, layouty PCB, integracja systemowa.',
    'about.custom.title': 'Projekty na zamówienie',
    'about.custom.desc': 'Każdy projekt realizujemy indywidualnie. Klient określa parametry - liczbę wskaźników, rozmiar ekranu, protokoły komunikacji - a my dostarczamy gotowe rozwiązanie.',
    'about.quality.title': 'Kontrola jakości',
    'about.quality.desc': 'Projektujemy dedykowane stanowiska testowe. Każdy prototyp przechodzi weryfikację funkcjonalną przed przekazaniem dokumentacji produkcyjnej.',
    'about.global.title': 'Zasięg międzynarodowy',
    'about.global.desc': 'Współpracujemy z producentami z Europy i Bliskiego Wschodu. Biuro w Warszawie, doświadczenie w międzynarodowych projektach automotive.',
    'about.cta': 'Skontaktuj się',

    // Contact
    'contact.title': 'Opisz swój projekt',
    'contact.subtitle': 'Wypełnij formularz z opisem projektu, a skontaktujemy się w ciągu 48 godzin roboczych z wstępną wyceną.',
    'contact.nameLabel': 'Imię i nazwisko / Firma',
    'contact.namePlaceholder': 'np. Jan Kowalski / AutoParts Sp. z o.o.',
    'contact.emailLabel': 'E-mail',
    'contact.phoneLabel': 'Telefon',
    'contact.phonePlaceholder': '+48 000 000 000',
    'contact.subjectLabel': 'Typ projektu',
    'contact.subjectClusters': 'Zestawy wskaźników',
    'contact.subjectHVAC': 'Kontrolery HVAC',
    'contact.subjectMultimedia': 'Systemy multimedialne',
    'contact.subjectTesting': 'Sprzęt testowy',
    'contact.subjectOther': 'Inne',
    'contact.messageLabel': 'Opis projektu',
    'contact.messagePlaceholder': 'Opisz wymagania: typ urządzenia, parametry, ilości, termin...',
    'contact.submit': 'Wyślij zapytanie',
    'contact.sent': 'Zapytanie zostało wysłane!',
    'contact.info.title': 'Dane kontaktowe',
    'contact.info.email': 'info@alpatechs.com',
    'contact.info.phone': '+48 000 000 000',
    'contact.info.addressLabel': 'Adres',
    'contact.info.address': 'Gdańska 3/48, 01-633 Warszawa',
    'contact.hours.title': 'Godziny pracy',
    'contact.hours.weekdays': 'Pon - Pt: 9:00 - 17:00',

    // Breadcrumbs
    'breadcrumb.home': 'Start',
    'breadcrumb.solutions': 'Rozwiązania',
    'breadcrumb.contact': 'Kontakt',
    'breadcrumb.about': 'O nas',

    // Footer
    'footer.brandDesc': 'Projektowanie oprogramowania i elektroniki do zestawów wskaźników, kontrolerów HVAC i systemów multimedialnych.',
    'footer.linksTitle': 'Nawigacja',
    'footer.contactTitle': 'Kontakt',
    'footer.forgedBy': 'Forged by',
    'footer.rights': 'Wszelkie prawa zastrzeżone.',
  },

  en: {
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Start a Project',

    'hero.badge': 'Automotive Electronics Engineering',
    'hero.title.line1': 'We design automotive',
    'hero.title.line2': 'electronics',
    'hero.subtitle': 'Embedded software, PCB design and complete solutions for instrument clusters, HVAC controllers and multimedia systems. Every project tailored to client specifications.',
    'hero.ctaPrimary': 'View Solutions',
    'hero.ctaSecondary': 'Describe Your Project',
    'hero.stat1.value': 'B2B',
    'hero.stat1.label': 'Custom projects',
    'hero.stat2.value': 'PCB+SW',
    'hero.stat2.label': 'Hardware & software',
    'hero.stat3.value': 'OEM',
    'hero.stat3.label': 'For manufacturers',

    'home.services.label': 'Our Solutions',
    'home.services.title': 'What We Design',
    'home.services.subtitle': 'Comprehensive automotive electronics solutions - from concept to production-ready design.',
    'home.process.title': 'How We Work',
    'home.process.step1.title': 'Specification',
    'home.process.step1.desc': 'You define the requirements: device type, number of gauges, screen size, communication protocols and other parameters.',
    'home.process.step2.title': 'Design',
    'home.process.step2.desc': 'We create schematics, PCB layout and embedded software. We iterate the design until approval.',
    'home.process.step3.title': 'Prototype',
    'home.process.step3.desc': 'We produce prototypes, test functionality and verify compliance with specification.',
    'home.process.step4.title': 'Production',
    'home.process.step4.desc': 'We deliver complete production documentation: Gerber files, BOM, firmware and assembly instructions.',
    'home.cta.title': 'Have a project in mind?',
    'home.cta.subtitle': 'Describe your requirements and we will prepare a quote and timeline.',
    'home.cta.button': 'Describe Your Project',

    'solutions.title': 'Our Solutions',
    'solutions.subtitle': 'Every project is delivered individually, according to client specifications.',
    'solutions.features': 'Scope of Work',
    'solutions.customization': 'Parameters to Define',
    'solutions.cta': 'Inquire About This Project',
    'solutions.back': 'All Solutions',
    'solutions.other': 'Other Solutions',

    'about.title': 'About Alpa Technologies',
    'about.intro': 'Alpa Technologies is an engineering company specializing in automotive electronics design. We deliver complete solutions - from embedded software and PCB designs to ready prototypes and production documentation.',
    'about.engineering.title': 'Engineering',
    'about.engineering.desc': 'Team of engineers experienced in automotive electronics design. Embedded software, schematics, PCB layouts, system integration.',
    'about.custom.title': 'Custom Projects',
    'about.custom.desc': 'Every project is delivered individually. Client defines parameters - number of gauges, screen size, communication protocols - and we deliver a ready solution.',
    'about.quality.title': 'Quality Control',
    'about.quality.desc': 'We design dedicated test stations. Every prototype undergoes functional verification before production documentation handover.',
    'about.global.title': 'Global Reach',
    'about.global.desc': 'We work with manufacturers from Europe and the Middle East. Office in Warsaw, experience in international automotive projects.',
    'about.cta': 'Get in Touch',

    'contact.title': 'Describe Your Project',
    'contact.subtitle': 'Fill out the form with your project description and we will contact you within 48 business hours with a preliminary quote.',
    'contact.nameLabel': 'Name / Company',
    'contact.namePlaceholder': 'e.g. John Smith / AutoParts Ltd.',
    'contact.emailLabel': 'E-mail',
    'contact.phoneLabel': 'Phone',
    'contact.phonePlaceholder': '+48 000 000 000',
    'contact.subjectLabel': 'Project Type',
    'contact.subjectClusters': 'Instrument Clusters',
    'contact.subjectHVAC': 'HVAC Controllers',
    'contact.subjectMultimedia': 'Multimedia Systems',
    'contact.subjectTesting': 'Testing Equipment',
    'contact.subjectOther': 'Other',
    'contact.messageLabel': 'Project Description',
    'contact.messagePlaceholder': 'Describe requirements: device type, parameters, quantities, timeline...',
    'contact.submit': 'Send Inquiry',
    'contact.sent': 'Inquiry sent successfully!',
    'contact.info.title': 'Contact Details',
    'contact.info.email': 'info@alpatechs.com',
    'contact.info.phone': '+48 000 000 000',
    'contact.info.addressLabel': 'Address',
    'contact.info.address': 'Gdanska 3/48, 01-633 Warsaw, Poland',
    'contact.hours.title': 'Working Hours',
    'contact.hours.weekdays': 'Mon - Fri: 9:00 - 17:00',

    'breadcrumb.home': 'Home',
    'breadcrumb.solutions': 'Solutions',
    'breadcrumb.contact': 'Contact',
    'breadcrumb.about': 'About',

    'footer.brandDesc': 'Software and electronics design for instrument clusters, HVAC controllers and multimedia systems.',
    'footer.linksTitle': 'Navigation',
    'footer.contactTitle': 'Contact',
    'footer.forgedBy': 'Forged by',
    'footer.rights': 'All rights reserved.',
  },
};

export function t(lang: Lang, key: string): string {
  return translations[lang]?.[key] ?? translations['pl']?.[key] ?? key;
}

export function isRtl(lang: Lang): boolean {
  return false;
}

export function parseLang(value: string | undefined): Lang {
  if (value && SUPPORTED_LANGS.includes(value as Lang)) {
    return value as Lang;
  }
  return DEFAULT_LANG;
}
