import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative text-white overflow-hidden min-h-[500px] md:min-h-[580px]">
      {/* Background image */}
      <Image
        src="/images/hero-cleaning.jpg"
        alt="Professional cleaning services"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-blue-900/80" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Reliable and Efficient Cleaning Services for Your Home or Office
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            Professional cleaning solutions with eco-friendly products.
            Serving Burlington, Oakville, Hamilton, and the Niagara Region. Satisfaction Guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-accent text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Book Your Cleaning
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-2 text-blue-100">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>
              Call us now:{" "}
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-white font-semibold hover:text-accent transition-colors">
                {SITE_CONFIG.phoneDisplay}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
