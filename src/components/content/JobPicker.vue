<script setup lang="ts">
import SectionHeading from '@components/ui/SectionHeading.vue'
import BaseInput from '@components/ui/BaseInput.vue'
import JobList from '@components/content/JobList.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-7">
    <SectionHeading type="h4" title="Encontre o trabalho ideal" />
    <BaseInput type="text" placeholder="Buscar" />
    <JobList />
  </div>
</template>
