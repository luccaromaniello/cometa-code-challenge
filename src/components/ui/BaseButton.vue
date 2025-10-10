<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'text'
}>()

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
      return 'px-4 py-2 bg-gradient-to-r from-[#EF0F4E] to-[#F5C32C] text-white hover:brightness-110 flex items-center justify-center rounded-full'
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
  </button>
</template>
