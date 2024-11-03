<script setup lang="ts">
import { onMounted } from 'vue';


onMounted( () => {
    let homeLink = document.getElementById('home-link');
    homeLink?.addEventListener("mouseover", function () {
        let gears = document.getElementById('home-gear')
        if (gears == undefined) {
            throw new Error("ah shit")
        } 
        gears.className = "shown"
    })
    homeLink?.addEventListener("mouseleave", function() {
        let gears = document.getElementById('home-gear')
        if (gears == undefined) {
            throw new Error("ah shit")
        }
        gears.className = "hidden"
    })
})
</script>

<template>
    <div id="main-nav">
        <div id="link-div">
            <img src="../assets/gears.gif" id="home-gear" class="shown">
            <RouterLink class="rout-link" id="home-link" to="">Home</RouterLink>
        </div>

        <div id="link-div">
            <RouterLink class="rout-link" to="about" id="about-link">Store</RouterLink>
            <img src="../assets/gears.gif" id="store-gear" class="hidden">
        </div>  
    </div>
</template>

<style scoped>

    #home-gear {
        position: absolute;
        z-index: 1;
        margin-top: -30px;
    }

    #link-div {
        position: relative;
        z-index: 2;
    }
    .shown {
        display: block;
        transform: rotate(270deg);
    }
    .hidden {
        display: none;
        transform: rotate(270deg);
    }
    .rout-link {
        position: relative;
        z-index: 3;
        font-family: "Open Sans", sans-serif;
        color: #F2E8CC;
        font-size: 16px;
        font-weight: 900;
    }
    #main-nav {
        position: relative;
        z-index: 2;
        display: flex;
        height: 64px;
        justify-content: space-around;
        align-items: center;
        background-color: #012B17;
    }
</style>