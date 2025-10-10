<script setup lang="ts">
import SectionHeading from '@components/ui/SectionHeading.vue'
import BaseCard from '@components/ui/BaseCard.vue'
import BaseInput from '@components/ui/BaseInput.vue'
import BaseButton from '@components/ui/BaseButton.vue'
import CategoryList from '@components/content/CategoryList.vue'
import SelectableButton from '@components/ui/SelectableButton.vue'
</script>

<template>
  <div class="flex flex-col gap-7">
    <SectionHeading type="h4" title="Categories" />
    <BaseCard>
      <div class="flex flex-col gap-7">
        <div class="flex flex-col gap-4">
          <SectionHeading type="h5" title="Valor ideal" />
          <BaseInput type="text" placeholder="R$ 0" />
        </div>
        <div class="flex flex-row justify-between items-center">
          <SectionHeading type="h5" title="Categorias disponíveis" />
          <BaseButton label="Resetar" variant="text" @click="() => {}" />
        </div>
        <CategoryList />
        <div class="flex flex-row justify-between items-center">
          <SectionHeading type="h5" title="Idiomas" />
          <BaseButton label="Resetar" variant="text" @click="() => {}" />
        </div>
        <div class="grid grid-cols-2 2xl:grid-cols-3 gap-3 justify-between items-center">
          <SelectableButton label="Português" />
          <SelectableButton label="English" />
          <SelectableButton label="Spanish" />
        </div>
      </div>
    </BaseCard>
  </div>
</template>
