<template>
    <div class="section">
        <h1>Interests</h1>
        <ul class="major">
            <li>
                <div class="icon"><i class="fa-solid fa-server"></i></div>
                <div class="descr">
                    <h2 class="title">Back-End</h2>
                    <ul>
                        <li>Rust</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>PostgreSQL</li>
                        <li>Go</li>
                    </ul>
                </div>
            </li>
            <li>
                <div class="icon"><i class="fa-solid fa-desktop"></i></div>
                <div class="descr">
                    <div class="title">Front-End</div>
                    <ul>
                        <li>Vue.JS</li>
                        <li>HTML</li>
                        <li>CSS </li>
                        <li>React</li>
                        <li>JQuery</li>
                    </ul>
                    
                </div>
            </li>
            <li>
                <div class="icon"><i class="fa-solid fa-code"></i></div>
                <div class="descr">
                    <div class="title">Tools</div>
                    <ul>
                        <li>NixOS/Linux</li>
                        <li>Windows</li>
                        <li>Firebase</li>
                        <li>Neovim</li>
                        <li>Git</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
h1 {
    color: var(--accent);
}

.section {
    margin: 25px 0 25px 0;
    min-height: calc(100vh - 60px);
    height: fit-content;
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
    border: 0.1rem solid var(--accent);
    border-radius: 50%;
    background: var(--primary);
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
    border: 0.1rem solid var(--accent);
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
