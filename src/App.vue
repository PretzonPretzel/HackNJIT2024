<template>
  <div style="min-height: 100vh; background-color: #D6B89C;">
    <Navigation />
    <RouterView style=" height: 100%;"/>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ItemRenderView from './components/ItemRenderView.vue';
import Navigation from './components/Navigation.vue';


</script>



<style>

@font-face {

  font-family: 'FabulousSteampunk'; /* Choose a name for your font */

  src: url('../public/fonts/FabulousSteampunk-1rYZ.ttf') format('truetype')

}

</style>
