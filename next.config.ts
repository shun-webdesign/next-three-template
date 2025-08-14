import type { NextConfig } from 'next'

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig: NextConfig = {
  webpack: (config) => {
    // GLSL loader
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    })
    return config
  },
}

module.exports = withPWA(nextConfig)

export default nextConfig
