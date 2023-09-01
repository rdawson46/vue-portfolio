<script setup>
import Footer from './Footer.vue';

</script>

<template>
    <div class="section">
        <h1>Skills</h1>
        
        <div class="container">

            <div class="field">
                <h2>
                    <i class="fa-solid fa-server"></i>
                    Back End
                </h2>
                <ul>
                    <li>Python <progress max="10" value="7"></progress></li>
                    <li>Flask <progress max="10" value="7"></progress></li>
                    <li>Django</li>
                    <li>JavaScript</li>
                    <li>Express JS</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            <div class="field">
                <h2>
                    <i class="fa-solid fa-desktop"></i>
                    Front End
                </h2>
                <ul>
                    <li>Vue</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>React</li>
                    <li>JQuery</li>
                </ul>
            </div>
            <div class="field">
                <h2>
                    <i class="fa-solid fa-code"></i>
                    Tools
                </h2>
                <ul>
                    <li>Windows and Linux</li>
                    <li>Terminal and CMD</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>JetBrains IDE</li>
                    <li>Chrome Dev Tools</li>
                </ul>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<style scoped>

progress[value]{
    /* background-color: red; */
    fill: red;
}
h1 {
    color: var(--secondary);
}

.section {
    background-color: var(--primary);
    margin: 25px 0 0 0;
    padding: 5px 25px 3.4rem 25px;
    /* padding-bottom: 3.4rem; */
    width: calc(100% - 50px);
    min-height: calc(100vh - 60px);
    height: fit-content;
}

.section::before{
    content: "";
    display: block;
    position: absolute;
    height: 0.25rem;
    left: 0;
    top: 0;
    right: 0;
    background: var(--accent);
}

.container{
    display: flex;
    /* flex-direction: row; */
    flex-wrap: wrap;
    justify-content: space-around;
}

/* .field{
    background-color: var(--background);
    padding: 1rem 2rem;
    border-radius: 1.75rem;
    box-shadow: 0 0 0.5rem 0.25rem #182318;
} */

/* project formatting applied to field */
.field{
    background-color: var(--background);
    border-radius: 1.75rem;
    margin: 0 1rem 1rem 0;
    padding: 0.75rem 1rem;
    transition: all 450ms;
    box-shadow: 0 0 0.5rem 0.25rem #182318;
    overflow-y: hidden;
    overflow-x: hidden;
}


.field i{
    color: var(--accent);
}

ul {
    margin-bottom: 0;
    list-style-type: none;
    padding: 0;
    text-align: center;
}


@media only screen and (max-width: 500px){
    .container{
        flex-direction: column;
        justify-content: center;
    }

    .field{
        width: 15rem;
    }
}

@media (prefers-color-scheme: light) {
    .section {
        color: var(--background);
    }
}
</style>