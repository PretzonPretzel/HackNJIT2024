<template>
  <div class="item-view-container">
    <div v-if="currentItem" class="item-view">
      <ItemRenderView 
        :file-name="currentItem?.fileName"
        :current-item="currentItem"
      />
      <ItemOptions :options="customizationOptions"/>
    </div>
    <div v-else>Item Not Found</div>
    
    
  </div>
</template>

<script setup lang="ts">
import ItemRenderView from '@/components/ItemRenderView.vue';
import ItemOptions from '@/components/ItemOptions.vue';
import { storeItems } from '@/data/storeItems';
import { computed } from 'vue';

const props = defineProps<{
  id: string
}>()

const currentItem = computed(() => storeItems.find(item => item.id === props.id))
const customizationOptions = computed(() => currentItem.value?.modelData.customizationOptions ?? [])

</script>

<style scoped>
.item-view-container {
  height: calc(100vh - 48px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 1rem;
}
</style>