<script setup lang="ts">

</script>

<template>
    <div id="main-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="">Contact</RouterLink>
        <RouterLink to="">Blog</RouterLink>
    </div>
</template>

<style scoped>
    #main-nav {
        display: flex;
        justify-content: space-around;
        background-color: blue;
    }
</style>