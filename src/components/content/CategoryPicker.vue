<script setup lang="ts">
import SectionHeading from '@components/ui/SectionHeading.vue'
import BaseCard from '@components/ui/BaseCard.vue'
import BaseInput from '@components/ui/BaseInput.vue'
import BaseButton from '@components/ui/BaseButton.vue'
</script>

<template>
  <div class="grid grid-cols-1 gap-7">
    <SectionHeading type="h4" title="Categories" />
    <BaseCard>
      <div class="flex flex-col gap-7">
        <div class="flex flex-col gap-4">
          <SectionHeading type="h5" title="Valor ideal" />
          <BaseInput placeholder="R$ 0" />
        </div>
        <div>
          <div>
            <div class="flex flex-row justify-between items-center">
              <SectionHeading type="h5" title="Categorias disponíveis" />
              <BaseButton label="Resetar" variant="text" @click="() => {}" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
