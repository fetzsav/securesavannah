import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for the App Router. This will generate your site
   * into a static `out` folder that can be deployed anywhere.
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  // The default Next.js image optimization is not available in a static export.
  // This setting is required to use the <Image /> component.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
