<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  label: string
  modelValue?: boolean
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isSelected = ref(props.modelValue ?? false)

watch(
  () => props.modelValue,
  (val) => {
    isSelected.value = val ?? false
  },
)

function toggle() {
  if (!props.disabled) {
    isSelected.value = !isSelected.value
    emit('update:modelValue', isSelected.value)
  }
}
</script>

<template>
  <button
    type="button"
    @click="toggle"
    :class="[
      'text-sm min-w-28 w-full px-2 py-4 rounded-lg border transition-colors duration-200 hover:cursor-pointer text-secondary font-medium shadow-[0px_13px_18px_0px_#3E00560D]',
      isSelected
        ? 'bg-primary/15 border-primary/20'
        : 'bg-white text-neutral-800 hover:border-primary border-1 border-neutral-light-gray',
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
  >
    {{ label }}
  </button>
</template>
