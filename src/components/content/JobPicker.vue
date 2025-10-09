<script setup lang="ts">
import SectionHeading from '@components/ui/SectionHeading.vue'
import BaseCard from '@components/ui/BaseCard.vue'
import BaseInput from '@components/ui/BaseInput.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-7">
    <SectionHeading type="h4" title="Encontre o trabalho ideal" />
    <BaseInput type="text" placeholder="R$ 0" />
    <BaseCard>teste</BaseCard>
  </div>
</template>
