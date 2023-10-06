<script setup>
import Footer from './Footer.vue';

</script>

<template>
    <div class="section">
        <h1>Skills</h1>
        
        <!-- <div class="container">

            <div class="field">
                <h2>
                    <i class="fa-solid fa-server"></i>
                    Back End
                </h2>
                <ul>
                </ul>
            </div>
            <div class="field">
                <h2>
                    <i class="fa-solid fa-desktop"></i>
                    Front End
                </h2>
            </div>
            <div class="field">
                <h2>
                    <i class="fa-solid fa-code"></i>
                    Tools
                </h2>
                <ul>
                </ul>
            </div> 
        </div>-->
        <ul class="major">
            <li>
                <div class="icon"><i class="fa-solid fa-server"></i></div>
                <div class="descr">
                    <h2 class="title">Back-End</h2>
                    <ul>
                        <li>Python<progress max="10" value="9"></progress></li>
                        <li>Flask<progress max="10" value="8"></progress></li>
                        <li>Django<progress max="10" value="5"></progress></li>
                        <li>JavaScript<progress max="10" value="7"></progress></li>
                        <li>Express JS<progress max="10" value="6"></progress></li>
                        <li>PostgreSQL<progress max="10" value="7"></progress></li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="icon"><i class="fa-solid fa-desktop"></i></div>
                <div class="descr">
                    <div class="title">Front-End</div>
                    <ul>
                        <li>Vue.JS<progress max="10" value="7.5"></progress></li>
                        <li>HTML<progress max="10" value="7"></progress></li>
                        <li>CSS <br><progress max="10" value="6"></progress></li>
                        <li>React<progress max="10" value="6.5"></progress></li>
                        <li>JQuery<progress max="10" value="5"></progress></li>
                    </ul>
                    
                </div>
            </li>
            <li>
                <div class="icon"><i class="fa-solid fa-code"></i></div>
                <div class="descr">
                    <div class="title">Tools</div>
                    <ul>
                        <li>Windows and Linux <progress max="10" value="9"></progress></li>
                        <li>Terminal and CMD <progress max="10" value="7"></progress></li>
                        <li>Firebase <progress max="10" value="5.5"></progress></li>
                        <li>Git <br><progress max="10" value="8"></progress></li>
                        <li>VS Code <progress max="10" value="9"></progress></li>
                        <li>JetBrains IDE <progress max="10" value="7.5"></progress></li>
                        <li>Chrome Dev Tools <progress max="10" value="8"></progress></li>

                    </ul>
                </div>
            </li>
        </ul>
        <!-- <Footer/> -->
    </div>
</template>

<style scoped>
h1 {
    color: var(--secondary);
}

.section {
    background-color: var(--primary);
    margin: 25px 0 0 0;
    padding: 5px 25px 4rem 25px;
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

.major {
    width: min(60rem, 90%);
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    justify-content: center;
    gap: 2rem;
    list-style: none;
}

.major > li {
    max-width: 12rem;
    justify-self: center;
    display: grid;
    grid-template:
    "icon"
    "line"
    "dot"
    "title"
    "descr" 1fr;
    justify-items: center;
    align-items: flex-start;
    text-align: center;
}

.major > li .icon {
    grid-area: icon;
    width: 6rem;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    color: var(--secondary);
    font-size: 2.5rem;
    border: 0.25rem solid var(--accent);
    border-radius: 50%;
    background: var(--background);
    box-shadow: -0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45), inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45);
}

.major > li::before {
    content: "";
    grid-area: line;
    height: 2.5rem;
    border-right: 2px dashed var(--accent);
}

.major > li::after {
    content: "";
    grid-area: dot;
    width: 1rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--secondary);
    justify-self: center;
    margin-bottom: 0.5rem;
}

.major > li .title {
    grid-area: title;
    margin-block: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
}

.descr{
    background-color: var(--background);
    border-radius: 1.75rem;
    padding: 0.75rem 1rem;
    border: 0.25rem solid var(--accent);
    box-shadow: -0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.45), inset -0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.45);
}

@media (prefers-color-scheme: light){
    .descr{
        color: var(--text);
    }

    .major > li .icon{
        background-color: var(--secondary);
        color: var(--accent);
    }
}
</style>