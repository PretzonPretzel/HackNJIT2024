<template>
  <Testing />
  <div class="text-blue-500">Hello World</div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Testing from './components/Testing.vue';


</script>



<style scoped>

</style>
