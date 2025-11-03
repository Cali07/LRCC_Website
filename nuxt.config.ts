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
        { src: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { src: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { src: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { src: '/icons/favicon-128.png', sizes: '128x128', type: 'image/png' },
        { src: '/icons/favicon-196x196.png', sizes: '196x196', type: 'image/png' },
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
        { name: 'theme-color', content: '#1d3557' },
        { name: 'msapplication-TileColor', content: '#1d3557' },
        { name: 'msapplication-TileImage', content: '/icons/mstile-144x144.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-touch-icon-152x152.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  }
})
