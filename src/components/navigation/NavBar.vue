<script setup lang="ts">
import BaseButton from '@components/ui/BaseButton.vue'
import IconButton from '@components/ui/IconButton.vue'
import BaseDropdown from '@components/ui/BaseDropdown.vue'
import BaseAvatar from '@components/ui/BaseAvatar.vue'

import workzLogo from '@assets/workz-logo.svg'
import userAvatar from '@assets/images/avatar-user.png'

const navItems = [
  {
    hasDropdown: true,
    options: [
      { label: 'Opção 1', value: '1' },
      { label: 'Opção 2', value: '2' },
    ],
  },
  { label: 'Encontre trabalhos', isButton: true },
  {
    label: 'Contrate um profissional',
  },
]
</script>

<template>
  <nav class="flex justify-between items-center">
    <div class="flex items-center gap-8">
      <img :src="workzLogo" alt="Logo" class="h-8" />

      <div class="flex items-center gap-4">
        <template v-for="(item, index) in navItems" :key="index">
          <BaseDropdown v-if="item.hasDropdown" :options="item.options" />
          <BaseButton v-else-if="item.isButton" variant="secondary" :label="item.label" />
          <span v-else class="text-sm font-medium text-black hover:underline cursor-pointer">
            {{ item.label }}
          </span>
        </template>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <IconButton icon="bell" />

      <BaseButton label="Minha lista" variant="secondary" />

      <div class="relative">
        <BaseAvatar :src="userAvatar" alt="Avatar do usuário logado" />
        <span
          class="absolute bottom-0 right-0 block w-3 h-3 bg-light-green border-1 border-white rounded-full"
        ></span>
      </div>
    </div>
  </nav>
</template>
