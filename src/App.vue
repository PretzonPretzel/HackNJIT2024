<template>
  <div style="min-height: 100vh; background-color: #D6B89C;">
    <Testing />
    <RouterView style=" height: 100%;"/>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Testing from './components/Navigation.vue';
import ItemRenderView from './components/ItemRenderView.vue';


</script>



<style scoped>

</style>
