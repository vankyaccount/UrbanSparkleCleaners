import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, TESTIMONIALS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, generateServiceSchema, generateFAQSchema } from "@/lib/seo";

// This will be populated by the content file once the background agent finishes
// For now we use a fallback
async function getServiceContent(slug: string) {
  try {
    const { SERVICE_CONTENT } = await import("@/content/services");
    return SERVICE_CONTENT[slug] || null;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = await getServiceContent(slug);
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return {};

  return generatePageMetadata({
    title: content?.metaTitle || `${service.name} | Urban Sparkle Cleaners`,
    description:
      content?.metaDescription ||
      `Professional ${service.name.toLowerCase()} services in Burlington, Oakville, Hamilton & Niagara. Eco-friendly, fully insured. Call (647) 460-7008.`,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = await getServiceContent(slug);
  const testimonial = TESTIMONIALS[Math.floor(Math.random() * TESTIMONIALS.length)];

  return (
    <>
      <JsonLd
        data={generateServiceSchema({
          name: service.name,
          description: service.shortDescription,
          slug: service.slug,
        })}
      />
      {content?.faqs && <JsonLd data={generateFAQSchema(content.faqs)} />}

      <Breadcrumbs
        items={[
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {content?.heroHeading || `Professional ${service.name}`}
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            {content?.heroSubheading || service.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-accent text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Book {service.name}
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-white/10 border-2 border-white/30 px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors"
            >
              View Pricing
            </Link>
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
              <h2>About Our {service.name} Service</h2>
              <p>{service.shortDescription}</p>
              <p>
                Urban Sparkle Cleaners provides professional {service.name.toLowerCase()} services
                across Burlington, Oakville, Hamilton, Grimsby, Stoney Creek, Ancaster, Waterdown,
                and the Niagara Region. Our fully insured, professionally trained team
                uses eco-friendly products to deliver exceptional results every time.
              </p>
              <p>
                Contact us today at (647) 460-7008 or book online to schedule your {service.name.toLowerCase()} service.
              </p>
            </div>
          )}

          {/* What's Included */}
          {content?.includes && content.includes.length > 0 && (
            <div className="mt-12 bg-surface rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What&apos;s Included
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {service.name} Pricing
            </h2>
            <p className="text-3xl font-bold text-primary mb-2">
              {content?.startingPrice || "From $90"}
            </p>
            <p className="text-gray-600 mb-4">
              Transparent pricing with no hidden fees. Get an instant estimate.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Calculate Your Price
            </Link>
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white border rounded-xl p-6 md:p-8">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 italic mb-3">&ldquo;{testimonial.text}&rdquo;</p>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.location}, ON</p>
          </div>

          {/* FAQs */}
          {content?.faqs && content.faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
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

          {/* Related Services */}
          {content?.relatedServices && content.relatedServices.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {content.relatedServices.map((relSlug) => {
                  const rel = SERVICES.find((s) => s.slug === relSlug);
                  if (!rel) return null;
                  return (
                    <Link
                      key={relSlug}
                      href={`/services/${relSlug}`}
                      className="p-4 border rounded-lg hover:border-primary hover:shadow transition-all"
                    >
                      <span className="text-2xl">{rel.icon}</span>
                      <h3 className="font-semibold text-gray-900 mt-2">{rel.name}</h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
