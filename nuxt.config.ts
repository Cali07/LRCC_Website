import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@vite-pwa/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'The Light Reformed Community Church',
      short_name: 'LRCC',
      description: 'A contemporary reformed church drawing people to the light of Christ in Sunnyside, Pretoria.',
      display: 'standalone',
      start_url: '/',
      background_color: '#f9f7f2',
      theme_color: '#1d3557',
      lang: 'en',
      icons: [
        { src: '/icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
        { src: '/icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
        { src: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
        { src: '/icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
        { src: '/icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
        { src: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
        { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icons/icon-256x256.png', sizes: '256x256', type: 'image/png' },
        { src: '/icons/icon-384x384.png', sizes: '384x384', type: 'image/png' },
        { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },

  css: ['~/assets/main.css'],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  app: {
    head: {
      title: 'The Light Reformed Community Church',
      meta: [
        { name: 'description', content: 'Discover the ministry, events, and heart of The Light Reformed Community Church in Sunnyside, Pretoria.' },
        { name: 'theme-color', content: '#1d3557' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/icons/icon-192x192.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  }
})
