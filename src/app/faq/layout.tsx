import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Services FAQ | Urban Sparkle Cleaners | Niagara, Hamilton & Burlington",
  description:
    "Answers to common questions about Urban Sparkle Cleaners. Learn about our services, pricing, booking, and eco-friendly cleaning for Niagara Falls, St. Catharines, Burlington, Hamilton & Oakville.",
  openGraph: {
    title: "Cleaning Services FAQ | Urban Sparkle Cleaners",
    description:
      "Get answers about our professional cleaning services, pricing, and booking process. Serving Niagara, Burlington, Hamilton & Oakville.",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
