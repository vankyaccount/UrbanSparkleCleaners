import type { Metadata } from "next";
import { generatePageMetadata, generateFAQSchema } from "@/lib/seo";
import { ALL_FAQS } from "@/content/faq";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions | Urban Sparkle Cleaners",
  description:
    "Answers to common questions about Urban Sparkle Cleaners — services, pricing, booking, and eco-friendly cleaning across Burlington, Oakville, Hamilton, and Niagara.",
  path: "/faq",
});

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={generateFAQSchema(ALL_FAQS)} />
      {children}
    </>
  );
}
