import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Professional Cleaning Services | Urban Sparkle Cleaners",
  description:
    "Explore our comprehensive cleaning services: regular, deep, move-in/out, post-renovation, Airbnb, office cleaning & more. Serving Burlington, Oakville, Hamilton & Niagara Region.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Cleaning Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Urban Sparkle Cleaners offers comprehensive cleaning solutions for homes and
              businesses across Burlington, Oakville, Hamilton, and the Niagara Region.
              All services use eco-friendly products and are backed by our Satisfaction Guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl mb-4 block" aria-hidden="true">
                  {service.icon}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
