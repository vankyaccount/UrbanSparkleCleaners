import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { CTABanner } from "@/components/home/CTABanner";
import { generatePageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Cleaning Service Pricing Calculator | Urban Sparkle Cleaners",
  description:
    "Get an instant cleaning price estimate. Regular cleaning from $33/hr ($99 min, reg. $36/hr). Deep cleaning from $40/hr. Transparent pricing, no hidden fees. Serving Burlington, Oakville, Hamilton & Niagara.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Cleaning Services",
          provider: {
            "@type": "LocalBusiness",
            name: SITE_CONFIG.name,
          },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "99",
            highPrice: "300",
            priceCurrency: "CAD",
          },
        }}
      />
      <Breadcrumbs items={[{ name: "Pricing", url: "/pricing" }]} />
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cleaning Service Pricing Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get an instant estimate for your cleaning needs. Transparent pricing with no hidden fees.
              Regular cleaning from $33/hour (reg. $36/hr), deep cleaning from $40/hour.
            </p>
          </div>

          <PricingCalculator />

          {/* Recurring Service Discounts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Save More With Recurring Service
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Book regular cleaning and enjoy exclusive discounts. The more frequently we clean, the more you save!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Weekly */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Weekly</h3>
                  <p className="text-sm text-gray-500">Most Frequent</p>
                </div>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-primary">15%</span>
                  <span className="text-gray-600"> off</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Maximum savings
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Consistent clean home
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Same team each visit
                  </li>
                </ul>
                <a href="/book?service=regular" className="block text-center bg-white border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Get Started
                </a>
              </div>

              {/* Bi-Weekly - POPULAR */}
              <div className="bg-gradient-to-b from-primary to-primary-dark p-6 rounded-xl shadow-lg text-white relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-4 mt-2">
                  <h3 className="text-xl font-bold">Bi-Weekly</h3>
                  <p className="text-sm text-blue-200">Best Value</p>
                </div>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">10%</span>
                  <span className="text-blue-200"> off</span>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Great savings
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Balanced schedule
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Flexible timing
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Same team each visit
                  </li>
                </ul>
                <a href="/book?service=regular" className="block text-center bg-accent text-white py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Get Started
                </a>
              </div>

              {/* Monthly */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Monthly</h3>
                  <p className="text-sm text-gray-500">Flexible Option</p>
                </div>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-primary">5%</span>
                  <span className="text-gray-600"> off</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Still great value
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Maximum flexibility
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Good for occasional upkeep
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Easy to reschedule
                  </li>
                </ul>
                <a href="/book?service=regular" className="block text-center bg-white border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                  Get Started
                </a>
              </div>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              *Discounts apply to regular cleaning services. Cancel anytime. No long-term contract required.
            </p>
          </div>

          {/* Pricing Overview Table */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Pricing at a Glance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left rounded-tl-lg">Property Type</th>
                    <th className="p-4 text-center">Regular Cleaning</th>
                    <th className="p-4 text-center rounded-tr-lg">Deep Cleaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Apartment (up to 2 bed)</td>
                    <td className="p-4 text-center">From $99 ($33/hr)</td>
                    <td className="p-4 text-center">From $120 ($40/hr, min 2 technicians)</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-medium">Townhouse</td>
                    <td className="p-4 text-center">From $132 ($33/hr, min 4 hrs)</td>
                    <td className="p-4 text-center">From $160 ($40/hr, min 2 technicians)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">House (3+ bed)</td>
                    <td className="p-4 text-center">From $165 ($33/hr)</td>
                    <td className="p-4 text-center">From $200 ($40/hr, min 2 technicians)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Available Add-Ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { name: "Appliance Cleaning", price: "$30" },
                { name: "Inside Windows", price: "$30" },
                { name: "Laundry (Wash & Fold)", price: "$25" },
                { name: "Inside Fridge", price: "$25" },
                { name: "Inside Oven", price: "$25" },
                { name: "Garage Sweep", price: "$20" },
              ].map((addon) => (
                <div key={addon.name} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{addon.name}</span>
                  <span className="font-semibold text-primary">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
