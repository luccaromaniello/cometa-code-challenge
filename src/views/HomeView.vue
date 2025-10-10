<script setup lang="ts">
import Highlights from '@components/sections/HighlightData.vue'
import Content from '@components/sections/ContentData.vue'
import NavBar from '@/components/navigation/NavBar.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col gap-12 py-5 px-4 w-full rounded-t-xl bg-white text-neutral-purple"
  >
    <NavBar />
    <main class="grid grid-cols-1 gap-20">
      <Highlights />
      <Content />
    </main>
  </div>
</template>
