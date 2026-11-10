import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export. This site has no server data and no API routes.
  // If a future feature needs a server, remove output: "export".
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
