<script setup lang="ts">
import SectionHeading from '@components/ui/SectionHeading.vue'
import BaseCard from '@components/ui/BaseCard.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-7">
    <SectionHeading type="h4" title="Categories" />
    <BaseCard>
      <div>
        <div>
          <SectionHeading type="h5" title="Valor ideal" />
        </div>
        <div>
          <div>
            <SectionHeading type="h5" title="Categorias disponíveis" />
          </div>
          <div></div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
