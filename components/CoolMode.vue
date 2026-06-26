<template>
  <div
    @click="triggerCoolMode"
    class="relative cursor-pointer transition-transform duration-200 hover:scale-105"
    data-clickable="true"
  >
    <slot />

    <!-- Cool Mode Effects -->
    <div
      v-for="effect in effects"
      :key="effect.id"
      class="absolute pointer-events-none z-20"
      :style="{
        left: effect.x + 'px',
        top: effect.y + 'px',
        transform: `translate(-50%, -50%) rotate(${effect.rotation}deg) scale(${effect.scale})`,
        opacity: effect.opacity,
        transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }"
    >
      <div
        class="w-4 h-4 rounded-full shadow-lg"
        :style="{
          backgroundColor: effect.color,
          boxShadow: `0 0 10px ${effect.color}40`
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Effect {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  opacity: number
  color: string
}

const effects = ref<Effect[]>([])
let effectId = 0

// Enhanced Nordic color palette with more vibrant options
const colors = [
  '#d4af37', // Gold
  '#f4d03f', // Bright gold
  '#2d3e3f', // Forest green
  '#4a5d5e', // Sage green
  '#85929e', // Silver
  '#ffd700', // Bright gold
  '#228b22'  // Forest green variant
]

const triggerCoolMode = (event: MouseEvent) => {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  // Create more effects for better visual impact
  for (let i = 0; i < 20; i++) {
    const angle = (i / 20) * Math.PI * 2
    const distance = 30 + Math.random() * 20

    const effect: Effect = {
      id: effectId++,
      x: centerX + Math.cos(angle) * 10,
      y: centerY + Math.sin(angle) * 10,
      rotation: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.4,
      opacity: 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    }

    effects.value.push(effect)

    // Animate the effect outward
    setTimeout(() => {
      const effectIndex = effects.value.findIndex(e => e.id === effect.id)
      if (effectIndex !== -1) {
        effects.value[effectIndex].x += Math.cos(angle) * (100 + Math.random() * 100)
        effects.value[effectIndex].y += Math.sin(angle) * (100 + Math.random() * 100) - 50 // Add some upward movement
        effects.value[effectIndex].scale = 0.2
        effects.value[effectIndex].opacity = 0
        effects.value[effectIndex].rotation += 180
      }
    }, 100)

    // Remove effect after animation
    setTimeout(() => {
      const effectIndex = effects.value.findIndex(e => e.id === effect.id)
      if (effectIndex !== -1) {
        effects.value.splice(effectIndex, 1)
      }
    }, 900)
  }
}
</script>
