/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unchained.ch",
      },
      {
        protocol: "https",
        hostname: "unchained.shop",
      },
    ],
  },
};

module.exports = nextConfig;
