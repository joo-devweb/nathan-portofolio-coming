/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['files.catbox.moe'],
  },
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf|bin|fbx|obj|hdr)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/models/[name][ext]',
      },
    });
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/images/[name][ext]',
      },
    });
    return config;
  },
};

module.exports = nextConfig;