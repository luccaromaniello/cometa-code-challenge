<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '@components/ui/SectionHeading.vue'
import BaseInput from '@components/ui/BaseInput.vue'
import JobList from '@components/content/JobList.vue'

const search = ref('')
</script>

<template>
  <div class="flex flex-col gap-7">
    <SectionHeading type="h4" title="Encontre o trabalho ideal" />
    <BaseInput v-model="search" type="text" placeholder="Buscar" />
    <JobList :search="search" />
  </div>
</template>
