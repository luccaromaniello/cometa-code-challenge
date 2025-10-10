<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Negotiation } from '@data/negotiations'
import { negotiations as mockNegotiations } from '@data/negotiations'
import emptyStateImage from '@assets/images/empty-state.png'
import BaseCard from '../ui/BaseCard.vue'

const loading = ref(true)
const negotiations = ref<Negotiation[]>([])

onMounted(() => {
  // api delay simulation
  setTimeout(() => {
    negotiations.value = JSON.parse(JSON.stringify(mockNegotiations))
    loading.value = false
  }, 1000)
})

const hasNegotiations = computed(() => mockNegotiations.length > 0)
</script>

<template>
  <BaseCard type="custom">
    <div v-if="hasNegotiations">
      <div
        v-for="negotiation in mockNegotiations"
        :key="negotiation.id"
        class="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
      >
        <p class="text-sm text-gray-700 font-semibold">Negotiation ID: {{ negotiation.id }}</p>
        <p class="text-sm text-gray-500">Job ID: {{ negotiation.jobID }}</p>
        <p class="text-sm text-gray-500">Status: {{ negotiation.status }}</p>
      </div>
    </div>

    <div
      v-else
      class="flex flex-col items-center justify-center text-center py-10 gap-16 min-h-[480px] overflow-hidden"
    >
      <h2 class="text-xl font-semibold text-neutral-purple px-8">
        Parece que alguém está de boa na lagoa...
      </h2>

      <div class="w-full max-h-96 overflow-hidden flex justify-center">
        <img :src="emptyStateImage" alt="No negotiations" class="w-full h-auto object-cover" />
      </div>
    </div>
  </BaseCard>
</template>
