import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.su.ac.za",
      },
      {
        protocol: "https",
        hostname: "cs.sun.ac.za",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "files.su.ac.za",
        pathname: "/public/styles/**",
      },
    ],
  },
};

export default nextConfig;
