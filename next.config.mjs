/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'thumbs.dreamstime.com', 'www.shutterstock.com', 'foyr.com', 'lirp.cdn-website.com', 'www.decorilla.com', 'media.istockphoto.com', 'retratosbarcelona.com'],
  },
}

export default nextConfig;