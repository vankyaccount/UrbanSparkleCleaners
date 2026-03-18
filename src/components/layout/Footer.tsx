import Link from "next/link";
import { SITE_CONFIG, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pb-20 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Urban Sparkle Cleaners</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Professional residential and commercial cleaning services across the Greater Hamilton
              and Niagara regions. Eco-friendly products and satisfaction guarantee.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {SITE_CONFIG.email}
              </a>
              <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                {SITE_CONFIG.instagram}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="hover:text-white transition-colors">
                    {area.name}, {area.province}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/book" className="hover:text-white transition-colors">Book a Cleaning</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Calculator</Link></li>
              <li><Link href="/residential-cleaning" className="hover:text-white transition-colors">Residential Cleaning</Link></li>
              <li><Link href="/commercial-cleaning" className="hover:text-white transition-colors">Commercial Cleaning</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-white font-semibold text-sm mb-1">Ready to get started?</p>
              <p className="text-xs mb-3">Book your cleaning today!</p>
              <Link
                href="/book"
                className="block text-center bg-primary text-white py-2 rounded font-semibold text-sm hover:bg-primary-dark transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Urban Sparkle Cleaners. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Eco-Friendly Products</span>
            <span>|</span>
            <span>Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
