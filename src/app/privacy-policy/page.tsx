import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy | Urban Sparkle Cleaners",
  description:
    "Privacy Policy for Urban Sparkle Cleaners. Learn how we collect, use, and protect your personal information in compliance with CASL and Canadian privacy law.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", url: "/privacy-policy" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-10">Last updated: March 2026</p>

          <div className="prose md:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary">

            <p>
              Urban Sparkle Cleaners (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit{" "}
              <a href={SITE_CONFIG.url}>{SITE_CONFIG.url}</a> or use our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, and phone number provided through our booking, contact, or careers forms.</li>
              <li><strong>Service Information:</strong> Details about the services you request, including your address, property type, and service preferences.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring URLs (collected via analytics tools).</li>
              <li><strong>Communications:</strong> Any messages or feedback you send us via email or our contact form.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and confirm your cleaning service bookings</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send booking confirmations and service reminders</li>
              <li>Improve our website and services based on usage patterns</li>
              <li>Comply with legal obligations under Canadian law</li>
            </ul>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties
              for marketing purposes.
            </p>

            <h2>3. Consent (CASL Compliance)</h2>
            <p>
              In accordance with Canada&apos;s Anti-Spam Legislation (CASL), we will only send you
              commercial electronic messages if you have provided express or implied consent. You may
              withdraw your consent at any time by contacting us at{" "}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>.
            </p>

            <h2>4. Cookies & Analytics</h2>
            <p>
              Our website may use cookies and third-party analytics tools (such as Google Analytics)
              to understand how visitors use our site. This data is collected in aggregate and does
              not personally identify you. You can disable cookies in your browser settings at any time.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We use trusted third-party services to operate our business, including email delivery
              and analytics. These providers access only the information necessary to perform their
              services and are required to maintain confidentiality.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this policy, or as required by applicable law.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under Canadian privacy law (PIPEDA), you have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Withdraw your consent to our use of your information</li>
              <li>Request deletion of your information, subject to legal obligations</li>
            </ul>
            <p>
              To exercise these rights, contact us at{" "}
              <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a> or call us at{" "}
              <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phoneDisplay}</a>.
            </p>

            <h2>8. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of internet transmission is 100% secure.
            </p>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes by posting the updated policy on this page with a revised date.
            </p>

            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
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
