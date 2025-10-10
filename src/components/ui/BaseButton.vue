<script setup lang="ts">
import { computed } from 'vue'
import { iconMap, iconAltMap } from '@data/icons'

const props = defineProps<{
  label?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'text'
  icon?: keyof typeof iconMap
}>()

const iconSrc = computed(() => (props.icon ? iconMap[props.icon] : null))
const iconAlt = computed(() => (props.icon ? iconAltMap[props.icon] : ''))

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event)
}

const baseClasses =
  'rounded-full text-sm font-medium transition-all duration-150 inline-flex items-center gap-2 cursor-pointer'

const variantClasses = computed(() => {
  if (props.disabled) return 'opacity-50 cursor-not-allowed pointer-events-none'

  switch (props.variant) {
    case 'secondary':
      return 'bg-white text-black hover:bg-transparent hover:text-white w-full h-full rounded-full flex items-center justify-center px-4 py-2'
    case 'text':
      return 'p-0 bg-transparent text-neutral-gray hover:underline'
    default:
      return 'px-6 py-3 bg-secondary text-white hover:brightness-150 flex items-center justify-center rounded-full'
  }
})
</script>

<template>
  <div
    v-if="props.variant === 'secondary'"
    class="inline-block p-[1px] rounded-full bg-gradient-to-r from-[#8A05BE] to-[#EE7696]"
  >
    <button
      :type="type || 'button'"
      @click="handleClick"
      :disabled="disabled"
      :class="[
        baseClasses,
        variantClasses,
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
      ]"
    >
      <slot>{{ label }}</slot>

      <img v-if="iconSrc" :src="iconSrc" :alt="iconAlt" class="w-5 h-5 object-contain" />
    </button>
  </div>

  <button
    v-else
    :type="type || 'button'"
    @click="handleClick"
    :disabled="disabled"
    :class="[baseClasses, variantClasses]"
  >
    <slot>{{ label }}</slot>

    <img
      v-if="iconSrc"
      :src="iconSrc"
      :alt="iconAlt"
      class="w-5 h-5 object-contain brightness-100 invert"
    />
  </button>
</template>
