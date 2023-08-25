<script setup></script>

<template>
    <div class="section">
        <h1>Resume</h1>
        <div class="grid">
            <div class="box two">
                <h2 class="title">Education</h2>
                <h4 class="sub-title">Pennsylvania State University</h4>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, optio dolores sed autem tempore vitae enim modi reprehenderit molestiae veritatis asperiores laboriosam, fugit illum, eaque id error suscipit maiores repudiandae?</p>
            </div>
            <div class="box four">
                <h2 class="title">Experience</h2>
                <h4 class="sub-title">BNY Mellon</h4>
                <h5 class="job-title">START Intern Program, Data Science</h5>
                <ul>
                    <li>Used open source projects to leverage generative AI</li>
                    <li>Wrote a research paper on embedding vectors and presented to a team of engineers</li>
                    <li>Developed an API to convert text data into a structured data object</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

h1{
    color: var(--secondary);
}

.section{
    background-color: var(--primary);
    margin: 25px 0;
    padding: 5px 25px 0 25px;
    width: calc(100% - 50px);
    min-height: calc(100vh - 60px);
    height: fit-content;
}

.grid{
    display: grid;
    gap: 10px;
    padding: 10px 50px 25px 50px;
    /* grid-template-columns: 100px 100px 100px; */
    /* grid-template-columns: span 3; */
    /* grid-template-columns: 80px 80px 80px 80px 80px;
    grid-template-rows: 100px 100px;
    background-color: red;
    justify-content: space-around; */
}

.box{
    border-radius: 12px;
    padding: 20px;
    background-color: var(--background);
    /* height: 200px; */
    /* min-height: 20px; */
    /* height: fit-content; */
}

.one{
    /* grid-column-start: 1;
    grid-column-end: 5; */
    grid-column: 1/3;
    grid-row: 1;
}

.two{
    grid-column: 3;
    grid-row: 1;
    background-color: var(--secondary);
    
}

.three{
    grid-column: 1;
    grid-row: 2;
    background-color: var(--accent);
    color: var(--secondary)
}

.four{
    grid-column: 2/4;
    grid-row: 2;
}

.title{
    margin: 10px 0;
}

.sub-title{
    margin: 10px 0;
}

.job-title{
    margin: 5px 0;
}

@media only screen and (max-width: 650px) {
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
</style>