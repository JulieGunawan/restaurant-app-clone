import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    unoptimized: true
  },
  trailingSlash:true,
  reactStrictMode: true,
};
module.exports = nextConfig;
