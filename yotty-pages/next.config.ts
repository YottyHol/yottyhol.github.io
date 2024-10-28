import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'development' ? '' : '/yottyhol.github.io', // Only use basePath in production
  assetPrefix: process.env.NODE_ENV === 'development' ? '' : '/yottyhol.github.io/', // Adjust for production
  // Other config options can go here
};

export default nextConfig;
