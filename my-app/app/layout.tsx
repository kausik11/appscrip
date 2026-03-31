import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import "./main.css";

const displayFont = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Metta Muse Storefront",
    template: "%s | Metta Muse",
  },
  description:
    "Browse the Metta Muse product catalog with curated beauty, fragrance, furniture, and grocery picks.",
  applicationName: "Metta Muse",
  keywords: [
    "metta muse",
    "product catalog",
    "beauty products",
    "fragrances",
    "furniture",
    "groceries",
    "online store",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
