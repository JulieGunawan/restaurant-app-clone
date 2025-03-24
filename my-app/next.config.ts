import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    unoptimized: true
  },
  experimental: {
    dynamicIO: true
  },
  trailingSlash:true,
  reactStrictMode: true,
};
module.exports = nextConfig;
