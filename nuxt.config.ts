// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt'],

  // Add Tailwind CSS
  css: ['~/assets/css/main.css'],

  // PostCSS configuration for Tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Static generation for Cloudflare Pages
  nitro: {
    preset: 'cloudflare-pages'
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: false, // Faster hydration
    renderJsonPayloads: true // Faster hydration
  },

  // Optimize for static deployment
  ssr: true,

  // Disable server features that might cause issues
  runtimeConfig: {
    public: {}
  },

  app: {
    head: {
      title: 'Wilgott - Hearth & Venture',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nordic-rooted family investment and venture company building and backing practical software products.' },
        { name: 'theme-color', content: '#000000' },
        { name: 'keywords', content: 'Wilgott, Nordic venture company, family investment, practical software products, Klinky, PixelWatch' },
        { name: 'author', content: 'Wilgott - Hearth & Venture' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph tags for Facebook and LinkedIn
        { property: 'og:title', content: 'Wilgott - Hearth & Venture | Nordic Family Investment Firm' },
        { property: 'og:description', content: 'Nordic-rooted family investment and venture company building and backing practical software products.' },
        { property: 'og:image', content: 'https://wilgott.com/images/wilgott-logo.png' },
        { property: 'og:url', content: 'https://wilgott.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Wilgott - Hearth & Venture' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Card tags
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@RobinWilgott' },
        { name: 'twitter:title', content: 'Wilgott - Hearth & Venture | Nordic Family Investment Firm' },
        { name: 'twitter:description', content: 'Nordic-rooted family investment and venture company building and backing practical software products.' },
        { name: 'twitter:image', content: 'https://wilgott.com/images/wilgott-logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

        // DNS prefetch and preconnect for performance
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-K7C3ZMLKDD',
          async: true
        },
        {
          children: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-K7C3ZMLKDD');"
        }
      ]
    }
  }
})
