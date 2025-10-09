<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'highlight' | 'default'
    title: string
    data?: string
  }>(),
  {
    type: 'default',
  },
)
</script>

<template>
  <div
    class="relative rounded-lg py-8 px-7 overflow-hidden"
    :class="[
      props.type === 'default'
        ? 'border-1 border-neutral-gray shadow-[0px_13px_18px_0px_#3E00560D]'
        : `bg-linear-270 from-[#EE7696] via-[#8A05BE] to-[#EE7696]`,
    ]"
  >
    <img
      v-if="props.type === 'highlight'"
      src="../assets/gradient-path.png"
      alt="Glow"
      class="absolute -top-12 left-0 z-0 pointer-events-none"
    />

    <div class="relative z-10 grid grid-cols-1 gap-5">
      <h3 class="font-medium text-neutral-purple">{{ props.title }}</h3>
      <p v-if="props.data" class="text-2xl font-semibold text-secondary">
        {{ props.data }}
      </p>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
