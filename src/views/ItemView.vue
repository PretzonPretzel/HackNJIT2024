<template>
  <div class="item-view-container">
    <!-- <pre>{{currentItem}}</pre> -->
    <div v-if="currentItem" class="item-view">
      <ItemRenderView 
        :file-name="currentItem?.fileName"
        :current-item="currentItem"
        @set-options="handleSetOptions"
      />
      <ItemOptions :options="currentItem.modelData.customizationOptions" @update-options="handleUpdateOptions"/>
    </div>
    <div v-else>Item Not Found</div>
    
    
  </div>
</template>

<script setup lang="ts">
import ItemRenderView from '@/components/ItemRenderView.vue';
import ItemOptions from '@/components/ItemOptions.vue';
import { storeItems } from '@/data/storeItems';
import { computed, ref, type Ref } from 'vue';
import type { PartCustomizationOption, StoreItem } from '@/types/types';

const props = defineProps<{
  id: string
}>()

const currentItem: Ref<StoreItem | undefined> = ref(storeItems.find(item => item.id === props.id))

function handleUpdateOptions(partName: string, componentName: string, visible: boolean) {
  const component = currentItem.value?.modelData?.customizationOptions?.find(item => item.partName === partName)?.components.find(item => item.name === componentName)
  if (component === undefined) throw new Error("could not find component")
  component.visible = visible
}

function handleSetOptions(options: PartCustomizationOption[]) {
  if (currentItem.value === undefined) throw new Error("Options undefined")
  currentItem.value.modelData.customizationOptions = options
}
</script>

<style scoped>
.item-view-container {
  /* height: calc(100vh - 48px); */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
}

.item-view {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  width: 100%;
  padding: 2rem 2rem;
}
</style>