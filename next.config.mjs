/** @type {import('next').NextConfig} */

const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "kelaasor.com",
      },
      {
        protocol: "https",
        hostname: "kelaasor.ir",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
  env: {
    API_KEY: "123",
    Content_Type: "application/json",
    BASE_URL: "https://kelaasor.ir/API",
    VIDEO_URL: "https://kelaasor.ir/paths",

    DB_HOST: "127.0.0.1",
    DB_USER: "blog_admin",
    DB_PASSWORD: "password",
    DB_NAME: "blog_kelaasor",

    RAYCHAT_TOKEN: "d3d3b279-20f2-45a0-93ca-7f0a5c48281e",
    NEXT_API_URL: "https://kelaasor.com",

    // NEXT_API_URL: "http://localhost:3000",
  },
  async redirects() {
    return [
      {
        source: "/home/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

