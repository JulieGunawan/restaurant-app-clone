import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  image:{
    unoptimized: true
  },
  trailingSlash:true,
  reactStrictMode: true,
};

export default nextConfig;
