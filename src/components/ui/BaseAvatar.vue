<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>

<template>
  <img :src="src" :alt="alt" class="w-10 h-10 rounded-full object-cover" />
</template>
