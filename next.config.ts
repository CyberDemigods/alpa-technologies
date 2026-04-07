import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/persian-parts",
  images: { unoptimized: true },
};

export default nextConfig;
