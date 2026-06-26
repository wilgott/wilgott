<template>
  <div class="inline-flex items-center space-x-4">
    <!-- Family Silhouette with Nordic Elements -->
    <div class="relative">
      <svg :width="size" :height="size * 0.8" viewBox="0 0 120 96" class="text-stone-400 dark:text-stone-500">
        <!-- Background Tree/Growth Symbol -->
        <path
          d="M60 85 L60 75 M55 82 L65 82 M50 80 L70 80"
          stroke="currentColor"
          stroke-width="1.5"
          opacity="0.3"
          class="stroke-emerald-600"
        />

        <!-- Family Silhouettes -->
        <!-- Father -->
        <g transform="translate(25, 20)">
          <circle r="8" cx="8" cy="8" fill="currentColor" opacity="0.7" />
          <rect x="2" y="16" width="12" height="20" rx="2" fill="currentColor" opacity="0.7" />
          <rect x="4" y="36" width="3" height="15" fill="currentColor" opacity="0.7" />
          <rect x="9" y="36" width="3" height="15" fill="currentColor" opacity="0.7" />
        </g>

        <!-- Mother -->
        <g transform="translate(45, 22)">
          <circle r="7" cx="7" cy="7" fill="currentColor" opacity="0.7" />
          <path d="M1 14 L13 14 L12 32 L2 32 Z" fill="currentColor" opacity="0.7" />
          <rect x="3" y="32" width="3" height="12" fill="currentColor" opacity="0.7" />
          <rect x="8" y="32" width="3" height="12" fill="currentColor" opacity="0.7" />
        </g>

        <!-- Child 1 -->
        <g transform="translate(70, 35)">
          <circle r="5" cx="5" cy="5" fill="currentColor" opacity="0.6" />
          <rect x="2" y="10" width="6" height="12" rx="1" fill="currentColor" opacity="0.6" />
          <rect x="3" y="22" width="2" height="8" fill="currentColor" opacity="0.6" />
          <rect x="5" y="22" width="2" height="8" fill="currentColor" opacity="0.6" />
        </g>

        <!-- Child 2 -->
        <g transform="translate(85, 37)">
          <circle r="4" cx="4" cy="4" fill="currentColor" opacity="0.6" />
          <rect x="1" y="8" width="6" height="10" rx="1" fill="currentColor" opacity="0.6" />
          <rect x="2" y="18" width="2" height="7" fill="currentColor" opacity="0.6" />
          <rect x="4" y="18" width="2" height="7" fill="currentColor" opacity="0.6" />
        </g>

        <!-- Nordic Rune Elements (subtle) -->
        <g opacity="0.2" class="text-amber-700">
          <!-- Unity Rune -->
          <path d="M10 10 L10 20 M7 13 L13 13" stroke="currentColor" stroke-width="1" />
          <!-- Growth Rune -->
          <path d="M105 15 L105 25 M102 18 L108 22" stroke="currentColor" stroke-width="1" />
        </g>

        <!-- Year 2022 (hidden in design) -->
        <text x="60" y="90" font-family="monospace" font-size="4" fill="currentColor" opacity="0.1" text-anchor="middle">
          MMXXII
        </text>
      </svg>

      <!-- Subtle House/Real Estate Symbol -->
      <div class="absolute -bottom-1 -right-1 w-4 h-4 opacity-20">
        <svg viewBox="0 0 16 16" class="w-full h-full text-emerald-600">
          <path d="M8 1 L15 8 L13 8 L13 15 L3 15 L3 8 L1 8 Z" fill="currentColor" />
        </svg>
      </div>
    </div>

    <!-- Text Component (optional) -->
    <div v-if="showText" class="flex flex-col">
      <span class="text-lg font-bold tracking-widest text-stone-200">WILGOTT</span>
      <span class="text-xs text-amber-700 tracking-widest font-mono">∴ MMXXII ∴</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: number
  showText?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 80,
  showText: false
})
</script>
