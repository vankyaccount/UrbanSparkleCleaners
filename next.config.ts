import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.zyrosite.com",
      },
    ],
  },
  async redirects() {
    return [
      // www → apex redirect (fixes 5xx on www.urbansparklecleaners.ca)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.urbansparklecleaners.ca" }],
        destination: "https://urbansparklecleaners.ca/:path*",
        permanent: true,
      },
      { source: "/cleaning-services", destination: "/services", permanent: true },
      { source: "/urban-sparkle-cleaners-book-your-cleaning-service", destination: "/book", permanent: true },
      { source: "/home-cleaning-services-grimsby", destination: "/areas/grimsby", permanent: true },
      { source: "/professional-regular-and-deep-house-cleaners-burlington", destination: "/areas/burlington", permanent: true },
      { source: "/professional-cleaning-services-in-oakville", destination: "/areas/oakville", permanent: true },
      { source: "/cleaning-services-hamilton", destination: "/areas/hamilton", permanent: true },
      { source: "/cleaning-services-stoney-creek", destination: "/areas/stoney-creek", permanent: true },
      { source: "/affordable-cleaning-services-ancaster-on", destination: "/areas/ancaster", permanent: true },
      { source: "/weekly-cleaning-service-waterdown-ontario", destination: "/areas/waterdown", permanent: true },
    ];
  },
};

export default nextConfig;
