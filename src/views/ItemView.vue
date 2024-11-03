<template>
  <div class="item-view-container">
    <ItemRenderView 
      v-if="currentItem"
      :file-name="currentItem?.fileName"
    />
    <div v-else>Item Not Found</div>
  </div>
</template>

<script setup lang="ts">
import ItemRenderView from '@/components/ItemRenderView.vue';
import { computed } from 'vue';

const props = defineProps<{
  id: string
}>()

const availableItems = [
  {
    id: "4",
    fileName: "cub"
  },
  {
    id: "1",
    fileName: "steampunkGlasses"
  }
]

const currentItem = computed(() => availableItems.find(item => item.id === props.id))
</script>

<style scoped>
.item-view-container {
  height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>