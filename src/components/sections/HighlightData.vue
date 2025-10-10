<script setup lang="ts">
import BaseCard from '@components/ui/BaseCard.vue'
import zupiBadge from '@assets/icons/badges/zupi.svg'
import founderBadge from '@assets/icons/badges/founder.svg'
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <BaseCard title="Saldo disponível" type="highlight" gradient data="R$12.529,24"
      >testes</BaseCard
    >
    <BaseCard title="Visualizações de perfil" type="highlight" data="24">teste</BaseCard>
    <BaseCard title="Avaliações gerais" type="highlight" data="4.9">testes</BaseCard>
    <BaseCard title="Suas conquistas" type="highlight">
      <div class="flex gap-3 -ml-2 h-14">
        <img :src="zupiBadge" alt="Zupi Badge" />
        <img :src="founderBadge" alt="Founder Badge" />
      </div>
    </BaseCard>
  </div>
</template>
