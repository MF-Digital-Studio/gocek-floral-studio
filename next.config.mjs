/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: [
              '</banner_poster.jpg>; rel=preload; as=image',
              '</banner.webm>; rel=preload; as=video; type="video/webm"',
            ].join(', '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
