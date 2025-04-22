import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TMDB_TOKEN: process.env.TMDB_TOKEN,
    TMDB_KEY: process.env.TMDB_KEY,
    TMDB_BASE_URl: process.env.TMDB_BASE_URl,
  },
};

export default nextConfig;
