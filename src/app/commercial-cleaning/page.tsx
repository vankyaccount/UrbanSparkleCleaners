import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, generateFAQSchema } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Commercial Cleaning Services | Urban Sparkle Cleaners",
  description:
    "Professional commercial & office cleaning in Burlington, Oakville, Hamilton & Niagara. Janitorial services, custom solutions. Fully insured. Call (647) 460-7008.",
  path: "/commercial-cleaning",
});

const commercialFaqs = [
  {
    question: "What commercial cleaning services do you offer?",
    answer: "We offer office cleaning, janitorial services, custom cleaning solutions for healthcare facilities, retail spaces, and industrial workspaces. We tailor our services to your business needs.",
  },
  {
    question: "Can you clean outside of business hours?",
    answer: "Absolutely! We offer flexible scheduling including early morning, evening, and weekend cleaning to minimize disruption to your business operations.",
  },
  {
    question: "Do you offer recurring commercial cleaning contracts?",
    answer: "Yes, we offer daily, weekly, bi-weekly, and monthly commercial cleaning contracts with competitive pricing for ongoing services.",
  },
];

export default function CommercialCleaningPage() {
  return (
    <>
      <JsonLd data={generateFAQSchema(commercialFaqs)} />
      <Breadcrumbs items={[{ name: "Commercial Cleaning", url: "/commercial-cleaning" }]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Professional Commercial Cleaning Services
          </h1>
          <p className="text-lg text-blue-100 mb-4">
            Professional and affordable cleaning services for your commercial spaces. Tailored to
            meet your business needs and exceed expectations.
          </p>
          <div className="flex items-center gap-8 mb-6 text-blue-200">
            <span className="font-bold text-white text-2xl">✓</span>
            <span>Satisfaction Guarantee</span>
            <span className="font-bold text-white text-2xl">🌿</span>
            <span>Eco-Friendly Products</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="inline-flex items-center justify-center bg-accent text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors">
              Get a Commercial Quote
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
            <h2>Your Trusted Commercial Cleaning Partner</h2>
            <p>
              Urban Sparkle Cleaners provides exceptional commercial cleaning services tailored to meet
              your business needs. Whether you manage an office, retail space, healthcare facility, or
              industrial workspace, our experienced team ensures a spotless and healthy environment for
              your employees and clients.
            </p>

            <h2>Commercial Cleaning Services</h2>

            <h3>Office Cleaning Solutions</h3>
            <p>
              Comprehensive office cleaning services to maintain a clean and productive workspace.
              We handle everything from daily desk cleaning to conference room sanitization, ensuring
              your office makes the right impression on clients and keeps employees healthy.
            </p>

            <h3>Janitorial Services</h3>
            <p>
              Reliable janitorial services designed to keep your facilities clean, safe, and welcoming
              for everyone. Our janitorial team can work on daily, weekly, or custom schedules to
              match your needs.
            </p>

            <h3>Custom Cleaning Solutions</h3>
            <p>
              Every business is unique, which is why we offer customizable deep cleaning packages for
              offices, healthcare facilities, retail spaces, and industrial environments. We work with
              you to create a cleaning plan that fits your specific requirements and budget.
            </p>

            <h2>Industries We Serve</h2>
            <ul>
              <li>Office buildings and corporate spaces</li>
              <li>Medical and dental offices</li>
              <li>Retail stores and showrooms</li>
              <li>Restaurants and food service</li>
              <li>Gyms and fitness centres</li>
              <li>Schools and educational facilities</li>
              <li>Property management companies</li>
              <li>Warehouses and industrial spaces</li>
            </ul>

            <h2>Why Businesses Choose Urban Sparkle Cleaners</h2>
            <ul>
              <li><strong>Fully Insured:</strong> Comprehensive liability coverage for your peace of mind</li>
              <li><strong>Flexible Scheduling:</strong> Cleaning outside business hours to avoid disruption</li>
              <li><strong>Eco-Friendly Products:</strong> Green cleaning solutions safe for your workplace</li>
              <li><strong>Experienced Team:</strong> Trusted by hundreds of businesses across Ontario</li>
              <li><strong>Custom Plans:</strong> Tailored cleaning programs for your specific needs</li>
              <li><strong>Satisfaction Guarantee:</strong> We stand behind the quality of our work</li>
            </ul>
          </div>

          {/* Services */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/services/office-cleaning" className="p-6 border rounded-xl hover:border-primary hover:shadow-md transition-all">
              <span className="text-3xl">💼</span>
              <h3 className="font-semibold text-gray-900 mt-2">Office Cleaning</h3>
              <p className="text-sm text-gray-600 mt-1">Daily, weekly, or monthly office maintenance</p>
            </Link>
            <Link href="/services/janitorial-services" className="p-6 border rounded-xl hover:border-primary hover:shadow-md transition-all">
              <span className="text-3xl">🧹</span>
              <h3 className="font-semibold text-gray-900 mt-2">Janitorial Services</h3>
              <p className="text-sm text-gray-600 mt-1">Reliable ongoing facility maintenance</p>
            </Link>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Commercial Cleaning FAQ</h2>
            <div className="space-y-4">
              {commercialFaqs.map((faq, i) => (
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
            Get a Free Commercial Cleaning Quote
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <ContactForm source="commercial-cleaning" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
