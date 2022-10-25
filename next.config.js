/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["naszsklep-api.vercel.app", "i.picsum.photos"],
    formats: ["image/avif", "image/webp"]
  }
}

module.exports = nextConfig
