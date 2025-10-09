<script setup lang="ts">
import gradientPath from '@assets/gradient-path.png'

const props = withDefaults(
  defineProps<{
    type?: 'highlight' | 'default'
    gradient?: boolean
    title?: string
    data?: string
  }>(),
  {
    type: 'default',
    gradient: false,
  },
)
</script>

<template>
  <div
    class="relative rounded-lg overflow-hidden border-1 border-neutral-gray shadow-[0px_13px_18px_0px_#3E00560D]"
    :class="[
      props.type === 'default' ? 'p-6' : `py-8 px-7`,
      props.gradient &&
        'bg-linear-270 from-[#EE7696] via-[#8A05BE] to-[#EE7696] border-none shadow-none',
    ]"
  >
    <img
      v-if="props.gradient"
      :src="gradientPath"
      alt="Glow"
      class="absolute -top-12 left-0 z-0 pointer-events-none"
    />

    <div class="relative z-10 grid grid-cols-1 gap-5">
      <h3 v-if="props.title" class="font-medium text-neutral-purple">{{ props.title }}</h3>
      <p v-if="props.data" class="text-2xl font-semibold text-secondary">
        {{ props.data }}
      </p>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
