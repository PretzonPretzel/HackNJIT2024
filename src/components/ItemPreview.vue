<template>
  <div class="preview-container">
    {{ item.modelData.displayName }}
  </div>
</template>

<script setup lang="ts">
import type { StoreItem } from '@/types/types';

const props = defineProps<{
  item: StoreItem
}>()
</script>

<style scoped>
.preview-container {
  cursor: pointer;
}
</style>