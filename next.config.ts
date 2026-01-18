import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.digiwebx.vercel.app" }],
        destination: "https://digiwebx.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
