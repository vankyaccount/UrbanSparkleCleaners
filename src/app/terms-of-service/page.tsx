import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service | Urban Sparkle Cleaners",
  description:
    "Terms of Service for Urban Sparkle Cleaners. Read our service terms, cancellation policy, satisfaction guarantee, and liability terms for cleaning services in Ontario.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Service", url: "/terms-of-service" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-10">Last updated: March 2026</p>

          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary">

            <p>
              By booking or using the services of Urban Sparkle Cleaners (&quot;we&quot;, &quot;our&quot;, or
              &quot;the Company&quot;), you agree to the following Terms of Service. Please read them
              carefully before confirming your booking.
            </p>

            <h2>1. Services</h2>
            <p>
              Urban Sparkle Cleaners provides residential and commercial cleaning services including
              regular cleaning, deep cleaning, move-in/move-out cleaning, post-renovation cleaning,
              Airbnb cleaning, office cleaning, and other specialty cleaning services as described
              on our website.
            </p>
            <p>
              All services are subject to availability. We reserve the right to decline or
              discontinue service at our discretion.
            </p>

            <h2>2. Booking & Confirmation</h2>
            <p>
              Bookings submitted through our website or by phone are requests, not confirmed
              appointments. A booking is confirmed only when you receive written or verbal
              confirmation from Urban Sparkle Cleaners. We will respond to all booking requests
              within 24 hours.
            </p>

            <h2>3. Pricing</h2>
            <p>
              Prices are provided as estimates based on the information you supply at the time of
              booking. The final price may vary if the actual scope of work differs materially from
              what was described. We will communicate any changes before beginning work.
            </p>
            <p>
              All prices are in Canadian dollars and include applicable taxes where required.
            </p>

            <h2>4. Payment</h2>
            <p>
              Payment is due upon completion of each service unless otherwise agreed in writing.
              We accept cash, Interac e-transfer, and major credit cards. Recurring clients may
              arrange automated billing with our office.
            </p>
            <p>
              Invoices not paid within 7 days of service may be subject to a late fee.
            </p>

            <h2>5. Cancellation & Rescheduling</h2>
            <p>
              We require a minimum of <strong>24 hours&apos; notice</strong> for cancellations or
              rescheduling. Cancellations made with less than 24 hours&apos; notice may be subject to
              a cancellation fee of up to $50.
            </p>
            <p>
              We reserve the right to cancel or reschedule appointments due to weather, staff
              illness, or other circumstances beyond our control. In such cases, we will notify
              you as soon as possible and offer the earliest available alternative date at no
              additional cost.
            </p>

            <h2>6. Satisfaction Guarantee</h2>
            <p>
              We stand behind our work. If you are not satisfied with any aspect of your cleaning,
              please contact us within <strong>24 hours of service completion</strong> and we will
              return to re-clean the affected areas at no additional charge.
            </p>
            <p>
              The satisfaction guarantee applies to the original scope of services performed and
              does not cover areas outside the agreed service scope, or damage caused by pre-existing
              conditions.
            </p>

            <h2>7. Access to Property</h2>
            <p>
              You are responsible for providing safe and timely access to the property at the
              scheduled time. If our team cannot access the property at the agreed time without
              prior notice, a lockout fee may apply.
            </p>
            <p>
              You authorize Urban Sparkle Cleaners to enter and clean the specified property. If
              providing a key or access code, you confirm you have the authority to grant such access.
            </p>

            <h2>8. Liability</h2>
            <p>
              Urban Sparkle Cleaners is fully insured and bonded. In the unlikely event of damage
              caused by our team during service, please report it within <strong>24 hours</strong>{" "}
              of service completion. We will investigate and, where our liability is established,
              arrange repair or reasonable compensation.
            </p>
            <p>
              We are not responsible for pre-existing damage, normal wear and tear, or items that
              were not disclosed at the time of booking (e.g., fragile, antique, or unusually
              valuable items).
            </p>
            <p>
              Our liability in any claim shall not exceed the total amount paid for the specific
              cleaning service in question.
            </p>

            <h2>9. Health & Safety</h2>
            <p>
              We use eco-friendly, plant-based cleaning products. Please inform us of any allergies
              or product sensitivities before your appointment. If you prefer specific products,
              you may supply them at your own expense.
            </p>

            <h2>10. Non-Solicitation</h2>
            <p>
              Clients agree not to solicit or hire Urban Sparkle Cleaners team members directly
              for a period of 12 months following the last service. Violation of this clause may
              result in a referral fee of $500.
            </p>

            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Updated terms will
              be posted on this page. Continued use of our services constitutes acceptance of the
              revised terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of
              the Province of Ontario and the federal laws of Canada applicable therein.
            </p>

            <h2>13. Contact</h2>
            <p>For questions about these terms, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></li>
              <li><strong>Phone:</strong> <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phoneDisplay}</a></li>
              <li><strong>Website:</strong> <a href={SITE_CONFIG.url}>{SITE_CONFIG.url}</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
