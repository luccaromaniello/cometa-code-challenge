<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Category } from '@data/categories'
import { categories as mockCategories } from '@data/categories'

const loading = ref(true)
const categories = ref<Category[]>([])

onMounted(() => {
  // api delay simulation
  setTimeout(() => {
    categories.value = JSON.parse(JSON.stringify(mockCategories))
    loading.value = false
  }, 1000)
})

function toggleCategory(category: Category) {
  category.selected = !category.selected

  if (category.children) {
    category.children.forEach((child) => {
      child.selected = category.selected
    })
  }
}
</script>

<template>
  <div class="text-secondary font-medium">
    <div v-if="loading" class="text-gray-500 text-sm">Carregando categorias...</div>

    <ul v-else class="space-y-2">
      <li v-for="(category, index) in categories" :key="index">
        <label class="flex justify-between items-center gap-2 cursor-pointer">
          <span class="text-sm">{{ category.name }}</span>
          <input
            type="checkbox"
            v-model="category.selected"
            @change="toggleCategory(category)"
            class="accent-primary/15"
          />
        </label>

        <!-- Children -->
        <ul v-if="category.children?.length" class="ml-6 mt-1 space-y-1">
          <li v-for="(child, cIndex) in category.children" :key="cIndex">
            <label class="flex justify-between items-center gap-2 cursor-pointer">
              <span class="text-sm">{{ child.name }}</span>
              <input type="checkbox" v-model="child.selected" class="accent-primary/15" />
            </label>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
