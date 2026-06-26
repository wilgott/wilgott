<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="absolute rounded-full animate-pulse"
      :style="{
        left: particle.x + '%',
        top: particle.y + '%',
        width: particle.size + 'px',
        height: particle.size + 'px',
        backgroundColor: particle.color,
        opacity: particle.opacity,
        animationDelay: particle.delay + 's',
        animationDuration: particle.duration + 's'
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  delay: number
  duration: number
}

const particles = ref<Particle[]>([])
let animationId: number

const colors = ['#d4af37', '#2d3e3f', '#b8860b', '#556b2f'] // Gold and forest green variants

const createParticle = (id: number): Particle => ({
  id,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  color: colors[Math.floor(Math.random() * colors.length)],
  opacity: Math.random() * 0.6 + 0.1,
  delay: Math.random() * 2,
  duration: Math.random() * 3 + 2
})

const initParticles = () => {
  particles.value = Array.from({ length: 50 }, (_, i) => createParticle(i))
}

const animateParticles = () => {
  particles.value.forEach(particle => {
    particle.y -= 0.1
    if (particle.y < -5) {
      particle.y = 105
      particle.x = Math.random() * 100
    }
  })
  animationId = requestAnimationFrame(animateParticles)
}

onMounted(() => {
  initParticles()
  animateParticles()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>
