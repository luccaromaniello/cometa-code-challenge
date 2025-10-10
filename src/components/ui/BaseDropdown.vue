<script setup lang="ts">
import { ref } from 'vue'
import chevronDownIcon from '@assets/icons/chevron-down.svg'

const props = defineProps<{
  options: {
    label: string
    value: string
  }[]
}>()

const emit = defineEmits<{
  (e: 'select', value: string): void
}>()

const isOpen = ref(false)
const selectedLabel = ref(props.options[0]?.label || '')

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: { label: string; value: string }) => {
  selectedLabel.value = option.label
  emit('select', option.value)
  isOpen.value = false
}
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      class="inline-flex items-center gap-1 text-sm font-medium text-neutral-purple hover:underline cursor-pointer"
      @click="toggleDropdown"
    >
      {{ selectedLabel }}
      <img :src="chevronDownIcon" alt="Chevron Down" class="ml-1 w-2 h-2" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-1 w-max min-w-full bg-white border border-neutral-light-gray rounded shadow-lg z-10"
    >
      <ul class="py-1">
        <li
          v-for="(option, index) in props.options"
          :key="index"
          class="hover:bg-neutral-light-gray hover:cursor-pointer"
        >
          <button
            @click="selectOption(option)"
            class="block w-full text-left px-4 py-2 text-sm text-black"
          >
            {{ option.label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
