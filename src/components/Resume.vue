<script setup>
import { ref } from 'vue';

const exp_ind = ref(0);


</script>

<template>
    <div class="section">
        <h1>Resume</h1>
        <div class="grid">
            <div class="box two">
                <h2 class="title">Education</h2>
                <h3 class="sub-title">Pennsylvania State University</h3>
                <ul>
                    <li>Computer Science, B.S.</li>
                    <li>Expected Graduation: May 2024</li>
                </ul>
            </div>
            <div class="box one">
                <h2 class="title">Relevant Courses</h2>
                <ul>
                    <li>Systems and Network Programming</li>
                    <li>Web Development</li>
                    <li>Programming Language Concepts</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Compiler Construction</li>
                </ul>
            </div>
            <div class="box three">
                <h2 class="title">Contact</h2>
                <p>
                    I can be best reached on my LinkedIn page: 
                    <br>
                    <a href="https://www.linkedin.com/in/ryan-crooks/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>

                </p>
            </div>
            <div class="box four">
                <h2 class="title">Experience</h2>

                <Transition name='fade' mode='out-in'>
                    <div v-if='exp_ind == 0'>
                        <h3 class="sub-title">BNY Mellon</h3>
                        <h4 class="job-title">START Intern Program, Data Science</h4>
                        <ul>
                            <li>Used open source projects to leverage generative AI</li>
                            <li>Wrote a research paper on embedding vectors and presented to a team of engineers</li>
                            <li>Developed an API to convert text data into a structured data object</li>
                        </ul>
                    </div>
                    <div v-else-if='exp_ind == 1'>
                        <h3 class="sub-title">BNY Mellon</h3>
                        <h4 class="job-title"> Data Science Analyst Program</h4>
                        <ul>
                            <li>Starting August 2024</li> 
                            <li>Full time program focused on development</li>
                        </ul>
                    </div>
                </Transition>
                <div class="btn-holder">
                    <button class="btn" :class="{ active: exp_ind == 0 }" @click="exp_ind=0"></button>
                    <button class="btn" :class="{ active: exp_ind == 1 }" @click="exp_ind=1"></button>
                </div>
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
    aspect-ratio: 1/1;
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
    margin: 25px 0;
    min-height: calc(100vh - 60px);
    height: fit-content;
}

.grid{
    display: grid;
    gap: 1.5rem;
    padding: 0.75rem 12.5rem 1.5rem 12.5rem;
}

.box{
    border-radius: 1.5rem;
    padding: 1rem;
    background-color: var(--primary);
}

.one{
    grid-column: 2;
    grid-row: 1;
}

.two{
    grid-column: 1;
    grid-row: 1;
    background-color: var(--secondary);
}

.three{
    grid-column: 3;
    grid-row: 1;
    background-color: var(--accent);
    color: var(--secondary)
}

.four{
    grid-column: 1/4;
    grid-row: 2;
}

@media (prefers-color-scheme: light){
    .three{
        color: var(--background)
    }

    .grid{
        color: var(--background);
    }

    .two{
        color: var(--primary);
    }
}


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
        var(--secondary),
        var(--secondary) 50%,
        var(--secondary)50%
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
    background: var(--secondary);
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

    .two, .three, .four{
        grid-column: 1;
    }

    .one{
        grid-column: 1/3;
        grid-row: 2;
    }

    .two{
        grid-row: 1;
    }

    .three{
        grid-row: 1;
        grid-column: 2;
    }

    .four{
        grid-row: 3;
        grid-column: 1/3;
    }
}

@media only screen and (max-width: 780px) {
    .grid{
        padding: 10px 25px 25px 25px;
    }

    .one, .two, .three, .four{
        grid-column: 1;
    }

    .one{
        grid-row: 1;
    }

    .two{
        grid-row: 2;
    }

    .three{
        grid-row: 3;
    }

    .four{
        grid-row: 4;
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
</style>
