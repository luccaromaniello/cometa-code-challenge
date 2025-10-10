<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue'
import { iconMap, iconAltMap } from '@data/icons'

const props = withDefaults(
  defineProps<{
    icon: keyof typeof iconMap
    clickable?: boolean
  }>(),
  {
    icon: 'search',
    clickable: true,
  },
)

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
    class="flex items-center justify-center rounded-full border border-neutral-light-gray bg-white hover:bg-neutral-light-gray/20 transition-colors min-w-[20px] min-h-[20px]"
    :class="[
      props.clickable &&
        'cursor-pointer hover:bg-gradient-to-r hover:from-[#8A05BE] hover:to-[#EE7696] hover:border-primary ',
    ]"
  >
    <img
      :src="iconSrc"
      :alt="altText"
      class="h-10 w-10 object-contain p-2"
      :class="[props.clickable && 'hover:brightness-100 hover:invert']"
    />
  </button>
</template>
