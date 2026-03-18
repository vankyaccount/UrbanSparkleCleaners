import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BookingForm } from "@/components/forms/BookingForm";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Book Your Cleaning Service | Urban Sparkle Cleaners",
  description:
    "Book professional cleaning services online. Residential & commercial cleaning in Burlington, Oakville, Hamilton & Niagara. Free estimate. Call (647) 460-7008.",
  path: "/book",
});

export default function BookPage() {
  const howItWorks = [
    { step: "1", title: "Get an Instant Quote", desc: "Use our online pricing calculator or fill out the booking form to get an instant estimate based on your home size and cleaning needs." },
    { step: "2", title: "Choose Your Service", desc: "Select from regular cleaning, deep cleaning, move-in/move-out, Airbnb turnovers, or specialty services. Pick the date and time that works best for you." },
    { step: "3", title: "We Confirm Your Booking", desc: "We'll respond within 24 hours to confirm your appointment, answer any questions, and assign your experienced cleaning team." },
    { step: "4", title: "Enjoy Your Spotless Home", desc: "Our insured, eco-friendly team arrives on time and delivers exceptional cleaning. Satisfaction guaranteed!" },
  ];

  const bookingFaqs = [
    {
      q: "How far in advance should I book?",
      a: "We recommend booking at least 2-3 days in advance for the best availability. However, we can often accommodate same-week or next-day bookings. For moves and special events, book as early as possible."
    },
    {
      q: "Do I need to be home during the cleaning?",
      a: "It's entirely up to you. Many of our clients provide a key or access code and go about their day while we clean. Others prefer to be present. Either way, we treat your home with the utmost respect and care."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept cash, e-transfer, and credit card payments. Payment is due after the cleaning is completed. Recurring clients can set up automated billing."
    },
    {
      q: "What if I need to cancel or reschedule?",
      a: "We understand plans change. Please provide at least 24 hours' notice for cancellations or rescheduling. There's no fee for cancellations made with advance notice."
    },
    {
      q: "Are your cleaners insured?",
      a: "Yes! Every member of our cleaning team is fully insured and bonded. You can have complete peace of mind knowing your home is protected."
    },
    {
      q: "Do you bring your own supplies?",
      a: "Yes, we bring all eco-friendly cleaning products and professional equipment needed for your home. You don't need to provide anything except access to your home."
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: "Book a Cleaning", url: "/book" }]} />
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Cleaning Service
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below and we&apos;ll be in touch within 24 hours to confirm your booking.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24hr Response</span>
            </div>
          </div>

          <Suspense fallback={<div className="py-12 text-center text-gray-500">Loading booking form...</div>}>
            <BookingForm />
          </Suspense>

          {/* How It Works */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking FAQs */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {bookingFaqs.map((faq, idx) => (
                <details key={idx} className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                    <svg className="w-5 h-5 text-gray-500 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="mt-3 px-4 text-gray-600 text-sm">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Preferred Contact Alternative */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Prefer to Book by Phone?</h2>
            <p className="text-blue-100 mb-6">
              No problem! Give us a call and we'll book your cleaning over the phone.
            </p>
            <a
              href="tel:+16474607008"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (647) 460-7008
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
