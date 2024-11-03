<template>
  <div class="options-container">
    <div>Options Menu</div>
    <div v-for="option in options">
      <div class="part-title">Part: {{ option.partName }}</div>
      <div v-for="component in option.components">
        <div class="component-name">{{component.name}}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PartCustomizationOption } from '@/types/types';

const props = defineProps<{
  options: PartCustomizationOption[]
}>()
</script>

<style scoped>
.part-title {
  margin-left: 2rem;
}

.component-name {
  margin-left: 4rem;
}
.options-container {
  border: 2px solid black;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>