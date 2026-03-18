import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/content/blog";

export const metadata: Metadata = generatePageMetadata({
  title: "Cleaning Tips & Blog | Urban Sparkle Cleaners",
  description:
    "Expert cleaning tips, guides, and insights from Urban Sparkle Cleaners. Learn about house cleaning costs, move-out checklists, and eco-friendly cleaning in Ontario.",
  path: "/blog",
});

export default function BlogPage() {
  const publishedPosts = BLOG_POSTS.filter((post) => post.published).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cleaning Tips & Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert cleaning advice, cost guides, and tips from our professional cleaning team
              serving Burlington, Oakville, Hamilton, and the Niagara Region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publishedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="bg-primary/5 h-48 flex items-center justify-center">
                  <span className="text-6xl opacity-30">📝</span>
                </div>
                <div className="p-6">
                  {post.category && (
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                    <time>{new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}</time>
                    <span className="text-primary font-medium group-hover:underline">Read More</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {publishedPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Blog posts coming soon! Check back for cleaning tips and guides.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
