import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/yottyhol.github.io', // Only use basePath in production
  assetPrefix: '/yottyhol.github.io/', // Adjust for production
  // Other config options can go here
};

export default nextConfig;
