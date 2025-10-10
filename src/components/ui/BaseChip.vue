<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import fireEmoji from '@assets/images/fire-emoji.png'

const props = withDefaults(
  defineProps<{
    label: string
    tooltip?: string[]
    type?: 'default' | 'highlight'
  }>(),
  {
    type: 'default',
  },
)
</script>

<template>
  <div
    v-if="props.type === 'highlight'"
    class="p-[1px] rounded-full bg-gradient-to-r from-[#8A05BE] to-[#EE7696]"
  >
    <div
      class="relative group text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap cursor-default"
      :class="[
        props.type === 'highlight'
          ? 'bg-linear-120  from-[#31283D] to-[#371503] flex items-center gap-2 border-1 border-'
          : 'bg-neutral-light-gray text-black',
      ]"
    >
      <template v-if="props.type === 'highlight'">
        <div class="w-3 h-4">
          <img :src="fireEmoji" alt="Fire emoji" />
        </div>
        <span class="bg-linear-90 from-[#EE7696] to-[#F5C32C] bg-clip-text text-transparent">{{
          props.label
        }}</span>
      </template>

      <template v-else>
        {{ props.label }}
      </template>

      <div
        v-if="props.tooltip?.length"
        class="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-pre-line shadow-lg pointer-events-none"
      >
        {{ props.tooltip.join('\n') }}
      </div>
    </div>
  </div>
</template>
