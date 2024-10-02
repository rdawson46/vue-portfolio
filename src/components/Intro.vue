<script setup>
import Terminal from './Terminal.vue';
import { onMounted, ref } from 'vue';

const svg = ref(false);
const always = ref(true);


onMounted(()=>{
    const blanket = document.getElementById('blanket');

    setTimeout(()=>{
        svg.value = true;

        blanket.classList.add('clear');
    }, 1750);
});

</script>

<template>
    <div class="background">
        <div id="blanket" class="cover"></div>
        <Terminal/>
    </div>
</template>

<style scoped>
.cover{
    width: 100%;
    height: 100%;
    background-color: var(--background);
    position: absolute;
    z-index: -1;
    transition: all 750ms;
}

.clear{
    background-color: transparent;
}

.background{
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}

.background::before{
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    /*background-image: url('./../assets/low-poly-grid-haikei.svg');*/
    background-image: url('./../assets/blob-scene-haikei.svg');
    background-size: cover;
    background-position: center;
}


h1{
    font-size: 48px;
    margin-bottom: 0;
    margin-top: 32px;
}

h2{
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 32px;
}
</style>
