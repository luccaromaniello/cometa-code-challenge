<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { iconMap, iconAltMap } from '@data/icons'

const props = defineProps<{
  icon: keyof typeof iconMap
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const iconSrc = computed(() => iconMap[props.icon])
const altText = computed(() => iconAltMap[props.icon])

function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <button
    @click="handleClick"
    class="flex items-center justify-center rounded-full border border-neutral-light-gray bg-white hover:bg-neutral-light-gray/20 transition-colors w-full h-full min-w-[20px] min-h-[20px]"
  >
    <img :src="iconSrc" :alt="altText" class="h-full w-auto object-contain p-2" />
  </button>
</template>
