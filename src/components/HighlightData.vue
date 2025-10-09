<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <BaseCard title="Saldo disponível" type="highlight" gradient data="R$12.529,24"
      >testes</BaseCard
    >
    <BaseCard title="Visualizações de perfil" type="highlight" data="24">teste</BaseCard>
    <BaseCard title="Avaliações gerais" type="highlight" data="4.9">testes</BaseCard>
    <BaseCard title="Suas conquistas" type="highlight"></BaseCard>
  </div>
</template>
