import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";
import { generateLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Urban Sparkle Cleaners | Professional Cleaning Services in Burlington, Oakville, Hamilton & Niagara",
    template: "%s | Urban Sparkle Cleaners",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "cleaning services burlington",
    "cleaning services oakville",
    "cleaners hamilton",
    "house cleaning burlington",
    "maid service oakville",
    "commercial cleaning hamilton",
    "eco friendly cleaning ontario",
    "deep cleaning burlington",
    "move in move out cleaning",
    "cleaning services niagara",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Urban Sparkle Cleaners | Professional Cleaning Services",
    description: SITE_CONFIG.description,
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Sparkle Cleaners | Professional Cleaning Services",
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_CONFIG.url },
  verification: {
    // google: "your-google-verification-code",
    // other: { "msvalidate.01": "your-bing-verification-code" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
            description: SITE_CONFIG.description,
            inLanguage: "en-CA",
          }}
        />
        <JsonLd data={generateLocalBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
