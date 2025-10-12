<script setup lang="ts">
import CategoryPicker from '@components/content/CategoryPicker.vue'
import JobPicker from '@components/content/JobPicker.vue'
import NegotiationsPicker from '@components/content/NegotiationsPicker.vue'
import { ref, watch } from 'vue'

const categoryPickerRef = ref()

const selectedCategories = ref<number[]>([])

watch(
  () => categoryPickerRef.value?.selectedCategories,
  (newVal) => {
    selectedCategories.value = newVal || []
  },
  { immediate: true, deep: true },
)
</script>

<template>
  <div class="grid grid-cols-1 md-grid-cols-2 xl:grid-cols-[1fr_1.8fr_1.2fr] gap-5">
    <CategoryPicker ref="categoryPickerRef" />
    <JobPicker :selectedCategories="selectedCategories" />
    <NegotiationsPicker />
  </div>
</template>
