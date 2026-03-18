import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/lib/constants";

const SERVICE_IMAGES: Record<string, string> = {
  "regular-cleaning": "/images/service-regular-cleaning.jpg",
  "deep-cleaning": "/images/service-deep-cleaning.jpg",
  "move-in-move-out-cleaning": "/images/service-move-out.jpg",
  "post-renovation-cleaning": "/images/service-renovation.jpg",
  "airbnb-cleaning": "/images/service-airbnb.jpg",
  "event-cleaning": "/images/service-event-cleaning.jpg",
  "office-cleaning": "/images/service-office.jpg",
};

export function ServiceCards() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Cleaning Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to meet your specific needs.
            From regular maintenance to deep cleaning, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {SERVICE_IMAGES[service.slug] && (
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={SERVICE_IMAGES[service.slug]}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                  <span className="absolute top-3 left-3 text-3xl bg-white/90 rounded-lg p-1.5" aria-hidden="true">{service.icon}</span>
                </div>
              )}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-primary font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
