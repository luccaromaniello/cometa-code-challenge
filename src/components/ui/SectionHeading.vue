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
      props.type === 'h1' && 'text-4xl',
      props.type === 'h2' && 'text-3xl',
      props.type === 'h3' && 'text-2xl',
      props.type === 'h4' && 'text-xl',
      props.type === 'h5' && 'text-base',
      props.type === 'h6' && 'text-base',
    ]"
  >
    {{ props.title }}
  </component>
</template>
