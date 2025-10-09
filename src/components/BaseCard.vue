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
    class="rounded-lg py-8 px-7 overflow-hidden"
    :class="[
      props.type === 'default'
        ? 'border-1 border-neutral-gray shadow-[0px_13px_18px_0px_#3E00560D]'
        : `bg-[url('../assets/gradient-path.svg'),_linear-gradient(250deg,_#EE7696,_#8A05BE,_#EE7696)]
        bg-[position:-40px,0,_center]
        bg-no-repeat
        bg-[length:100%_-360px,_100%_100%]`,
    ]"
  >
    <!-- <img
      src="../assets/gradient-path.svg"
      alt="Gradient path for styling purposes"
      class="absolute top-0 left-0 z-0"
    /> -->

    <h3 class="font-medium text-neutral-purple">{{ props.title }}</h3>
    <slot />
  </div>
</template>

<style scoped></style>
