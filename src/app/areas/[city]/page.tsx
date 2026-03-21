import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICE_AREAS, SERVICES, SITE_CONFIG } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, generateLocalBusinessSchema, generateFAQSchema } from "@/lib/seo";

async function getAreaContent(slug: string) {
  try {
    const { AREA_CONTENT } = await import("@/content/areas");
    return AREA_CONTENT[slug] || null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === city);
  const content = await getAreaContent(city);

  if (!area) return {};

  return generatePageMetadata({
    title: content?.metaTitle || `Cleaning Services in ${area.name}, ${area.province} | Urban Sparkle Cleaners`,
    description:
      content?.metaDescription ||
      `Professional cleaning services in ${area.name}, ON. Residential & commercial cleaning, eco-friendly products. Call (647) 460-7008 for a free estimate.`,
    path: `/areas/${city}`,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === city);
  if (!area) notFound();

  const content = await getAreaContent(city);
  const nearbyAreas = area.nearbyAreas
    .map((slug) => SERVICE_AREAS.find((a) => a.slug === slug))
    .filter(Boolean);

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema(area.name, { includeAggregateRating: false })} />
      {content?.faqs && <JsonLd data={generateFAQSchema(content.faqs)} />}

      <Breadcrumbs
        items={[
          { name: "Areas We Serve", url: "/areas" },
          { name: `${area.name}, ${area.province}`, url: `/areas/${city}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {content?.heroHeading || area.tagline}
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            {content?.heroSubheading ||
              `Trusted residential and commercial cleaning services in ${area.name}. Eco-friendly products and satisfaction guarantee.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-accent text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Book in {area.name}
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Main Content */}
          {content?.content ? (
            <div
              className="prose md:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          ) : (
            <div className="prose md:prose-lg max-w-none">
              <h2>Professional Cleaning Services in {area.name}, Ontario</h2>
              <p>
                Urban Sparkle Cleaners is your trusted cleaning partner in {area.name}, ON.
                Our professional team provides top-quality residential and commercial
                cleaning services using eco-friendly, plant-based products.
              </p>
              <p>
                Whether you need regular house cleaning, a deep clean, move-in/move-out cleaning,
                or office cleaning, our fully insured team delivers spotless results every time.
                We proudly serve {area.name} and surrounding areas with a satisfaction guarantee.
              </p>
              <p>
                Contact Urban Sparkle Cleaners today at (647) 460-7008 to book your cleaning
                service in {area.name}.
              </p>
            </div>
          )}

          {/* Services Available */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Cleaning Services Available in {area.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 p-4 border rounded-lg hover:border-primary hover:shadow transition-all"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">in {area.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Cleaning Prices in {area.name}
            </h2>
            <p className="text-gray-600 mb-2">
              Regular cleaning from <strong>$33/hour</strong> ($99 min) | Deep cleaning from <strong>$40/hour</strong>
            </p>
            <p className="text-gray-600 mb-4">Transparent pricing, no hidden fees.</p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Get Your Estimate
            </Link>
          </div>

          {/* Testimonials */}
          {content?.testimonials && content.testimonials.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What {area.name} Clients Say
              </h2>
              <div className="space-y-4">
                {content.testimonials.map((t, i) => (
                  <div key={i} className="bg-white border rounded-xl p-6">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">&ldquo;{t.text}&rdquo;</p>
                    <p className="mt-2 font-semibold text-gray-900">{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Google Map */}
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Find Us in {area.name}
              </h2>
              <div className="rounded-xl overflow-hidden border h-64 md:h-96">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${area.mapQuery}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${area.name}, Ontario`}
                />
              </div>
            </div>
          )}

          {/* FAQs */}
          {content?.faqs && content.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cleaning Services FAQ for {area.name}
              </h2>
              <div className="space-y-4">
                {content.faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-5">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Nearby Areas */}
          {nearbyAreas.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Also Serving Nearby Areas
              </h2>
              <div className="flex flex-wrap gap-3">
                {nearbyAreas.map((nearby) =>
                  nearby ? (
                    <Link
                      key={nearby.slug}
                      href={`/areas/${nearby.slug}`}
                      className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
                    >
                      {nearby.name}, {nearby.province}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
