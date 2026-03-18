import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, generateFAQSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Residential Cleaning Services | Urban Sparkle Cleaners",
  description:
    "Expert residential cleaning in Burlington, Oakville, Hamilton & Niagara. Regular, deep, move-in/out cleaning. Eco-friendly, fully insured. Call (647) 460-7008.",
  path: "/residential-cleaning",
});

const residentialFaqs = [
  {
    question: "What does residential cleaning include?",
    answer: "Our residential cleaning includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying. Deep cleaning adds baseboards, light fixtures, inside cabinets, and detailed scrubbing.",
  },
  {
    question: "How often should I schedule residential cleaning?",
    answer: "We recommend weekly cleaning for busy households, bi-weekly for moderate maintenance, and monthly for light upkeep. We customize the schedule to your lifestyle and needs.",
  },
  {
    question: "Do you bring your own supplies?",
    answer: "Yes, we bring all cleaning supplies and equipment. We use eco-friendly, plant-based products safe for your family and pets.",
  },
];

export default function ResidentialCleaningPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(residentialFaqs)} />
      <Breadcrumbs items={[{ name: "Residential Cleaning", url: "/residential-cleaning" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Expert Residential Cleaning Services for a Spotless Home
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            A clean home fosters a healthy lifestyle. Our experienced, fully insured team uses
            eco-friendly products to deliver sparkling results every time. Serving Burlington,
            Oakville, Hamilton, and the Niagara Region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="inline-flex items-center justify-center bg-accent text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              Book Residential Cleaning
            </Link>
            <a href={`tel:${SITE_CONFIG.phone}`} className="inline-flex items-center justify-center gap-2 bg-white/10 border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors">
              Call {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>Your Spotless Home Sanctuary</h2>
            <p>
              At Urban Sparkle Cleaners, we understand that your home is your sanctuary. Our residential
              cleaning services are designed to give you a spotless, fresh living environment without the
              hassle. Our experienced, dedicated team has perfected the art of home cleaning across Burlington, Oakville,
              Hamilton, and the Niagara Region.
            </p>

            <h2>Residential Cleaning Services We Offer</h2>

            <h3>Regular Cleaning</h3>
            <p>
              Maintain a consistently clean home with our flexible weekly, bi-weekly, or monthly
              cleaning services. Starting from just $90 for apartments ($30/hour), our regular
              cleaning covers all the essentials to keep your home looking its best.
            </p>

            <h3>Deep Cleaning</h3>
            <p>
              When your home needs extra attention, our deep cleaning service goes top-to-bottom.
              At $40/hour with a minimum of 2 cleaners, we tackle baseboards, light fixtures,
              inside cabinets, and every hidden corner that regular cleaning misses.
            </p>

            <h3>Move-In/Move-Out Cleaning</h3>
            <p>
              Make your move stress-free with our comprehensive cleaning service that ensures your
              old or new home is absolutely spotless for the transition.
            </p>

            <h3>Specialized Services</h3>
            <ul>
              <li><Link href="/services/airbnb-cleaning">Airbnb Cleaning</Link> — Quick turnaround for hosts</li>
              <li><Link href="/services/senior-cleaning">Senior Cleaning</Link> — Gentle, respectful care for seniors</li>
              <li><Link href="/services/condo-cleaning">Condo Cleaning</Link> — Tailored for condo living</li>
              <li><Link href="/services/post-renovation-cleaning">Post-Renovation Cleaning</Link> — Construction mess cleanup</li>
              <li><Link href="/services/event-cleaning">Event Cleaning</Link> — Before and after events</li>
            </ul>

            <h2>Why Choose Urban Sparkle Cleaners?</h2>
            <ul>
              <li><strong>Eco-Friendly Products:</strong> Safe for your family, pets, and the environment</li>
              <li><strong>Fully Insured:</strong> Complete peace of mind with comprehensive liability coverage</li>
              <li><strong>Satisfaction Guarantee:</strong> Not happy? We&apos;ll re-clean at no extra charge</li>
              <li><strong>Flexible Scheduling:</strong> Weekly, bi-weekly, or monthly plans available</li>
              <li><strong>Transparent Pricing:</strong> No hidden fees, starting from $30/hour</li>
              <li><strong>Experienced Team:</strong> Trained, vetted professionals you can trust in your home</li>
            </ul>
          </div>

          {/* Services Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: "/services/regular-cleaning", name: "Regular Cleaning", icon: "🏠", price: "From $90" },
              { href: "/services/deep-cleaning", name: "Deep Cleaning", icon: "✨", price: "From $120" },
              { href: "/services/move-in-move-out-cleaning", name: "Move-In/Out", icon: "📦", price: "Get Quote" },
              { href: "/services/airbnb-cleaning", name: "Airbnb Cleaning", icon: "🏡", price: "Get Quote" },
              { href: "/services/senior-cleaning", name: "Senior Cleaning", icon: "❤️", price: "From $90" },
              { href: "/services/condo-cleaning", name: "Condo Cleaning", icon: "🏢", price: "From $90" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="p-4 border rounded-xl hover:border-primary hover:shadow-md transition-all flex items-center gap-4">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{s.name}</h3>
                  <p className="text-sm text-primary font-medium">{s.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {residentialFaqs.map((faq, i) => (
                <div key={i} className="border rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-surface">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Get a Free Residential Cleaning Quote
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <ContactForm source="residential-cleaning" />
          </div>
        </div>
      </section>

      <Testimonials />
      <CTABanner />
    </>
  );
}
