<script setup lang="ts">
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
</script>

<template>
  <button
    :type="type || 'button'"
    @click="handleClick"
    :disabled="disabled"
    :class="[
      'rounded-md text-sm font-medium transition-all duration-150 hover:cursor-pointer',
      {
        'px-4 py-2 bg-primary text-white hover:bg-primary/90': variant === 'primary',

        'px-4 py-2 bg-transparent text-primary border border-primary hover:bg-primary/5':
          variant === 'secondary',

        'p-0 bg-transparent text-neutral-gray hover:underline': variant === 'text',

        'opacity-50 cursor-not-allowed pointer-events-none': disabled,
      },
    ]"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
