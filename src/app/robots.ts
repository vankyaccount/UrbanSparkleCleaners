import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all standard crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Allow major AI crawlers explicitly
      { userAgent: "GPTBot",       allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Claude-Web",   allow: "/" },
      { userAgent: "ClaudeBot",    allow: "/" },
      { userAgent: "PerplexityBot",allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Bingbot",      allow: "/" },
      { userAgent: "CCBot",        allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: SITE_CONFIG.url,
  };
}
