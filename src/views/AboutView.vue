<script setup>
import ItemRenderView from '@/components/ItemRenderView.vue';
</script>

<template>
    <div id="page-root">
        <h1 id="thank-you-for-visiting-our-ins-steampunk-store-ins-">Thank you for visiting our <ins>Steampunk Accesory Store</ins>!</h1>
        <p>This project was created for HackNJIT 2024</p>
        <h2 id="team-members-">Team Members:</h2>
        <ul>
            <li><a href="https://github.com/declanblanc" target="_blank">Declan Blanchard</a></li>
            <li><a href="https://github.com/PretzonPretzel" target="_blank">Preston Khorosh</a></li>
            <li><a href="https://github.com/RealNickTriano" target="_blank">Nicholas Triano</a></li>
            <li><a href="https://github.com/dartsoma" target="_blank">Chad Foster</a></li>
        </ul>
    </div>
</template>

<style scoped>
    h1 {
        font-size: x-large;
        font-weight: 900;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: underline;
        color: #23343E;

    }
    #page-root {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        position: relative;
        height: 100vh;
        background-color: #281511;
    }
</style>