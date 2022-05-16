/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'images.unsplash.com',
      'i.ibb.co',
      'www.vectorlogo.zone',
    ],
  },
};

module.exports = nextConfig;
