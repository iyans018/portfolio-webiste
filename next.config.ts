import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
    domains: [
      'mojokertokab.go.id',
      'thumb.viva.id',
      'images.unsplash.com'
    ]
  },
};

export default nextConfig;
