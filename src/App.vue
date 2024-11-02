<template>
  <Testing />
  <!-- <div class="text-blue-500">Hello World</div> -->
  <ItemRenderView />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Testing from './components/Navigation.vue';
import ItemRenderView from './components/ItemRenderView.vue';


</script>



<style scoped>

</style>
