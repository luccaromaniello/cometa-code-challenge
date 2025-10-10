<script setup lang="ts">
import BaseAvatar from '@components/ui/BaseAvatar.vue'
import starAvatar from '@assets/icons/star.png'

const props = defineProps<{
  avatars: { src: string; alt: string }[]
  primaryText: string
  secondaryText: string
}>()

const visibleAvatars = props.avatars.slice(0, 3)
const hiddenCount = props.avatars.length - 3
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex -space-x-3">
      <BaseAvatar :src="starAvatar" alt="Top-rated" class="bg-primary p-3 z-50" />

      <BaseAvatar
        v-for="(avatar, index) in visibleAvatars"
        :key="index"
        :src="avatar.src"
        :alt="avatar.alt"
        class="border-2 border-white"
        :style="{ zIndex: 40 - index }"
      />

      <div
        v-if="hiddenCount > 0"
        class="w-12 h-12 rounded-full border-2 border-white bg-gray-400 text-white flex items-center justify-center font-semibold text-sm select-none"
        :style="{ zIndex: 0 }"
      >
        +{{ hiddenCount }}
      </div>
    </div>

    <div class="flex flex-col text-sm">
      <p class="font-medium text-neutral-light-purple">
        {{ secondaryText }}
      </p>
      <p class="font-semibold text-neutral-purple">
        {{ primaryText }}
      </p>
    </div>
  </div>
</template>
