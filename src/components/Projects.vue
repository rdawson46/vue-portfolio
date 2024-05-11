<template>
    <div class="section">
        <h1>Projects</h1>
            <div class="language">
                <h2>Python</h2>
                <div class="project-container">
                    <div class="project">
                        <h3>Paper-Trader Back-End <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Built with Flask, PostgreSQL, SocketIO, and the Alpaca Trading API.
                            Allows for users to make accounts and make stocks trades with paper money.
                        </p>

                        <a href="https://github.com/rdawson46/paper-trading" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Data Mine <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Runs with scheduled events to gather stock data, make ML models, makes predictions,
                            and manages a portfolio. Then uses a Flask app to host a dashboard to track progress.
                        </p>

                        <a href="https://github.com/rdawson46/data-mine" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Pi-Daily Email</h3>

                        <p>
                            Uses multiple APIs to format an email every day to send useful information to a list of users.
                        </p>

                        <a href="https://github.com/rdawson46/pi-daily-email" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Social Media App</h3>

                        <p>
                            Built using Django. Users can make accounts, post, follow users, see global feeds, and followed
                            feed.
                        </p>

                        <a href="https://github.com/rdawson46/social-media" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Chat App</h3>

                        <p>
                            Uses a Flask app and SocketIO for users to send group messages in real time.
                        </p>

                        <a href="https://github.com/rdawson46/chatApp" target="_blank">Github >></a>
                    </div>
                </div>
            </div>

            <div class="language">
                <h2>JavaScript</h2>
                <div class="project-container">
                    <div class="project">
                        <h3>Paper-Trader Front-End <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Front end was built using SocketIO to update prices when the user interacts with the app.
                            Used JQuery on some pages to simplify development process.
                        </p>

                        <a href="https://github.com/rdawson46/paper-trading" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Blockchain Coin-Flip <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Project built with Vue.JS. Allows for users to sync MetaMask wallets and then wager on a coin
                            flip.
                            It is a winner take all. Smart contract was made with Solidity.
                        </p>

                        <a href="https://github.com/rdawson46/blockchain-coin" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Chat App</h3>

                        <p>
                            Live time chat app. Front end uses SocketIO to handle all events.
                            Then uses vanilla JS to manipulate the DOM.
                        </p>

                        <a href="https://github.com/rdawson46/chatApp" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>This Website</h3>

                        <p>
                            This site is built using Vue.JS and hosted on Firebase and utilizes other Firebase tools.
                        </p>

                        <a href="https://github.com/rdawson46/vue-portfolio" target="_blank">Github >></a>
                    </div>
                </div>
            </div>

            <div class="language">
                <h2>Others</h2>
                <div class="project-container">
                    <div class="project">
                        <h3>Editor <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Vim like editor written in Rust. Made the UI with Ratatui and wrote the rest
                            from scratch. Currently adding Vim motions.
                        </p>

                        <a href="https://github.com/crooksryan/editor" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Hover Mark <i class="fa-solid fa-star"></i></h3>

                        <p>
                            Neovim plugin written in Lua. Helps display marks in Neovim buffers to help make using marks easier to use.
                        </p>

                        <a href="https://github.com/rdawson46/hover_mark.nvim" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Rust Listener</h3>

                        <p>
                            Project written in Rust to track actions within a current folder or directory. Currently a work in progess, but will be
                            use to track and automate git actions.
                        </p>

                        <a href="https://github.com/rdawson46/rust-listener" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Rust Back End</h3>

                        <p>
                            Social media site written with Rust and React. More of a back end project with using Rust and Postgres.
                        </p>

                        <a href="https://github.com/rdawson46/musical-waffle" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>MinSQL</h3>

                        <p>Simple SQL database written in C. Allows users to insert and query data from the terminal.</p>

                        <a href="https://github.com/rdawson46/minSQL" target="_blank">Github >></a>
                    </div>
                    <div class="project">
                        <h3>Course Scheduler</h3>

                        <p>
                            Made with Java and SQL. Students can register for classes and view schedules.
                            Admins can register students and classes and view student schedules.
                        </p>


                        <a href="https://github.com/rdawson46/CourseScheduler" target="_blank">Github >></a>
                    </div>
                </div>
            </div>

    </div>
</template>

<style scoped>
h2{
    text-align: center;
    letter-spacing: 0.1rem;
    color: var(--secondary);
    margin: 0 20%;
    padding: 0;
    font-size: 2rem;
    border-bottom: 0.1rem solid;
    border-image: linear-gradient(139deg, #c75e38, #de698c, #cb8ece,
        #abb3ec, #a4cfea) 1;
}

.section {
    margin: 3rem 0;
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
    border-radius: 1.75rem;
    border: solid var(--accent) 0.1rem;
    margin: 0 1rem 1rem 0;
    padding: 0.75rem 1rem;
    transition: all 450ms;
    /*box-shadow: 0 0 0.5rem 0.25rem #182318df;*/
}

/*
@media (prefers-color-scheme: light){
    .project{
        color: var(--primary);
    }

    .project:hover{
        color: var(--text);
    }
}
*/

.project h3 {
    margin: 0.5rem 0;
}

.project p {
    margin-top: 0;
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

/*
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
*/

@media only screen and (max-width: 900px) {
    .project-container{
        padding: 1rem 3.5rem;
    }
}

@media only screen and (max-width: 800px) {
    .project-container{
        padding: 1rem 1.75rem;
    }
}

@media only screen and (max-width: 650px) {
    .project-container {
        flex-direction: column;
        padding: 1rem 3rem;
    }

    .project {
        margin: 1rem 0;
    }

    .button-holder {
        padding: 0.5rem 2rem;
    }
}

</style>
