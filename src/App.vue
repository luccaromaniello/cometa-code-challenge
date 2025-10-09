<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div
    class="min-h-screen font-mona bg-primary text-neutral-purple flex flex-col gap-4 items-center pt-4 px-2"
  >
    <img src="./assets/zupi-logo.svg" alt="Zupi Logo" />

    <div class="w-full">
      <RouterView />
    </div>
  </div>
</template>
