import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — deploys to Cloudflare Pages (or any static host).
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
