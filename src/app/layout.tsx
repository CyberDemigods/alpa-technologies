import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PersianParts -- Hurtowa dystrybucja części samochodowych",
  description:
    "Hurtowa dystrybucja części samochodowych i elektroniki motoryzacyjnej z importu. Płytki PCB zestawów wskaźników, akumulatory, moduły ECU, oświetlenie, czujniki i okablowanie.",
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
        <Suspense><Navbar /></Suspense>
        <main className="flex-1">{children}</main>
        <Suspense><Footer /></Suspense>
      </body>
    </html>
  );
}
