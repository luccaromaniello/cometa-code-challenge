<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { computed } from 'vue'

import type { Job } from '@/data/jobs'
import { jobs as mockJobs } from '@/data/jobs'
import BaseCard from '@components/ui/BaseCard.vue'
import { formatDateTimeAgo, formatDateLong } from '@utils/date'
import ChipGroup from '@components/ui/ChipGroup.vue'
import BaseAvatar from '@components/ui/BaseAvatar.vue'
import BaseChip from '@components/ui/BaseChip.vue'
import BaseButton from '@components/ui/BaseButton.vue'
import IconButton from '@components/ui/IconButton.vue'

const loading = ref(true)
const jobs = ref<Job[]>([])

const props = defineProps<{
  search: string
}>()

onMounted(() => {
  setTimeout(() => {
    jobs.value = JSON.parse(JSON.stringify(mockJobs))
    loading.value = false
  }, 1000)
})

const filteredJobs = computed(() =>
  jobs.value.filter((job) => job.title.toLowerCase().includes(props.search.toLowerCase())),
)
</script>

<template>
  <div>
    <div v-if="loading" class="text-gray-500 text-sm">Carregando oportunidades...</div>

    <div v-else-if="filteredJobs.length === 0" class="text-gray-500 text-sm">
      Nenhum trabalho encontrado para sua busca.
    </div>

    <div v-else class="grid grid-cols-1 gap-3">
      <BaseCard
        v-for="job in filteredJobs"
        :key="job.id"
        type="custom"
        class="relative overflow-visible"
      >
        <div
          :class="[
            job.profitHighlight
              ? 'h-1 rounded-t-lg w-full bg-linear-270 from-[#EF0F4E] to-[#F5C32C]'
              : 'h-0',
          ]"
        ></div>

        <div
          v-if="job.profitHighlight"
          class="absolute top-[0.5px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 md:left-auto md:right-8 md:translate-x-0"
        >
          <BaseChip type="highlight" label="Alto lucro" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-9 px-8 py-6">
          <div class="flex flex-col gap-2 md:gap-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ job.title }}</h3>
            <span v-if="job.favorite" class="text-yellow-400 text-xl">★</span>
            <p class="text-sm font-medium text-neutral-gray">
              Publicado
              {{ formatDateTimeAgo(job.createdAt) }}
            </p>
          </div>
          <div class="flex flex-row justify-between md:flex-col gap-1 md:text-right">
            <div class="flex flex-col">
              <p class="font-semibold text-neutral-purple">
                R$
                {{ job.salaryRange.from.toLocaleString('pt-BR', { minimumFractionDigits: 0 }) }} -
                {{ job.salaryRange.to.toLocaleString('pt-BR', { minimumFractionDigits: 0 }) }}
              </p>
              <p class="text-sm text-neutral-gray font-medium">{{ job.offers }} propostas</p>
            </div>
            <div class="w-10 h-10 self-start md:self-end md:mt-2">
              <IconButton icon="heart" />
            </div>
          </div>
        </div>

        <div class="flex w-full h-[1px] bg-neutral-light-gray"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 px-8 pb-7 pt-5 gap-4">
          <div
            class="grid grid-cols-1 md:grid-cols-[1fr_2fr] xl:grid-cols-1 2xl:grid-cols-[1fr_2fr] gap-4 md:gap-8 xl:gap-4 2xl:gap-8"
          >
            <div class="flex gap-2 items-center md:items-start">
              <BaseAvatar :src="job.employer.img.src" :alt="job.employer.img.alt" />
              <p class="text-sm font-medium text-black">{{ job.employer.name }}</p>
            </div>

            <div class="flex flex-row gap-2 font-medium text-sm">
              <div class="w-10 h-10">
                <IconButton icon="calendar" :clickable="false" />
              </div>
              <div class="flex flex-col">
                <p class="text-black">{{ formatDateLong(job.deadline) }}</p>
                <p class="text-neutral-gray">Prazo de entrega</p>
              </div>
            </div>
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-[2fr_1fr] xl:grid-cols-1 2xl:grid-cols-[2fr_1fr] gap-4 md:gap-8 xl:gap-4 2xl:gap-8"
          >
            <ChipGroup :tags="job.tags" />
            <BaseButton label="Participar" variant="secondary" />
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
