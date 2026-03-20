import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function generatePageMetadata({ title, description, path, image }: SEOProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || `${SITE_CONFIG.url}/images/og-image.jpg`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function generateLocalBusinessSchema(city?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    description: SITE_CONFIG.description,
    image: `${SITE_CONFIG.url}/images/og-default.jpg`,
    priceRange: "$$",
    areaServed: city
      ? [{ "@type": "City", name: city, "@id": `https://en.wikipedia.org/wiki/${city.replace(/ /g, "_")},_Ontario` }]
      : [
          { "@type": "City", name: "Burlington" },
          { "@type": "City", name: "Oakville" },
          { "@type": "City", name: "Hamilton" },
          { "@type": "City", name: "Grimsby" },
          { "@type": "City", name: "Stoney Creek" },
          { "@type": "City", name: "Ancaster" },
          { "@type": "City", name: "Waterdown" },
          { "@type": "City", name: "Niagara Falls" },
          { "@type": "City", name: "Niagara-on-the-Lake" },
          { "@type": "City", name: "St. Catharines" },
          { "@type": "City", name: "Welland" },
          { "@type": "City", name: "Thorold" },
        ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
      bestRating: "5",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [SITE_CONFIG.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Regular Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Move-In/Move-Out Cleaning" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Cleaning" } },
      ],
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "State",
      name: "Ontario",
    },
  };
}
