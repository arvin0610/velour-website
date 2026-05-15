import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images straight from /public as plain <img> tags.
    // The default next/image optimizer (/_next/image route) works in local
    // `next dev` but breaks in many other environments (static export, some
    // hosts, proxies, stale .next cache) — which is why images render for one
    // person but not another. Disabling optimization makes every image load
    // identically everywhere, at the cost of automatic resize/WebP.
    unoptimized: true,
  },
};

export default nextConfig;
