// Google Analytics plugin for Nuxt 3
export default defineNuxtPlugin(() => {
  // Only run on client side
  if (import.meta.client) {
    // Check if Google Analytics is already loaded
    if (typeof window !== 'undefined' && window.dataLayer) {
      return
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || []

    // Add gtag function
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args)
    }

    // Load Google Analytics script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-K7C3ZMLKDD'

    script.onload = () => {
      // Configure Google Analytics once script is loaded
      window.gtag('js', new Date())
      window.gtag('config', 'G-K7C3ZMLKDD')
    }

    document.head.appendChild(script)
  }
})
