<template>
  <div class="critical-container min-h-screen bg-[#2d3e3f]">
    <!-- Deferred Particles Background - Lazy loaded -->
    <LazyDeferredParticles />

    <!-- Main Content -->
    <div class="relative z-10 text-center px-8 max-w-2xl mx-auto min-h-screen flex flex-col items-center gap-10 pt-20 pb-48 justify-start md:pt-32 md:pb-28">
      <!-- Logo with Cool Mode - Lazy loaded -->
      <LazyCoolMode>
        <div>
          <WilgottLogo :size="200" />
        </div>
      </LazyCoolMode>

      <!-- Typing Animation - Optimized -->
      <div class="space-y-6">
        <LazyTypingAnimation
          text="We're a Nordic family, united in marriage and founded as a company in 2022 with two children, committed to building a lasting legacy through prudent investments in startups, real estate, and rentals. Grounded in earthy values, we seek to grow opportunities steadily for the future."
          :duration="35"
          :delay="500"
          tag="p"
          class-name="text-lg leading-relaxed font-light text-gray-300 max-w-4xl mx-auto"
          :show-cursor="false"
        />
      </div>

      <section class="space-y-4 text-sm leading-7 text-gray-200 md:text-base">
        <p>
          Wilgott is a Nordic-rooted family investment and venture company building and backing practical software products.
        </p>
        <p>
          Current products include
          <a href="https://klinky.io/" class="text-[#d4af37] underline underline-offset-4 hover:text-white">Klinky</a>,
          a campaign link management platform for short links, traffic splitting, and A/B testing links, and
          <a href="https://pixelwatch.app/" class="text-[#d4af37] underline underline-offset-4 hover:text-white">PixelWatch</a>,
          a competitor website monitoring tool for visual change alerts across landing pages, pricing pages, and product messaging.
        </p>
        <p>
          <a href="/ventures" class="text-[#d4af37] underline underline-offset-4 hover:text-white">Explore our ventures</a>.
        </p>
      </section>

      <!-- Dock at bottom - Lazy loaded -->
      <div class="fixed bottom-24 md:bottom-12 left-1/2 transform -translate-x-1/2 z-50">
        <LazyDock />
      </div>

      <!-- Organization Number -->
      <div class="fixed bottom-4 right-4 z-40">
        <p class="text-xs text-gray-400 font-light">
          Org. nr. 828753762 • Registered in Brønnøysundregistrene
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import WilgottLogo from '~/components/WilgottLogo.vue'

// Comprehensive SEO setup
const siteUrl = 'https://wilgott.com'
const siteName = 'Wilgott'
const siteDescription = 'Nordic-rooted family investment and venture company building and backing practical software products.'

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Wilgott',
      alternateName: 'Wilgott - Hearth & Venture',
      url: siteUrl,
      logo: `${siteUrl}/images/wilgott-logo.png`,
      description: siteDescription,
      foundingDate: '2022',
      identifier: {
        '@type': 'PropertyValue',
        name: 'Norwegian Organization Number',
        value: '828753762'
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'Norway'
      },
      sameAs: [
        'https://www.linkedin.com/in/robinwilgott/',
        'https://x.com/RobinWilgott'
      ],
      knowsAbout: [
        'Family investment',
        'Venture building',
        'Software products'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: {
        '@id': `${siteUrl}/#organization`
      },
      inLanguage: 'en'
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#homepage`,
      url: siteUrl,
      name: 'Wilgott • Hearth & Venture',
      isPartOf: {
        '@id': `${siteUrl}/#website`
      },
      about: {
        '@id': `${siteUrl}/#organization`
      },
      mentions: [
        {
          '@type': 'Thing',
          name: 'Klinky',
          url: 'https://klinky.io/'
        },
        {
          '@type': 'Thing',
          name: 'PixelWatch',
          url: 'https://pixelwatch.app/'
        }
      ],
      inLanguage: 'en'
    }
  ]
}

useHead({
  link: [
    { rel: 'canonical', href: siteUrl }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(homepageSchema)
    }
  ]
})

// Enhanced meta tags and Open Graph
useSeoMeta({
  title: 'Wilgott • Hearth & Venture',
  description: siteDescription,
  keywords: 'family office, investment, startup, real estate, Nordic, heritage, Wilgott, Klinky, PixelWatch, venture company, family business',
  author: 'Wilgott',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

  // Open Graph / Facebook
  ogTitle: 'Wilgott • Nordic Family Investment Firm',
  ogDescription: siteDescription,
  ogImage: `${siteUrl}/images/wilgott-logo.png`,
  ogImageAlt: 'Wilgott Logo',
  ogUrl: siteUrl,
  ogType: 'website',
  ogSiteName: siteName,
  ogLocale: 'en_US',

  // Twitter Card
  twitterCard: 'summary',
  twitterSite: '@RobinWilgott',
  twitterCreator: '@RobinWilgott',
  twitterTitle: 'Wilgott • Nordic Family Investment Firm',
  twitterDescription: siteDescription,
  twitterImage: `${siteUrl}/images/wilgott-logo.png`,
  twitterImageAlt: 'Wilgott Logo'
})
</script>

<style scoped>
/* Minimal custom styles - relying on Tailwind for clean, elegant look */
</style>
