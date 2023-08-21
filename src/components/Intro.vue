<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    let letters = "ABCDDEFGHIJKLMNOPQRSTUVWXYZ";
    const header = document.getElementById('name')
    let phrase = header.innerHTML;

    // shuffle immediately
    header.innerHTML = header.innerHTML.split('')
            .map(letter => letters[Math.floor(Math.random() * 26)])
            .join('');

    let iterations = 0;

    // iterate and shuffle each letter twice then revealing number and going to next
    const interval = setInterval(() =>{
        header.innerHTML = header.innerHTML.split('')
            .map((letter, index) => {
                if (index < iterations){
                    return phrase[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join('');
        
        if(iterations >= phrase.length) clearInterval(interval);

        iterations += 1/2;
    }, 50);
});
</script>

<template>
    <div class="background">
        <div>
            <h1 id="name">Ryan Crooks</h1>
            <h2>Developer</h2>
        </div>
    </div>
</template>

<style scoped>
.background{
    display: flex;
    place-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}

.background div{
    text-align: center;
    background-color: var(--text);
    color: var(--primary);
    padding: 15px 45px;
    border-radius: 12px;
    opacity: 0.87;
}

.background::before{
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    background-image: url('./../assets/mountain.webp');
    background-size: cover;
    /* opacity: 0.5; */
    filter: grayscale(100%);
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