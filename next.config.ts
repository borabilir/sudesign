import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
    additionalData: `
      @import "Core/styles/index.scss";
    `,
  },
};

export default nextConfig;
