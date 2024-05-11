<script setup>
import { ref } from 'vue';

const exp_ind = ref(0);


</script>

<template>
    <div class="section">
        <h1>Resume</h1>
        <div class="grid">
            <div class="box education">
                <h2 class="title">Education</h2>
                <h3 class="sub-title">Pennsylvania State University</h3>
                <ul>
                    <li>Computer Science, B.S.</li>
                    <li>Graduation Date: May 2024</li>
                </ul>
            </div>
            <div class="box courses">
                <h2 class="title">Relevant Courses</h2>
                <ul>
                    <li>Systems Programming</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Web Development</li>
                    <li>Programming Language Concepts</li>
                    <li>Operating Systems Design</li>
                    <li>Numerical Computations</li>
                    <li>Compiler Construction</li>
                    <li>Programming Models for Big Data</li>
                </ul>
            </div>
            <div class="box contact">
                <h2 class="title">Contact</h2>
                <p>
                    I can be best reached on my LinkedIn page: 
                    <br>
                    <a href="https://www.linkedin.com/in/ryan-crooks/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>

                </p>
            </div>
            <div class="box experience">
                <h2 class="title">Experience</h2>

                <Transition name='fade' mode='out-in'>
                    <div v-if='exp_ind == 0'>
                        <h3 class="sub-title">BNY Mellon</h3>
                        <h4 class="job-title"> Data Science Analyst Program</h4>
                        <ul>
                            <li>Starting August 2024</li> 
                            <li>Full time program focused on development</li>
                        </ul>
                    </div>
                    <div v-else-if='exp_ind == 1'>
                        <h3 class="sub-title">BNY Mellon</h3>
                        <h4 class="job-title">START Intern Program, Data Science</h4>
                        <ul>
                            <li>Used open source projects to leverage generative AI</li>
                            <li>Wrote a research paper on embedding vectors and presented to a team of engineers</li>
                            <li>Developed an API to convert text data into a structured data object</li>
                        </ul>
                    </div>
                </Transition>
                <div class="btn-holder">
                    <button class="btn" :class="{ active: exp_ind == 0 }" @click="exp_ind=0"></button>
                    <button class="btn" :class="{ active: exp_ind == 1 }" @click="exp_ind=1"></button>
                </div>
            </div>
            <div class="box skills">
                <h2 class="title">Skills</h2>
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
        </div>
    </div>
</template>

<style scoped>
.btn-holder{
    display: flex;
    justify-content: center;
}

.btn{
    background-color: var(--secondary);
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    margin: 0 0.5rem;
}

.btn:hover{
    background-color: var(--accent);
    box-shadow: 0px 15px 20px rgba(162, 206, 234, 0.9);
    transform: translateY(-3px);
}

.active{
    background-color: var(--accent);
}

h1{
    color: var(--accent);
}

.section{
    margin: 5rem 0;
    min-height: calc(100vh - 60px);
    height: fit-content;
}

.grid{
    display: grid;
    gap: 1.5rem;
    padding: 0.75rem 7.5rem 1.5rem 7.5rem;
}

.box{
    border-radius: 1.5rem;
    padding: 1rem;
    /*border: solid 0.1rem var(--accent);*/
    background-color: var(--primary40);
}

.courses{
    grid-column: 2;
    grid-row: 1;
}

.education{
    grid-column: 1;
    grid-row: 1;
}

.contact{
    grid-column: 3;
    grid-row: 1;
    background-color: var(--secondary40);
}

.experience{
    grid-column: 1/4;
    grid-row: 2;
}

.skills {
    grid-row: 3;
    grid-column: 1/4;
}

/*
@media (prefers-color-scheme: light){
    .contact{
        color: var(--background)
    }

    .grid{
        color: var(--background);
    }

    .eduction{
        color: var(--primary);
    }
}
*/

.title{
    margin: 0.5rem 0;
}

.sub-title{
    margin: 0.5rem 0;
}

.job-title{
    margin: 0.25rem;
}

a{
    background-image: linear-gradient(
        to right,
        var(--accent),
        var(--accent) 50%,
        var(--accent)50%
    );
    font-weight: bold;
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    position: relative;
    background-clip: initial;
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent;
    transition: all 0.3 ease-in-out;
}

a:before{
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

a:hover{
    background-position: 0;
}

a:hover:before{
    width: 100%;
}

@media only screen and (max-width: 1050px) {
    .grid{
        padding: 0.75rem 6.25rem 1.5rem 6.25rem;
    }

    .courses, .contact, .experience{
        grid-column: 1;
    }

    .courses{
        grid-column: 1/3;
        grid-row: 2;
    }

    .eduction{
        grid-row: 1;
    }

    .contact{
        grid-row: 1;
        grid-column: 2;
    }

    .experience{
        grid-row: 3;
        grid-column: 1/3;
    }

    .skills {
        grid-row: 4;
    }
}

@media only screen and (max-width: 780px) {
    .grid{
        padding: 10px 25px 25px 25px;
    }

    .courses, .education, .contact, .experience, .skills{
        grid-column: 1;
    }

    .courses{
        grid-row: 2;
    }

    .education{
        grid-row: 1;
    }

    .contact{
        grid-row: 3;
    }

    .experience{
        grid-row: 4;
    }

    .skills{
        grid-row: 5;
    }
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

@media only screen and (max-width: 500px){
    .container{
        flex-direction: column;
        justify-content: center;
    }

    .field{
        width: 15rem;
    }
}
</style>
