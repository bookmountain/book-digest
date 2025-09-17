/** @type {import("next").NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST,
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_BOOK_IMAGE_HOST,
      },
    ],
  },
};

module.exports = nextConfig;
