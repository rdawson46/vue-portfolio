<script setup>
import { ref } from 'vue';
const index = ref(0);
</script>

<template>
    <div class="section">
        <h1>Projects</h1>

        <div class="button-holder">
            <button @click="index=0" :class="{ selected: index == 0 }">Python</button>
            <button @click="index=1" :class="{ selected: index == 1 }">Javascript</button>
            <button @click="index=2" :class="{ selected: index == 2 }">Other</button>
        </div>

        <Transition name="fade" mode="out-in">
            <div class="language" v-if='index == 0'>
                <div class="project-container">
                    <div class="project">
                        <h3>Paper-Trader Back-End <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Built with Flask, PostgreSQL, SocketIO, and the Alpaca Trading API.
                            Allows for users to make accounts and make stocks trades with paper money.
                        </p>

                        <a href="https://github.com/rdawson46/paper-trading">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Data Mine <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Runs with scheduled events to gather stock data, make ML models, makes predictions,
                            and manages a portfolio. Then uses a Flask app to host a dashboard to track progress.
                        </p>

                        <a href="https://github.com/crooksryan/data-mine">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Pi-Daily Email</h3>

                        <p>
                            Uses multiple APIs to format an email every day to send useful information to a list of users.
                        </p>

                        <a href="https://github.com/rdawson46/pi-daily-email">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Social Media App</h3>

                        <p>
                            Built using Django. Users can make accounts, post, follow users, see global feeds, and followed
                            feed.
                        </p>

                        <a href="https://github.com/crooksryan/social-media">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Chat App</h3>

                        <p>
                            Uses a Flask app and SocketIO for users to send group messages in real time.
                        </p>

                        <a href="https://github.com/rdawson46/chatApp">Github >></a>
                    </div>
                </div>
            </div>

            <div class="language" v-else-if='index == 1'>
                <div class="project-container">
                    <div class="project">
                        <h3>Paper-Trader Front-End <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Front end was built using SocketIO to update prices when the user interacts with the app.
                            Used JQuery on some pages to simplify development process.
                        </p>

                        <a href="https://github.com/rdawson46/paper-trading">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Blockchain Coin-Flip <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Project built with Vue.JS. Allows for users to sync MetaMask wallets and then wager on a coin
                            flip.
                            It is a winner take all. Smart contract was made with Solidity.
                        </p>

                        <a href="https://github.com/crooksryan/blockchain-coin">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Chat App</h3>

                        <p>
                            Live time chat app. Front end uses SocketIO to handle all events.
                            Then uses vanilla JS to manipulate the DOM.
                        </p>

                        <a href="https://github.com/rdawson46/chatApp">Github >></a>
                    </div>
                    <div class="project">
                        <h3>This Website</h3>

                        <p>
                            This site is built using Vue.JS and hosted on Firebase and utilizes other Firebase tools.
                        </p>

                        <a href="https://github.com/crooksryan/vue-portfolio">Github >></a>
                    </div>
                </div>
            </div>

            <div class="language" v-else-if='index == 2'>
                <div class="project-container">
                    <div class="project">
                        <h3>Course Scheduler</h3>

                        <p>
                            Made with Java and SQL. Students can register for classes and view schedules.
                            Admins can register students and classes and view student schedules.
                        </p>


                        <a href="https://github.com/rdawson46/CourseScheduler">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Language Learning</h3>

                        <p>
                            Repository to track progress when learning a new language.
                            Currently leanring Rust. Planning on learning Go and Zig.
                        </p>

                        <a href="https://github.com/crooksryan/language-learning">Github >></a>
                    </div>
                </div>
            </div>
        </Transition>

    </div>
</template>

<style scoped>
h1 {
    color: var(--accent);
}

.section {
    margin: 25px 0;
    /*padding: 0 25px;*/
    /*width: calc(100% - 50px);*/
    min-height: calc(100vh - 60px);
    height: fit-content;
}

.project-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem 7rem;
}

.project {
    background-color: var(--primary);
    border-radius: 1.75rem;
    margin: 0 1rem 1rem 0;
    padding: 0.75rem 1rem;
    transition: all 450ms;
    box-shadow: 0 0 0.5rem 0.25rem #182318df;
}

@media (prefers-color-scheme: light){
    .project{
        color: var(--background);
    }

    .project:hover{
        color: var(--text);
    }
}

.project h3 {
    margin: 0.5rem 0;
}


@media only screen and (min-width: 650px) {
    .project {
        width: 18rem;
    }

    .project-container:hover .project:hover {
        filter: brightness(100%) grayscale(0);
        background-color: var(--secondary);
        box-shadow: 0 0 0 0;
        scale: 115%;
        z-index: 10;
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
    .project a {
        background-image: linear-gradient(to right,
            var(--accent),
            var(--accent) 50%,
            var(--secondary) 50%);
    }

    .project:hover a {
        background-image: linear-gradient(to right,
            var(--accent),
            var(--accent) 50%,
            var(--primary) 50%);
    }
}

.button-holder {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 7rem;
    align-items: center;
}

button {
    flex: 1;
    position: relative;
    padding-left: auto;
    padding-right: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;  
    /* border: 2px solid #f2f2f2; */
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    /* box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.1); */
    color: var(--text);
    background: transparent;
    overflow: hidden;
    transition: all 300ms ease-out;
}

button::before,
button::after {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
}

button::after {
    height: 0;
    background-color: var(--accent);
    transition: height 500ms ease;
    z-index: -1;
}

button::before {
    background-color: var(--secondary);
    height: 100%;
    z-index: -2;
}

button:hover {
    color: var(--background);
    transition: 0.5s ease;
}

button:hover::after {
    height: 100%;
}

button:nth-of-type(1) {
    /* border-radius: 6px 0 0 6px; */
    border-radius: 1.75rem 0 0 1.75rem;
    border-top: 2px solid var(--primary);
    border-left: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
}

button:nth-of-type(2) {
    border: 2px solid var(--primary);
    /* border-left: 2px solid var(--primary); */
}

button:nth-of-type(3) {
    /* border-radius: 0 6px 6px 0; */
    border-radius: 0 1.75rem 1.75rem 0;
    border-top: 2px solid var(--primary);
    border-right: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
}

.selected {
    background-color: var(--accent);
    color: var(--background);
}

.fade-enter-active,
.fade-leave-active {
    transition: all 250ms;
}

.fade-enter-active, .fade-enter-from{
    transition-delay:  150ms;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

@media only screen and (max-width: 650px) {
    .project-container {
        flex-direction: column;
    }

    .project {
        margin: 1rem 0;
    }

    .project-container {
        padding: 1rem 3rem;
    }

    .button-holder {
        padding: 0.5rem 2rem;
    }
}

</style>
