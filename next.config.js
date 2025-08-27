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
        destination: "https://abhinandanmishra1-blog.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://abhinandanmishra1-blog.vercel.app/blog/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
