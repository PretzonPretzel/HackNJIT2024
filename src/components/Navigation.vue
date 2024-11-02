<script setup lang="ts">

</script>

<template>
    <div id="main-nav">
        <RouterLink class="rout-link" to="/">Home</RouterLink>
        <RouterLink class="rout-link" to="/about">About</RouterLink>
        <RouterLink class="rout-link" to="">Contact</RouterLink>
        <RouterLink class="rout-link" to="">Blog</RouterLink>
    </div>
</template>

<style scoped>
    .rout-link {
        font-family: "Open Sans", sans-serif;
        color: #F2E8CC;
        font-size: 16px;
        font-weight: 900;
    }
    #main-nav {
        display: flex;
        height: 48px;
        justify-content: space-around;
        align-items: center;
        background-color: #422B23;
    }
</style>