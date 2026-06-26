<template>
  <div class="inline-flex items-center justify-center">
    <picture>
      <source srcset="/images/wilgott-logo.webp" type="image/webp">
      <img
        src="/images/wilgott-logo-optimized.png"
        alt="Wilgott - Hearth & Venture"
        :width="size"
        :height="size"
        class="drop-shadow-lg rounded-full object-cover"
        :style="{ width: size + 'px', height: size + 'px' }"
        decoding="async"
        fetchpriority="high"
      />
    </picture>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 120
})
</script>
