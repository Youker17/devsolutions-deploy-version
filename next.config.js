/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.codewp.ai",
      }, 
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      } 
    ]
    }    
}

module.exports = nextConfig
