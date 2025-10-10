<script setup lang="ts">
import BaseCard from '@components/ui/BaseCard.vue'
import gradientPath from '@assets/gradient-path.png'

const props = withDefaults(
  defineProps<{
    gradient?: boolean
    title?: string
    data?: string
    contentPadding?: 'default' | 'none'
  }>(),
  {
    gradient: false,
    contentPadding: 'default',
  },
)
</script>

<template>
  <BaseCard type="custom" class="h-52">
    <div
      class="relative rounded-lg overflow-hidden h-full"
      :class="[
        props.gradient &&
          'bg-linear-270 from-[#EE7696] via-[#8A05BE] to-[#EE7696] border-none shadow-none',
      ]"
    >
      <img
        v-if="props.gradient"
        :src="gradientPath"
        alt="Glow"
        class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      <div class="relative z-10 flex flex-col gap-5 py-8 px-7">
        <h3 v-if="props.title" class="font-medium text-neutral-purple">{{ props.title }}</h3>
        <p v-if="props.data" class="text-2xl font-semibold text-secondary">
          {{ props.data }}
        </p>
      </div>

      <div class="relative z-10" :class="props.contentPadding === 'default' && 'px-7'">
        <slot />
      </div>
    </div>
  </BaseCard>
</template>
