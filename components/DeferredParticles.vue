<template>
  <ClientOnly>
    <Suspense>
      <template #default>
        <Particles v-if="shouldLoad" />
      </template>
      <template #fallback>
        <!-- Lightweight placeholder while loading -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#2d3e3f] to-[#1a2525]" />
      </template>
    </Suspense>
  </ClientOnly>
</template>

<script setup lang="ts">
const shouldLoad = ref(false)

// Load particles after initial page render to improve FCP/LCP
onMounted(() => {
  // Use requestIdleCallback if available, otherwise setTimeout
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      shouldLoad.value = true
    })
  } else {
    setTimeout(() => {
      shouldLoad.value = true
    }, 100)
  }
})
</script>
