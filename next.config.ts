import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pins the workspace root to this directory. Without it, Next/Turbopack
  // walks up and finds the package-lock.json at C:\Users\prash (an unrelated
  // ancestor repo) and infers that as the root instead.
  turbopack: {
    root: __dirname,
  },
  images: {
    qualities: [75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
