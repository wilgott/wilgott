<template>
  <div class="relative">
    <div
      ref="dockRef"
      class="flex items-center gap-2 rounded-2xl border border-[#2d3e3f]/30 bg-white/10 backdrop-blur-lg px-4 py-3 shadow-2xl"
      style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(16px);"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <a
        v-for="(item, index) in items"
        :key="item.title"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
        :aria-label="item.title"
        class="group relative flex items-center justify-center cursor-pointer rounded-xl border border-[#2d3e3f]/20 bg-white/20 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-[#d4af37]/20 hover:scale-110 hover:shadow-lg"
        :style="{
          width: `${itemSizes[index]}px`,
          height: `${itemSizes[index]}px`,
          transformOrigin: 'center'
        }"
        @mouseenter="() => handleMouseEnter(index)"
      >
        <!-- Tooltip -->
        <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <div class="bg-[#2d3e3f] text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {{ item.title }}
          </div>
        </div>

        <!-- Icon -->
        <div
          v-html="item.iconSvg"
          class="text-[#2d3e3f] transition-all duration-300 flex items-center justify-center"
          :style="{ width: `${Math.max(16, itemSizes[index] * 0.5)}px`, height: `${Math.max(16, itemSizes[index] * 0.5)}px` }"
        ></div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface DockItem {
  title: string
  href: string
  external?: boolean
  iconSvg: string
}

const items: DockItem[] = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/robinwilgott/',
    external: true,
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
  {
    title: 'Twitter',
    href: 'https://x.com/RobinWilgott',
    external: true,
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
  },
  {
    title: 'Email',
    href: 'mailto:robin.wilgott@gmail.com',
    iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>`
  }
]

const dockRef = ref<HTMLElement>()
const itemSizes = ref<number[]>([48, 48, 48])
const hoveredIndex = ref<number>(-1)
const mouseX = ref<number>(0)

const BASE_SIZE = 48
const MAX_SIZE = 64
const INFLUENCE_DISTANCE = 100

const handleMouseMove = (e: MouseEvent) => {
  if (!dockRef.value) return

  const rect = dockRef.value.getBoundingClientRect()
  mouseX.value = e.clientX - rect.left

  updateItemSizes()
}

const handleMouseLeave = () => {
  hoveredIndex.value = -1
  itemSizes.value = items.map(() => BASE_SIZE)
}

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
}

const updateItemSizes = () => {
  if (!dockRef.value) return

  const itemWidth = BASE_SIZE + 8 // including gap

  itemSizes.value = items.map((_, index) => {
    const itemCenterX = (index * itemWidth) + (BASE_SIZE / 2) + 16 // 16px padding
    const distance = Math.abs(mouseX.value - itemCenterX)

    if (distance < INFLUENCE_DISTANCE) {
      const influence = 1 - (distance / INFLUENCE_DISTANCE)
      const scale = 1 + (influence * 0.4) // Max 40% increase
      return Math.min(BASE_SIZE * scale, MAX_SIZE)
    }

    return BASE_SIZE
  })
}
</script>
