import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // Run before App Router so nested paths don't inherit page metadata/HTML
      beforeFiles: [
        {
          source: "/:path+/app-ads.txt",
          destination: "/app-ads.txt",
        },
        {
          source: "/sweet-hit/favicon.ico",
          destination: "/sweet-hit/favicon/favicon.ico",
        },
        {
          source: "/cook-note/favicon.ico",
          destination: "/cook-note/favicon/favicon-32x32.png",
        },
      ],
    };
  },
};

export default nextConfig;
