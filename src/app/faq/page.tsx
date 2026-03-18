"use client";

import { useState } from "react";
import Link from "next/link";
import { ALL_FAQS } from "@/content/faq";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const categories = [...new Set(ALL_FAQS.map((f) => f.category).filter(Boolean))];

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-surface py-3">
        <div className="max-w-7xl mx-auto px-4">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">FAQ</li>
          </ol>
        </div>
      </nav>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Everything you need to know about Urban Sparkle Cleaners and our services.
              Can&apos;t find your answer? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link>.
            </p>
          </div>

          <div className="space-y-3">
            {ALL_FAQS.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <div className="pr-4">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {faq.category && (
                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {faq.category}
                      </span>
                    )}
                  </div>
                  <svg
                    className={`w-5 h-5 shrink-0 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-primary/5 rounded-xl p-8 border border-primary/20">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h2>
            <p className="text-gray-600 mb-4">We&apos;re here to help. Contact us anytime.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+16474607008"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                Call (647) 460-7008
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema - rendered as script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: ALL_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </>
  );
}
