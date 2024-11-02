<script setup>
import ItemRenderView from '@/components/ItemRenderView.vue';
</script>

<template>
    <div id="page-root">
        <ItemRenderView />
        <p>This is the ABOUT page!!!</p>
    </div>
</template>

<style scoped>
    #page-root {
        position: relative;
        height: 100vh;
        background-color: #281511;
    }
</style>