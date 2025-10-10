<script setup lang="ts">
import SectionHeading from '@components/ui/SectionHeading.vue'
import NegotiationList from './NegotiationList.vue'
</script>

<template>
  <div class="flex flex-col gap-7">
    <SectionHeading type="h4" title="Suas negociações" />
    <NegotiationList />
  </div>
</template>
