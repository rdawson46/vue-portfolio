<script setup></script>

<template>
    <div class="section">
        <h1>Skills</h1>

        <div class="field">
            <h2>
                Back End
                <i class="fa-solid fa-server"></i>
                <i class="fa-solid fa-database"></i>
            </h2>
            <ul>
                <li>Python</li>
                <li>Flask</li>
                <li>Django</li>
                <li>JavaScript</li>
                <li>Express JS</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
        <div class="field">
            <h2>
                Front End
                <i class="fa-solid fa-desktop"></i>
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
                Tools
                <i class="fa-solid fa-terminal"></i>
                <i class="fa-solid fa-code"></i>
                <i class="fa-brands fa-connectdevelop"></i>
                <i class="fa-solid fa-toolbox"></i>
            </h2>
            <ul>
                <li>Windows</li>
                <li>Linux</li>
                <li>Terminal</li>
                <li>CMD</li>
                <li>Firebase</li>
                <li>VS Code</li>
                <li>Git</li>
                <li>Chrome Dev Tools</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

h1{
    color: var(--secondary);
}

.section{
    background-color: var(--primary);
    margin: 25px 0 0 0;
    padding: 5px 25px 0 25px;
    width: calc(100% - 50px);
    min-height: calc(100vh - 60px);
    height: fit-content;
}

@media (prefers-color-scheme: light){
    .section{
        color: var(--background);
    }
}
</style>