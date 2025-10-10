<script setup lang="ts">
import CategoryPicker from '@components/content/CategoryPicker.vue'
import JobPicker from '@components/content/JobPicker.vue'
import NegotiationsPicker from '@components/content/NegotiationsPicker.vue'
</script>

<template>
  <div class="grid grid-cols-1 md-grid-cols-2 xl:grid-cols-[1fr_1.8fr_1.2fr] gap-5">
    <CategoryPicker />
    <JobPicker />
    <NegotiationsPicker />
  </div>
</template>
