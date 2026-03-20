import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "About Urban Sparkle Cleaners | Professional Cleaning Services in Ontario",
  description:
    "Learn about Urban Sparkle Cleaners — a trusted, fully insured cleaning service serving Burlington, Oakville, Hamilton, and the Niagara Region with eco-friendly products and a satisfaction guarantee.",
  path: "/about",
});

const values = [
  {
    icon: "🌿",
    title: "Eco-Friendly First",
    description:
      "We use plant-based, non-toxic cleaning products that are safe for your family, pets, and the environment — without sacrificing cleaning power.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured & Bonded",
    description:
      "Every member of our team is thoroughly vetted, insured, and bonded. Your home and belongings are protected on every visit.",
  },
  {
    icon: "⭐",
    title: "Satisfaction Guaranteed",
    description:
      "If you're not 100% satisfied with our cleaning, contact us within 24 hours and we'll return to make it right — at no additional cost.",
  },
  {
    icon: "📍",
    title: "Local & Reliable",
    description:
      "We're a locally operated business that genuinely cares about the communities we serve across the Greater Hamilton and Niagara regions.",
  },
  {
    icon: "💬",
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. Our pricing is clear upfront so you always know exactly what you're paying before we arrive.",
  },
  {
    icon: "🏆",
    title: "Professional Standards",
    description:
      "Our cleaning teams are trained professionals who take pride in their work and consistently deliver exceptional results.",
  },
];

const stats = [
  { value: "4.9★", label: "Average Rating" },
  { value: "50+", label: "Happy Clients" },
  { value: "17", label: "Cities Served" },
  { value: "10+", label: "Services Offered" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Urban Sparkle Cleaners",
          url: `${SITE_CONFIG.url}/about`,
          description:
            "Learn about Urban Sparkle Cleaners, a professional cleaning company serving Burlington, Oakville, Hamilton, and the Niagara Region.",
        }}
      />

      <Breadcrumbs items={[{ name: "About Us", url: "/about" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Urban Sparkle Cleaners
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Professional, eco-friendly cleaning services across the Greater Hamilton and Niagara
            regions — delivered with care, consistency, and a satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Urban Sparkle Cleaners was built on a simple belief: every home and workspace
                  deserves to be clean, healthy, and welcoming — without the stress of doing it
                  yourself.
                </p>
                <p>
                  We serve families, seniors, busy professionals, Airbnb hosts, offices, and
                  businesses across Burlington, Oakville, Hamilton, and the entire Niagara Region.
                  Our team brings professionalism, reliability, and genuine care to every single job.
                </p>
                <p>
                  We only use eco-friendly, plant-based cleaning products — because we believe
                  a clean home shouldn't come at the expense of your health or the environment.
                </p>
                <p>
                  Every member of our cleaning team is fully insured, bonded, and trained to
                  the highest standards. When we enter your home or office, we treat it with the
                  same respect we'd give our own.
                </p>
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Clients Choose Us</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Fully insured and bonded team",
                  "Eco-friendly, plant-based products",
                  "Satisfaction guarantee on every clean",
                  "Flexible scheduling — weekdays & Saturdays",
                  "Transparent pricing, no hidden fees",
                  "17 cities across Hamilton & Niagara",
                  "Residential & commercial services",
                  "Trusted by 50+ happy clients",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Proudly Serving Southern Ontario
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We cover 17 cities across the Greater Hamilton and Niagara regions, bringing
            professional cleaning right to your door.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "Burlington", "Oakville", "Hamilton", "Grimsby", "Stoney Creek",
              "Ancaster", "Waterdown", "Niagara Falls", "Niagara-on-the-Lake",
              "St. Catharines", "Welland", "Thorold", "Fort Erie", "Fonthill",
              "Pelham", "Lincoln", "Port Colborne",
            ].map((city) => (
              <span
                key={city}
                className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {city}
              </span>
            ))}
          </div>
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View all service areas →
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 bg-gray-50 border-t">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Ready to Experience the Urban Sparkle Difference?
          </h2>
          <p className="text-gray-600 mb-6">
            Book your first cleaning today or call us to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Book a Cleaning
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
