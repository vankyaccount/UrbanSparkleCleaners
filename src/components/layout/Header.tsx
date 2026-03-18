"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SITE_CONFIG, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-accent transition-colors">
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-accent transition-colors">
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Eco-Friendly Products</span>
            <span>|</span>
            <span>Satisfaction Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20 gap-2">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Urban Sparkle Cleaners"
                width={160}
                height={52}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
              <Link
                href="/"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors inline-flex items-center gap-1 text-sm"
                >
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-64 border">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors inline-flex items-center gap-1 text-sm">
                  Areas We Serve
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 border">
                    {SERVICE_AREAS.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/areas/${area.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {area.name}, {area.province}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/residential-cleaning"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Residential
              </Link>
              <Link
                href="/commercial-cleaning"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Commercial
              </Link>
              <Link
                href="/pricing"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Blog
              </Link>
              <Link
                href="/reviews"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Reviews
              </Link>
              <Link
                href="/careers"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="px-2 py-2 text-gray-700 hover:text-primary font-medium transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="hidden lg:block text-primary font-semibold hover:text-primary-dark transition-colors text-sm whitespace-nowrap"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
              <Link
                href="/book"
                className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm whitespace-nowrap"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="xl:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="xl:hidden border-t bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              <Link href="/residential-cleaning" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Residential Cleaning
              </Link>
              <Link href="/commercial-cleaning" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Commercial Cleaning
              </Link>
              <Link href="/pricing" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Pricing
              </Link>

              <div className="py-2">
                <p className="text-sm font-semibold text-gray-500 uppercase mb-1">Areas We Serve</p>
                <div className="grid grid-cols-2 gap-1">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas/${area.slug}`}
                      className="text-sm py-1 text-gray-600 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/blog" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <Link href="/reviews" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Reviews
              </Link>
              <Link href="/careers" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Careers
              </Link>
              <Link href="/contact" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <Link href="/faq" className="block py-2 text-gray-700 font-medium" onClick={() => setMobileOpen(false)}>
                FAQ
              </Link>

              <div className="pt-4 space-y-3 border-t">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="block w-full text-center py-3 border-2 border-primary text-primary rounded-lg font-semibold"
                >
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
                <Link
                  href="/book"
                  className="block w-full text-center py-3 bg-primary text-white rounded-lg font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
