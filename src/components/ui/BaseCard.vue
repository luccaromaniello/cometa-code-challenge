<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'default' | 'custom'
  }>(),
  {
    type: 'default',
  },
)
</script>

<template>
  <div
    class="relative rounded-lg overflow-hidden border-1 border-neutral-light-gray shadow-[0px_13px_18px_0px_#3E00560D]"
    :class="[props.type === 'default' ? 'p-6' : 'p-0']"
  >
    <slot />
  </div>
</template>
