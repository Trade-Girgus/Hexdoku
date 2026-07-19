import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = pagesBasePath
  ? {
      output: "export",
      basePath: pagesBasePath,
      trailingSlash: true,
    }
  : {};

export default nextConfig;
