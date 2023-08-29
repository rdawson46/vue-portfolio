<script setup>
import { ref } from 'vue';


const index = ref(0);

</script>

<template>
    <div class="section">
        <h1>Projects</h1>

        <button @click="index=0">Python</button>
        <button @click="index=1">Javascript</button>
        <button @click="index=2">Other</button>


        <div class="language" v-if='index == 0'>
            <h2>Python</h2>
            <div class="project-container" >
                <div class="project" >
                    <h3>Paper-Trader</h3>

                    <p>
                        Built with Flask, PostgreSQL, and the Alpaca Trading API.
                        Allows for users to make accounts and make stocks trades with paper money.
                    </p>

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>Data Mine</h3>

                    <p>
                        Runs with scheduled events to gather stock data, make ML models, makes predictions,
                        and manages a portfolio. Then uses a Flask app to host a dashboard to track progress.
                    </p>

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>Pi-Daily Email</h3>

                    <p>
                        Uses multiple APIs to format an email every day to send useful information to a list of users.
                    </p>

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>Social Media App</h3>

                    <p>
                        Built using Django. Users can make accounts, post, follow users, see global feeds, and followed feed.
                    </p>

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>Chat App</h3>

                    <p>Uses a Flask app and SocketIO for users to send group messages in real time.</p>

                    <a href="">Github >></a>
                </div>
            </div>
        </div>

        <div class="language" v-if='index == 1'>
            <h2>Javascript</h2>
            <div class="project-container">
                <div class="project">
                    <h3>Paper-Trader Front End</h3>

                    Project description

                    <br>

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>Chat App</h3>

                    Project description

                    <br>

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>Blockchain Coin-Flip</h3>

                    Project description

                    <br>

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>This Website</h3>

                    Project description

                    <br>

                    <a href="">Github >></a>
                </div>
            </div>
        </div>

        <div class="language" v-if='index == 2'>
            <h2>Other</h2>
            <div class="project-container">
                <div class="project">
                    <h3>Course Scheduler</h3>

                    <p>Made with Java and SQL.</p>
                    

                    <a href="">Github >></a>
                </div>
                <div class="project">
                    <h3>Language Learning</h3>

                    <p>Currently leanring Rust.</p>

                    <br>

                    <a href="">Github >></a>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
h1 {
    color: var(--accent);
}

.section {
    margin: 25px 0;
    padding: 0 25px;
    width: calc(100% - 50px);
    min-height: calc(100vh - 60px);
    height: fit-content;
}

.project-container {
    display: flex;
    flex-wrap: wrap;
}

.project {
    background-color: var(--primary);
    border-radius: 8px;
    margin: 0 1rem 1rem 0;
    padding: 0.75rem 1rem;
    transition: all 350ms;
}

.project h3{
    margin: 0.5rem 0;
}


@media only screen and (min-width: 650px) {
    .project{
        width: 15rem;
    }

    .project-container:hover .project:hover{
        filter: brightness(100%) grayscale(0);
        background-color: var(--secondary);
        box-shadow: 0 0 0 0;
        scale: 115%;
        z-index: 10;
    }

    /* .project-container:hover .project{ */
        /* filter: brightness(45%) grayscale(100%); */
        /* box-shadow: 0 0 4px 1px #888888;  */
        /* scale: 90%;  */
    /* } */
}

@media only screen and (max-width: 300px) {
    .project-container{
        flex-direction: column;
    }

    .project{
        margin: 1rem 0;
    }
}


a {
    background-image: linear-gradient(to right,
            var(--accent),
            var(--accent) 50%,
            var(--text) 50%);
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    position: relative;
    background-clip: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3 ease-in-out;
}

a:before {
    content: '';
    background: var(--accent);
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
}

a:hover {
    background-position: 0;
}

a:hover:before {
    width: 100%;
}

@media (prefers-color-scheme: light) {
    .filledNav svg {
        fill: var(--secondary);
    }

    .filledNav li a {
        background-image: linear-gradient(to right,
                var(--accent),
                var(--accent) 50%,
                var(--secondary) 50%);
    }
}


</style>