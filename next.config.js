/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abhicdn.netlify.app",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog.abhinandanmishra.in",
      },
      {
        source: "/blog/:path*",
        destination: "https://blog.abhinandanmishra.in/:path*",
      },
      {
        source: "/_next/:path*",
        destination: "https://blog.abhinandanmishra.in/_next/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
