<script setup lang="ts">
const props = defineProps<{
  title: string
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>()
</script>

<template>
  <component
    :is="props.type"
    :class="[
      'text-neutral-purple font-semibold',
      {
        'text-4xl': props.type === 'h1',
        'text-3xl': props.type === 'h2',
        'text-2xl': props.type === 'h3',
        'text-xl': props.type === 'h4',
        'text-lg': props.type === 'h5',
        'text-base': props.type === 'h6',
      },
    ]"
  >
    {{ props.title }}
  </component>
</template>
