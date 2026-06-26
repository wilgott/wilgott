<template>
  <component
    :is="tag"
    :class="className"
  >
    {{ displayedText }}
    <span
      v-if="showCursor && !isComplete"
      class="animate-pulse text-yellow-400"
    >|</span>
  </component>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

interface Props {
  text: string
  duration?: number
  delay?: number
  tag?: string
  className?: string
  showCursor?: boolean
  startOnView?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  duration: 100,
  delay: 0,
  tag: 'div',
  className: '',
  showCursor: true,
  startOnView: false
})

const displayedText = ref('')
const isComplete = ref(false)
const started = ref(false)

const startTyping = () => {
  if (started.value) return
  started.value = true

  let currentIndex = 0

  const typeNextCharacter = () => {
    if (currentIndex < props.text.length) {
      displayedText.value = props.text.slice(0, currentIndex + 1)
      currentIndex++
      setTimeout(typeNextCharacter, props.duration)
    } else {
      isComplete.value = true
      if (props.showCursor) {
        setTimeout(() => {
          isComplete.value = true
        }, 1000)
      }
    }
  }

  setTimeout(typeNextCharacter, props.delay)
}

onMounted(() => {
  if (!props.startOnView) {
    startTyping()
  }
})

watch(() => props.text, () => {
  displayedText.value = ''
  isComplete.value = false
  started.value = false
  if (!props.startOnView) {
    startTyping()
  }
})
</script>
