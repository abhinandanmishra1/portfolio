/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: process.env.NEXT_PUBLIC_BLOG_URL,
      },
      {
        source: "/blog/:path*",
        destination: process.env.NEXT_PUBLIC_BLOG_URL + "/:path*",
      },
      {
        source: "/_next/:path*",
        destination: process.env.NEXT_PUBLIC_BLOG_URL + "/_next/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
