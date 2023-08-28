<script setup></script>

<template>
    <div class="section">
        <h1>Projects</h1>

        <div class="language">
            <h2>Python</h2>
            <div class="project-container">
                <div class="project">
                    <h3>Paper-Trader Back End</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>Data Mine</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>Pi-Daily Email</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>Social Media App</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>Chat App</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
            </div>
        </div>

        <div class="language">
            <h2>Javascript</h2>
            <div class="project-container">
                <div class="project">
                    <h3>Paper-Trader Front End</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>Chat App</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>Blockchain Coin-Flip</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>This Website</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
            </div>
        </div>

        <div class="language">
            <h2>Other</h2>
            <div class="project-container">
                <div class="project">
                    <h3>Course Scheduler</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
                </div>
                <div class="project">
                    <h3>Language Learning</h3>

                    Project description

                    <br>

                    <a href="">Github Link>></a>
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

@media only screen and (max-width: 690px) {
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
.project-container:hover .project:hover{
    filter: brightness(100%) grayscale(0);
    background-color: var(--secondary);
    box-shadow: 0 0 0 0;
}

.project-container:hover .project{
    filter: brightness(45%) grayscale(100%);
    /* box-shadow: 0 0 8px 2px #888888; */
}

</style>