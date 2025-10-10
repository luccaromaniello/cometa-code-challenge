<script setup lang="ts">
defineProps<{
  label: string
  tooltip?: string[]
}>()
</script>

<template>
  <div
    class="relative group text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full whitespace-nowrap cursor-default"
  >
    {{ label }}

    <div
      v-if="tooltip?.length"
      class="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-pre-line shadow-lg"
    >
      {{ tooltip.join('\n') }}
    </div>
  </div>
</template>
