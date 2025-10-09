<script setup lang="ts">
import CategoryPicker from '@components/content/CategoryPicker.vue'
import JobPicker from '@components/content/JobPicker.vue'
</script>

<template>
  <div class="grid grid-cols-[1fr_1.8fr_1.2fr] gap-5">
    <CategoryPicker />
    <JobPicker />
    <CategoryPicker />
  </div>
</template>
