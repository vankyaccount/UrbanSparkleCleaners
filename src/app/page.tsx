import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceCards } from "@/components/home/ServiceCards";
import { Testimonials } from "@/components/home/Testimonials";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { CTABanner } from "@/components/home/CTABanner";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateFAQSchema } from "@/lib/seo";
import { HOME_FAQS } from "@/content/faq";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(HOME_FAQS)} />
      <Hero />
      <TrustBar />
      <ServiceCards />

      {/* Pricing Teaser */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Transparent Pricing — Starting from Just $99
          </h2>
          <p className="text-gray-600 mb-6">
            Regular cleaning from $33/hour (reg. $36/hr). Deep cleaning from $40/hour. No hidden fees.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Calculate Your Price
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* Why Choose Urban Sparkle Cleaners */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Urban Sparkle Cleaners?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing exceptional cleaning services that exceed your expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600 text-sm">Complete peace of mind with full liability coverage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable & Punctual</h3>
              <p className="text-gray-600 text-sm">We arrive on time, every time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600 text-sm">Not happy? We'll re-clean for free</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm">Safe for your family and the environment</p>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />
      <ServiceAreas />

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Submit your cleaning request and we&apos;ll respond within 24 hours. Free consultation,
                no hidden fees.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us</p>
                    <a href="tel:+16474607008" className="font-semibold text-gray-900 hover:text-primary transition-colors">
                      (647) 460-7008
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email us</p>
                    <a href="mailto:urbansparklecleaners@gmail.com" className="font-semibold text-gray-900 hover:text-primary transition-colors">
                      urbansparklecleaners@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border">
              <ContactForm source="homepage" />
            </div>
          </div>
        </div>
      </section>

      <HomeFAQ />
      <CTABanner />
    </>
  );
}
