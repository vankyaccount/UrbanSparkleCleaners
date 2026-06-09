import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  generatePageMetadata,
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { MOVE_OUT_CLEANING_CITIES } from "@/content/service-city";

export function generateStaticParams() {
  return MOVE_OUT_CLEANING_CITIES.map((p) => ({ city: p.city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const page = MOVE_OUT_CLEANING_CITIES.find((p) => p.city === city);
  if (!page) return {};
  return generatePageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/move-out-cleaning/${city}`,
  });
}

export default async function MoveOutCleaningCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const page = MOVE_OUT_CLEANING_CITIES.find((p) => p.city === city);
  if (!page) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Move-Out Cleaning Services in ${page.cityName}, ${page.province}`,
    description: page.metaDescription,
    url: `${SITE_CONFIG.url}/move-out-cleaning/${city}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: { "@type": "City", name: page.cityName },
    serviceType: "Move-Out Cleaning",
  };

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(page.cityName, { includeAggregateRating: false })} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateFAQSchema(page.faqs)} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Move-In/Move-Out Cleaning", url: "/services/move-in-move-out-cleaning" },
          { name: `Move-Out Cleaning in ${page.cityName}`, url: `/move-out-cleaning/${city}` },
        ])}
      />

      <Breadcrumbs
        items={[
          { name: "Move-In/Move-Out Cleaning", url: "/services/move-in-move-out-cleaning" },
          { name: `Move-Out Cleaning in ${page.cityName}`, url: `/move-out-cleaning/${city}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {page.heroHeading}
          </h1>
          <p className="text-lg text-blue-100 mb-6">{page.heroSubheading}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-accent text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Book Move-Out Cleaning
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16 space-y-12">

        {/* What's Included */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {page.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content */}
        <section
          className="prose md:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-800"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />

        {/* Pricing / CTA Box */}
        <section className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Get a Move-Out Cleaning Quote in {page.cityName}
          </h2>
          <p className="text-gray-600 mb-4">
            Pricing is based on property size and current condition. Contact us for a free, accurate estimate — or book online and we&apos;ll confirm the price before we arrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Book Online
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </section>

        {/* Testimonial */}
        {page.testimonial && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What {page.cityName} Clients Say</h2>
            <div className="bg-white border rounded-xl p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-3">&ldquo;{page.testimonial.text}&rdquo;</p>
              <p className="font-semibold text-gray-900">{page.testimonial.name}</p>
              <p className="text-sm text-gray-500">{page.testimonial.location}</p>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Move-Out Cleaning FAQ — {page.cityName}
          </h2>
          <div className="space-y-4">
            {page.faqs.map((faq, i) => (
              <div key={i} className="border rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Areas */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Also Serving Nearby Areas</h2>
          <div className="flex flex-wrap gap-3">
            {page.nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
              >
                {area.name}, ON
              </Link>
            ))}
            <Link
              href="/areas"
              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
            >
              View All Areas →
            </Link>
          </div>
        </section>

      </div>

      <CTABanner />
    </>
  );
}
