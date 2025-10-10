<script setup lang="ts">
import HighlightCard from '@components/ui/card/HighlightCard.vue'
import TestimonialAvatars from '@components/ui/TestimonialAvatars.vue'

import zupiBadge from '@assets/icons/badges/zupi.svg'
import founderBadge from '@assets/icons/badges/founder.svg'

import avatar1 from '@assets/images/avatar-review-1.png'
import avatar2 from '@assets/images/avatar-review-2.png'
import avatar3 from '@assets/images/avatar-ramiro.png'
import chart from '@assets/chart.svg'
import BaseButton from '../ui/BaseButton.vue'

const walletOptions = [
  { label: 'BRL', value: 'BRL' },
  { label: 'USD', value: 'USD' },
  { label: 'EUR', value: 'EUR' },
]

const profileVisualizationOptions = [
  { label: 'Este mês', value: 'month' },
  { label: 'Este semestre', value: 'semester' },
  { label: 'Este ano', value: 'year' },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
    <HighlightCard
      title="Saldo disponível"
      gradient
      data="R$12.529,24"
      :dropdownOptions="walletOptions"
    >
      <BaseButton label="Solicitar saque" icon="wallet" />
    </HighlightCard>
    <HighlightCard
      title="Visualizações de perfil"
      data="24"
      contentPadding="none"
      :dropdownOptions="profileVisualizationOptions"
    >
      <div class="absolute -bottom-16 left-0 w-full">
        <img :src="chart" alt="Chart placeholder" class="w-full object-contain" />
      </div>
    </HighlightCard>
    <HighlightCard title="Avaliações gerais" data="4.9">
      <TestimonialAvatars
        :avatars="[
          { src: avatar1, alt: 'Testimonial Avatar 1' },
          { src: avatar2, alt: 'Testimonial Avatar 2' },
          { src: avatar3, alt: 'Testimonial Avatar 3' },
        ]"
        primaryText="Em diversos países do mundo"
        secondaryText="Recebidas de 40 países"
      />
    </HighlightCard>
    <HighlightCard title="Suas conquistas">
      <div class="flex gap-3 -ml-2 h-14">
        <img :src="zupiBadge" alt="Zupi Badge" />
        <img :src="founderBadge" alt="Founder Badge" />
      </div>
    </HighlightCard>
  </div>
</template>
