import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/content/blog";
import { SITE_CONFIG } from "@/lib/constants";

export async function generateStaticParams() {
  return BLOG_POSTS.filter((p) => p.published).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return generatePageMetadata({
    title: `${post.title} | Urban Sparkle Cleaners Blog`,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: SITE_CONFIG.name },
          publisher: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
          url: `${SITE_CONFIG.url}/blog/${slug}`,
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${slug}` },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <header className="mb-8">
            {post.category && (
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
            )}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time>{new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>By {SITE_CONFIG.name}</span>
            </div>
          </header>

          <div
            className="prose md:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Need Professional Cleaning?
            </h2>
            <p className="text-gray-600 mb-4">
              Urban Sparkle Cleaners serves Burlington, Oakville, Hamilton, and the Niagara Region.
              Book your cleaning today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) => p.slug !== slug && p.published)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="p-4 border rounded-lg hover:border-primary hover:shadow transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{p.excerpt.slice(0, 100)}...</p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
