<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import BaseChip from '@components/ui/BaseChip.vue'

const props = defineProps<{
  tags: string[]
}>()

const visibleTags = ref<string[]>([])
const hiddenTags = ref<string[]>([])

const containerRef = ref<HTMLElement | null>(null)
const tagRefs = ref<HTMLElement[]>([])

function updateVisibleTags() {
  if (!containerRef.value) return

  const maxWidth = containerRef.value.offsetWidth
  let currentWidth = 0

  const newVisible: string[] = []
  const newHidden: string[] = []

  const plusChipWidth = 40

  for (let i = 0; i < props.tags.length; i++) {
    const el = tagRefs.value[i]
    const tag = props.tags[i]

    if (!el || !tag) continue

    const tagWidth = el.offsetWidth + 8

    if (currentWidth + tagWidth + (props.tags.length - i - 1 > 0 ? plusChipWidth : 0) < maxWidth) {
      currentWidth += tagWidth
      newVisible.push(tag)
    } else {
      newHidden.push(tag)
    }
  }

  visibleTags.value = newVisible
  hiddenTags.value = newHidden
}

function setTagRef(el: HTMLElement | null, index: number) {
  if (el) {
    tagRefs.value[index] = el
  }
}

onMounted(async () => {
  await nextTick()
  updateVisibleTags()
  window.addEventListener('resize', updateVisibleTags)
})

watch(
  () => props.tags,
  async () => {
    await nextTick()
    updateVisibleTags()
  },
)
</script>

<template>
  <!-- Invisible layout for measuring tag widths -->
  <div class="flex flex-wrap gap-2 absolute left-[-9999px] top-0 opacity-0 pointer-events-none">
    <div
      v-for="(tag, index) in props.tags"
      :key="tag"
      :ref="(el) => setTagRef(el as HTMLElement, index)"
    >
      <BaseChip :label="tag" />
    </div>
  </div>

  <!-- Rendered visible tags -->
  <div ref="containerRef" class="flex gap-2 whitespace-nowrap">
    <BaseChip v-for="tag in visibleTags" :key="tag" :label="tag" />

    <!-- +X chip with tooltip for hidden tags -->
    <BaseChip v-if="hiddenTags.length" :label="`+${hiddenTags.length}`" :tooltip="hiddenTags" />
  </div>
</template>
