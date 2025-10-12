import { ref, computed } from 'vue'
import type { Category } from '@/data/categories'

const selectedCategories = ref<Category[]>([])

export function useCategories() {
  const getSelectedCategoryNames = computed(() => {
    const allCategoryNames: string[] = []

    selectedCategories.value.forEach((category) => {
      if (!category.isMaster && category.selected) {
        allCategoryNames.push(category.name)

        if (category.children) {
          category.children.forEach((child) => {
            if (child.selected) {
              allCategoryNames.push(child.name)
            }
          })
        }
      }
    })

    return allCategoryNames
  })

  const isAllCategoriesSelected = computed(() => {
    const masterCategory = selectedCategories.value.find((cat) => cat.isMaster)
    return masterCategory?.selected || selectedCategories.value.length === 0
  })

  const hasAnySelectedCategories = computed(() => {
    return selectedCategories.value.some((cat) => !cat.isMaster && cat.selected)
  })

  const setCategories = (categories: Category[]) => {
    selectedCategories.value = categories
  }

  const updateCategorySelection = (updatedCategories: Category[]) => {
    selectedCategories.value = updatedCategories
  }

  const resetCategories = () => {
    selectedCategories.value.forEach((category) => {
      if (category.isMaster) {
        category.selected = true
      } else {
        category.selected = true
        if (category.children) {
          category.children.forEach((child) => {
            child.selected = true
          })
        }
      }
    })
  }

  return {
    selectedCategories,
    getSelectedCategoryNames,
    isAllCategoriesSelected,
    hasAnySelectedCategories,
    setCategories,
    updateCategorySelection,
    resetCategories,
  }
}
