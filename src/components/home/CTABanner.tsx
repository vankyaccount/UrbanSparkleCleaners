import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for a Spotless Space?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Book your professional cleaning today. Starting from just $90 for residential apartments.
          Free consultation and no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-accent text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
          >
            Book Your Cleaning Now
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
