import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_AREAS, SITE_CONFIG } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Cleaning Services Areas We Serve | Burlington, Oakville, Hamilton & Niagara | Urban Sparkle Cleaners",
  description:
    "Urban Sparkle Cleaners serves 17 cities across Southern Ontario including Burlington, Oakville, Hamilton, Niagara Falls, St. Catharines, and more. Professional cleaning near you.",
  path: "/areas",
});

const primaryAreas = ["burlington", "oakville", "hamilton", "niagara-falls", "st-catharines"];

export default function AreasPage() {
  const primary = SERVICE_AREAS.filter((a) => primaryAreas.includes(a.slug));
  const additional = SERVICE_AREAS.filter((a) => !primaryAreas.includes(a.slug));

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />

      <Breadcrumbs items={[{ name: "Areas We Serve", url: "/areas" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cleaning Services Across Southern Ontario
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We serve 17 cities across the Greater Hamilton and Niagara regions.
            Professional, eco-friendly cleaning right to your door.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Primary Areas */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Primary Service Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {primary.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group p-6 bg-white border-2 rounded-xl hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                  {area.name}, {area.province}
                </h3>
                <p className="text-sm text-gray-500">{area.tagline}</p>
                <span className="inline-block mt-3 text-primary text-sm font-medium group-hover:underline">
                  View services →
                </span>
              </Link>
            ))}
          </div>

          {/* Additional Areas */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Also Serving</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {additional.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex items-center justify-between p-4 bg-gray-50 border rounded-xl hover:border-primary hover:bg-white hover:shadow-sm transition-all"
              >
                <div>
                  <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {area.name}
                  </span>
                  {area.isNew && (
                    <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      New
                    </span>
                  )}
                  <p className="text-xs text-gray-500 mt-0.5">{area.province}</p>
                </div>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Why Choose */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Professional Cleaning, Wherever You Are
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-6">
              Whether you&apos;re in Burlington, Niagara Falls, or anywhere in between, our
              insured team brings the same quality and care to every home and office we clean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Book Your Cleaning
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Call {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
