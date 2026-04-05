import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["simple-icons", "lucide-react"],
  },
};

export default nextConfig;
