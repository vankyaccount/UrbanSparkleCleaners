import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CareersForm } from "@/components/forms/CareersForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Careers | Join Our Cleaning Team | Urban Sparkle Cleaners",
  description:
    "Join Urban Sparkle Cleaners! We're hiring house cleaners, commercial cleaners, and team leads in Burlington, Oakville, Hamilton & Niagara. Competitive pay, flexible hours.",
  path: "/careers",
});

// JobPosting Schema for structured data
const jobPostingSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "Professional House Cleaner",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "Urban Sparkle Cleaners",
    "sameAs": "https://urbansparklecleaners.ca"
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Burlington",
      "addressRegion": "ON",
      "addressCountry": "CA"
    }
  },
  "datePosted": new Date().toISOString().split("T")[0],
  "description": `
    <p>Urban Sparkle Cleaners is seeking experienced and reliable professional house cleaners to join our growing team serving Burlington, Oakville, Hamilton, and the Niagara Region.</p>

    <h3>Responsibilities:</h3>
    <ul>
      <li>Perform professional residential and commercial cleaning services to company standards</li>
      <li>Follow detailed cleaning checklists for each service type (regular, deep, move-in/out, Airbnb turnovers)</li>
      <li>Use eco-friendly cleaning products and equipment safely and effectively</li>
      <li>Communicate professionally with clients and respond to feedback</li>
      <li>Arrive on time and complete jobs within estimated timeframes</li>
      <li>Maintain cleaning equipment and report any issues promptly</li>
    </ul>

    <h3>Requirements:</h3>
    <ul>
      <li>Minimum 1 year professional cleaning experience (residential or commercial)</li>
      <li>Reliable transportation and valid driver's licence</li>
      <li>Eligible to work in Canada</li>
      <li>Attention to detail and thorough work ethic</li>
      <li>Excellent time management skills</li>
      <li>Professional appearance and demeanour</li>
      <li>Ability to work independently and as part of a team</li>
      <li>Must pass background check</li>
    </ul>

    <h3>What We Offer:</h3>
    <ul>
      <li>Competitive hourly wage ($18-$25/hour based on experience)</li>
      <li>Flexible scheduling (full-time and part-time positions available)</li>
      <li>Weekend and evening work available</li>
      <li>Eco-friendly products that are safer for your health</li>
      <li>Consistent routes and reliable clients</li>
      <li>Opportunities for advancement to Team Lead positions</li>
      <li>Supportive team environment</li>
    </ul>
  `,
  "employmentType": "FULL_TIME",
  "salaryCurrency": "CAD",
  "salaryRange": {
    "@type": "MonetaryAmountDistribution",
    "name": "Hourly Wage",
    "currency": "CAD",
    "minValue": 18,
    "maxValue": 25,
    "median": 21
  }
};

const faqs = [
  {
    q: "What experience do I need to join Urban Sparkle Cleaners?",
    a: "We require at least 1 year of professional cleaning experience, either residential or commercial. Candidates who have worked for cleaning companies, hotels, or in facilities management are strongly encouraged to apply. We also provide training on our specific cleaning protocols and eco-friendly products."
  },
  {
    q: "Do I need my own transportation?",
    a: "Yes, our technicians need reliable transportation to travel to client homes and businesses throughout Burlington, Oakville, Hamilton, and the Niagara Region. A valid driver's licence and a reliable vehicle are required for all cleaning positions."
  },
  {
    q: "What are the working hours?",
    a: "We offer flexible scheduling to accommodate different lifestyles. Most of our cleaning work happens Monday through Saturday between 8AM and 6PM, though some evening and Sunday work is available for Airbnb turnovers and commercial clients. Full-time positions typically work 35-40 hours per week, while part-time positions range from 15-30 hours."
  },
  {
    q: "What is the pay rate?",
    a: "Our starting hourly wage ranges from $18 to $25 per hour, depending on your experience level, position, and performance. Entry-level cleaners with 1-2 years of experience typically start at $18-$20/hour. Experienced cleaners and Team Leads can earn $22-$25/hour. We also offer performance bonuses and opportunities for advancement."
  },
  {
    q: "Do you provide training?",
    a: "Yes, all new hires complete our training program covering Urban Sparkle Cleaners' cleaning protocols, eco-friendly product usage, client communication standards, and safety procedures. Training is paid and typically lasts 1-2 weeks depending on your prior experience."
  },
  {
    q: "What areas will I be working in?",
    a: "Our service area includes Burlington, Oakville, Hamilton, Ancaster, Waterdown, Stoney Creek, Grimsby, and the Niagara Region (Niagara Falls, St. Catharines, Niagara-on-the-Lake, Welland, Thorold, Fort Erie). We work to assign routes that are geographically efficient for our team members."
  },
  {
    q: "Are cleaning supplies provided?",
    a: "Yes, Urban Sparkle Cleaners provides all eco-friendly cleaning products, equipment, and supplies needed for each job. You'll need to keep your vehicle stocked and maintain equipment in good condition, but we cover all supply costs."
  },
  {
    q: "What benefits are offered?",
    a: "We offer competitive pay, flexible scheduling, paid training, and a supportive work environment. Full-time employees may be eligible for additional benefits after a probationary period. We also offer opportunities for advancement into Team Lead and management positions as the company grows."
  }
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={jobPostingSchema} />
      <Breadcrumbs items={[{ name: "Careers", url: "/careers" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Cleaning Team
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Looking for a rewarding career in professional cleaning? Urban Sparkle Cleaners is hiring
              experienced cleaners across Burlington, Oakville, Hamilton, and the Niagara Region.
              Competitive pay, flexible hours, and a supportive team environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border sticky top-4">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Apply Now</h2>
                <CareersForm />
              </div>
            </div>

            {/* Job Details & Info */}
            <div className="lg:col-span-3 space-y-8">
              {/* Why Join Us */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Join Urban Sparkle Cleaners?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Competitive Pay</h3>
                      <p className="text-sm text-gray-600">$18-$25/hour based on experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Flexible Hours</h3>
                      <p className="text-sm text-gray-600">Full-time and part-time positions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Eco-Friendly</h3>
                      <p className="text-sm text-gray-600">Safe, non-toxic products</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Growth Opportunities</h3>
                      <p className="text-sm text-gray-600">Advance to Team Lead roles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Supportive Team</h3>
                      <p className="text-sm text-gray-600">Collaborative work environment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Paid Training</h3>
                      <p className="text-sm text-gray-600">Learn our professional methods</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Positions Available */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Open Positions</h2>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-gray-900">House Cleaner</h3>
                      <span className="text-sm text-primary font-medium">$18-$22/hour</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Perform residential cleaning services including regular cleaning, deep cleaning, and move-in/move-out services.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Full-Time</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Part-Time</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-gray-900">Commercial Cleaner</h3>
                      <span className="text-sm text-primary font-medium">$19-$23/hour</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Clean offices, retail spaces, and commercial facilities. Evening and early morning hours available.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Full-Time</span>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Evening Hours</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-gray-900">Airbnb/Vacation Rental Cleaner</h3>
                      <span className="text-sm text-primary font-medium">$18-$24/hour</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Fast-paced turnover cleaning for short-term rentals in Niagara Falls, Niagara-on-the-Lake, and surrounding areas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Part-Time</span>
                      <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">Weekend Work</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-gray-900">Deep Clean Specialist</h3>
                      <span className="text-sm text-primary font-medium">$20-$25/hour</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Specialized deep cleaning services requiring attention to detail and experience with challenging cleaning situations.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Full-Time</span>
                      <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded">Experienced Required</span>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-bold text-gray-900">Team Lead</h3>
                      <span className="text-sm text-primary font-medium">$23-$28/hour</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      Lead cleaning teams, ensure quality standards, train new cleaners, and communicate with clients.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Full-Time</span>
                      <span className="text-xs bg-rose-100 text-rose-700 px-2 py-1 rounded">Leadership Role</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Minimum 1 year professional cleaning experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Reliable transportation and valid driver's licence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Eligible to work in Canada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Attention to detail and thorough work ethic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Excellent time management skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Professional appearance and communication skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Must pass background check</span>
                  </li>
                </ul>
              </div>

              {/* FAQs */}
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="font-medium text-gray-900 pr-4">{faq.q}</span>
                        <svg className="w-5 h-5 text-gray-500 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="mt-3 px-4 text-gray-600" dangerouslySetInnerHTML={{ __html: faq.a }} />
                    </details>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 rounded-xl text-white">
                <h2 className="text-xl font-bold mb-2">Questions About Working With Us?</h2>
                <p className="text-white/90 mb-4">
                  We'd love to hear from you! Reach out with any questions about careers at Urban Sparkle Cleaners.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:6474607008" className="flex items-center justify-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (647) 460-7008
                  </a>
                  <a href="mailto:urbansparklecleaners@gmail.com" className="flex items-center justify-center gap-2 bg-white/20 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
