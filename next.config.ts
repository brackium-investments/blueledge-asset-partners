import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://d3bcnu5rxir0tz.cloudfront.net/**"),
      new URL("https://d2sj7epg0gapzm.cloudfront.net/**"),
    ],
  },
};

export default nextConfig;
