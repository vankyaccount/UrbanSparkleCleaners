import type { MetadataRoute } from "next";
import { SERVICE_AREAS, SERVICES, SITE_CONFIG } from "@/lib/constants";
import { BLOG_POSTS } from "@/content/blog";

const base = SITE_CONFIG.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: base,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`,               lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/book`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/pricing`,                lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/residential-cleaning`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/commercial-cleaning`,    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/areas`,                  lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/blog`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/faq`,                    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`,                  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`,                lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/privacy-policy`,         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${base}/terms-of-service`,       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Area pages
  const areaPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((area) => ({
    url: `${base}/areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.filter((p) => p.published).map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
