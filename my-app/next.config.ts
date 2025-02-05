import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images:{
    unoptimized: true
  },
  trailingSlash:true,
  reactStrictMode: true,
};

export default nextConfig;
