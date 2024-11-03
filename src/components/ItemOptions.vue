<template>
  <div class="options-container">
    <div class="option" v-for="option in options">
      <div class="part-title">{{ option.partName }}</div>
      <div class="components-container">
        <div class="checkbox-option" v-for="component in option.components">
          <input type="checkbox" @input="(e: Event) => emit('update-options', option.partName, component.name, e.target.checked)" :checked="component.visible">
          <div class="component-name">{{component.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PartCustomizationOption } from '@/types/types';
import { useVModel } from '@vueuse/core';

const props = defineProps<{
  options: PartCustomizationOption[]
}>()

const emit = defineEmits<{
  (e: 'update-options', partName: string, componentName: string, visible: boolean): void
}>()

// const _options = useVModel(props, 'options', emit)


</script>

<style scoped>
.option {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
}

.checkbox-option {
  display: flex;
  gap: 0.5rem;
}

.components-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding: 1rem 1rem;
}

.part-title {
  font-size: 18px;
  font-weight: 600;
}

.component-name {
  font-size: 14px;
  font-weight: 600;
}
.options-container {
  /* border: 2px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}
</style>