<template>
  <div class="store-view-container">
    <ItemPreview 
      v-for="item in allStoreItems"
      :item="item"
      @click="handlePreviewClick(item.id)"
    />
  </div>
</template>

<script setup lang="ts">
import ItemPreview from '@/components/ItemPreview.vue';
import { storeItems } from '@/data/storeItems';
import type { StoreItem } from '@/types/types';
import { ref } from 'vue';

const allStoreItems = ref(storeItems)

function handlePreviewClick(id: string) {
  // TODO route to item/id
}
</script>

<style scoped>
.store-view-container {
  display: inline-flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 2rem 2rem;
  gap: 2rem;
}
</style>