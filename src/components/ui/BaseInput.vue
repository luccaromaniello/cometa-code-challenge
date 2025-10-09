<script setup lang="ts">
import { ref, watch } from 'vue'
import searchIcon from '@assets/icons/search.svg'

const props = defineProps<{
  modelValue: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  id?: string
  disabled?: boolean
  error?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Sync internal model with prop
const modelValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    modelValue.value = val
  },
)

watch(modelValue, (val) => {
  emit('update:modelValue', val)
})
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="relative">
      <input
        :id="id"
        :type="type"
        v-model="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full px-4 py-2 border border-neutral-light-gray rounded-md text-sm text-neutral-800 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent disabled:bg-neutral-100 disabled:cursor-not-allowed placeholder-neutral-dark-grey"
      />
      <img
        :src="searchIcon"
        alt="Search icon"
        class="w-5 h-5 absolute top-1/2 right-4 -translate-y-1/2"
      />
    </div>

    <p v-if="error" class="text-sm text-red-500 mt-1">{{ error }}</p>
  </div>
</template>

<style scoped>
/* You can also extract styling into Tailwind classes */
</style>
