import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  /** @type {import('next').NextConfig} */
  output: 'standalone', // <--- ESTA ES LA LÍNEA MÁGICA
};

module.exports = nextConfig;
};

export default nextConfig;
