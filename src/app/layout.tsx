import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const SITE_URL = "https://alpatechs.pl";

const TITLE = "Alpa Technologies - Projektowanie elektroniki samochodowej";

const DESCRIPTION =
  "Oprogramowanie embedded, projekty PCB i kompletne rozwiązania dla zestawów wskaźników, kontrolerów HVAC i systemów multimedialnych. Każdy projekt dostosowany do specyfikacji klienta.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Alpa Technologies",
    locale: "pl_PL",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: `${BASE_PATH}/images/og-cover.jpg`, width: 1200, height: 630 },
    ],
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/icon-192.png`, sizes: "192x192", type: "image/png" },
      { url: `${BASE_PATH}/icon-512.png`, sizes: "512x512", type: "image/png" },
    ],
    apple: `${BASE_PATH}/icon-192.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-deep text-text-primary min-h-screen flex flex-col antialiased">
        {/* Dane strukturalne dla Google - wizytowka firmy w wynikach wyszukiwania */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Alpa Technologies",
              legalName: "ALPA TECHNOLOGIES Sp. z o.o.",
              url: SITE_URL,
              logo: `${SITE_URL}/images/alpa-logo.png`,
              image: `${SITE_URL}/images/og-cover.jpg`,
              description: DESCRIPTION,
              email: "info@alpatechs.pl",
              vatID: "PL8971802551",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gdańska 3/48",
                postalCode: "01-633",
                addressLocality: "Warszawa",
                addressCountry: "PL",
              },
            }),
          }}
        />
        <Suspense><Navbar /></Suspense>
        <main className="flex-1">{children}</main>
        <Suspense><Footer /></Suspense>
      </body>
    </html>
  );
}
