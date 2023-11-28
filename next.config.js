/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.codewp.ai",
      } 
    ]
    }    
}

module.exports = nextConfig