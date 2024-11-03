<template>
  <div class="item-view-container">
    <ItemRenderView 
      v-if="currentItem"
      :file-name="currentItem?.fileName"
      :current-item="currentItem"
    />
    <div v-else>Item Not Found</div>
  </div>
</template>

<script setup lang="ts">
import ItemRenderView from '@/components/ItemRenderView.vue';
import { storeItems } from '@/data/storeItems';
import { computed } from 'vue';

const props = defineProps<{
  id: string
}>()

const currentItem = computed(() => storeItems.find(item => item.id === props.id))

</script>

<style scoped>
.item-view-container {
  height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>