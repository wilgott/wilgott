<template>
  <div class="critical-container min-h-screen bg-[#2d3e3f] text-gray-100">
    <LazyDeferredParticles />

    <main class="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-8 py-16 md:py-24">
      <a href="/" class="mb-10 inline-flex w-fit items-center text-sm text-gray-300 underline underline-offset-4 hover:text-[#d4af37]">
        Wilgott
      </a>

      <div class="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl space-y-5">
          <WilgottLogo :size="112" />
          <p class="text-sm uppercase text-[#d4af37]">
            Ventures
          </p>
          <h1 class="text-4xl font-light leading-tight text-white md:text-5xl">
            Practical software products, built and backed from a Nordic family base.
          </h1>
        </div>
        <p class="max-w-sm text-base font-light leading-7 text-gray-300">
          Wilgott focuses on useful products with clear customer problems, durable distribution, and straightforward value.
        </p>
      </div>

      <section class="grid gap-5 md:grid-cols-2" aria-label="Wilgott ventures">
        <article class="rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
          <h2 class="mb-4 text-2xl font-light text-white">
            Klinky
          </h2>
          <p class="mb-5 leading-7 text-gray-300">
            Klinky helps teams manage campaign short links, route traffic between destinations, and compare link performance without adding heavy campaign operations.
          </p>
          <a href="https://klinky.io/features/ab-testing-links" class="text-[#d4af37] underline underline-offset-4 hover:text-white">
            campaign link management and A/B testing links
          </a>
        </article>

        <article class="rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
          <h2 class="mb-4 text-2xl font-light text-white">
            PixelWatch
          </h2>
          <p class="mb-5 leading-7 text-gray-300">
            PixelWatch monitors competitor websites for visual changes across landing pages, pricing pages, and product messaging so teams can spot meaningful shifts faster.
          </p>
          <div class="flex flex-col gap-3">
            <a href="https://pixelwatch.app/" class="text-[#d4af37] underline underline-offset-4 hover:text-white">
              competitor website monitoring
            </a>
            <a href="https://pixelwatch.app/use-cases/competitor-pricing-monitoring/" class="text-[#d4af37] underline underline-offset-4 hover:text-white">
              competitor pricing monitoring
            </a>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import WilgottLogo from '~/components/WilgottLogo.vue'

const siteUrl = 'https://wilgott.com'
const siteDescription = 'Wilgott ventures include practical software products such as Klinky and PixelWatch.'

useHead({
  link: [
    { rel: 'canonical', href: `${siteUrl}/ventures` }
  ]
})

useSeoMeta({
  title: 'Ventures • Wilgott',
  description: siteDescription,
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  ogTitle: 'Ventures • Wilgott',
  ogDescription: siteDescription,
  ogUrl: `${siteUrl}/ventures`,
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Ventures • Wilgott',
  twitterDescription: siteDescription
})
</script>
