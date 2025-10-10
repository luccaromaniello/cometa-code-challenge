<script setup lang="ts">
import BaseCard from '@components/ui/BaseCard.vue'
import TestimonialAvatars from '@components/ui/TestimonialAvatars.vue'

import zupiBadge from '@assets/icons/badges/zupi.svg'
import founderBadge from '@assets/icons/badges/founder.svg'

import avatar1 from '@assets/images/avatar-review-1.png'
import avatar2 from '@assets/images/avatar-review-2.png'
import avatar3 from '@assets/images/avatar-ramiro.png'
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <BaseCard title="Saldo disponível" type="highlight" gradient data="R$12.529,24"
      >testes</BaseCard
    >
    <BaseCard title="Visualizações de perfil" type="highlight" data="24">teste</BaseCard>
    <BaseCard title="Avaliações gerais" type="highlight" data="4.9">
      <TestimonialAvatars
        :avatars="[
          { src: avatar1, alt: 'Testimonial Avatar 1' },
          { src: avatar2, alt: 'Testimonial Avatar 2' },
          { src: avatar3, alt: 'Testimonial Avatar 3' },
        ]"
        primaryText="Em diversos países do mundo"
        secondaryText="Recebidas de 40 países"
        class="-mt-2"
      />
    </BaseCard>
    <BaseCard title="Suas conquistas" type="highlight">
      <div class="flex gap-3 -ml-2 h-14">
        <img :src="zupiBadge" alt="Zupi Badge" />
        <img :src="founderBadge" alt="Founder Badge" />
      </div>
    </BaseCard>
  </div>
</template>
