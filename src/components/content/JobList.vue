<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Job } from '@/data/jobs'
import { jobs as mockJobs } from '@/data/jobs'
import BaseCard from '@components/ui/BaseCard.vue'
import { formatDate } from '@utils/date'
import ChipGroup from '@components/ui/ChipGroup.vue'
import BaseAvatar from '@components/ui/BaseAvatar.vue'
import BaseChip from '@components/ui/BaseChip.vue'

const loading = ref(true)
const jobs = ref<Job[]>([])

onMounted(() => {
  setTimeout(() => {
    jobs.value = JSON.parse(JSON.stringify(mockJobs))
    loading.value = false
  }, 1000)
})
</script>

<template>
  <div>
    <div v-if="loading" class="text-gray-500 text-sm">Carregando oportunidades...</div>

    <div v-else class="grid grid-cols-1 gap-3">
      <BaseCard v-for="job in jobs" :key="job.id" type="custom">
        <div
          v-if="job.profitHighlight"
          class="h-1 rounded-t-lg w-full bg-linear-270 from-[#EF0F4E] to-[#F5C32C]"
        ></div>

        <div v-if="job.profitHighlight">
          <BaseChip type="highlight" label="Alto lucro" />
        </div>

        <div class="grid grid-cols-[2fr_1fr] gap-9 px-8">
          <div class="flex flex-col gap-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ job.title }}</h3>
            <span v-if="job.favorite" class="text-yellow-400 text-xl">★</span>
            <p class="text-sm font-medium text-neutral-gray">
              Publicado
              {{ formatDate(job.createdAt) }}
            </p>
          </div>
          <div class="flex flex-col gap-1 text-right">
            <p class="font-semibold text-neutral-purple">
              R$ {{ job.salaryRange.from.toLocaleString() }} -
              {{ job.salaryRange.to.toLocaleString() }}
            </p>
            <p class="text-sm text-neutral-gray font-medium">{{ job.offers }} propostas</p>
          </div>
        </div>

        <div class="flex w-full h-[1px] bg-neutral-light-gray"></div>

        <div class="grid grid-cols-2 px-8 pb-7">
          <div class="grid grid-cols-2">
            <div class="flex gap-2">
              <BaseAvatar :src="job.employer.img.src" :alt="job.employer.img.alt" />
              <p class="text-sm font-medium text-black">{{ job.employer.name }}</p>
            </div>

            <div class="flex flex-col gap-1 font-medium text-sm">
              <p class="text-black">{{ formatDate(job.deadline) }}</p>
              <p class="text-neutral-gray">Prazo de entrega</p>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <div>
              <ChipGroup :tags="job.tags" />
            </div>

            <div>
              <p>tette</p>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
