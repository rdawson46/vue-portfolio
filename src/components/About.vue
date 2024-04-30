<script setup></script>

<template>
    <div class="section">
        <h1>About Me</h1>

        <div class="container">
            <div class="image-holder">
                <i class="fa-solid fa-rocket"></i>
            </div>
            <div class="text-holder">
                <p>
                    &Tab;Hello, my name is Ryan and I am a fourth year Computer Science student at Penn State University. I've been coding for six years now and have experience with web development, systems programming, data science, and using AI. 
                    I try to stay up to date with the most popular frameworks and libraries, so that I can achieve my goal of becoming a back-end developer. I'm from Pittsburg, PA, but I also lived in Tempe, Az for 6 months. I enjoy learning about this ever developing field and I'm willing to work to improve every day.
                    This past summer, I was interning at Bank of New York Mellon as a part of their START Technology Intern Program on the data science track.
                </p>
                
                <p>
                    Outside of technology, I enjoy running and I'm currently preparing for my second marathon. I love to cook for all my friends and family. I enjoy following the NBA, NFL, Formula 1, and college sports in my free time. In PA winters can get decently snowy, which allows for me to partake in my favortie winter hobby, snowboarding.
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

p{
    text-indent: 2rem;
}

h1{
    color: var(--accent)
}

/*
.section::before{
    content: '';
    height: 10px;
    left: 0;
    right: 0;
    background-image: linear-gradient(
        139deg, #fb8817, #ff4b01,
        #c12127, #e02aff
        );
    position: absolute;
    display: block;
    top: -30px;
}
*/

.section{
    margin: 25px 0;
    min-height: 80vh;
    height: fit-content;
}

.container{
    display: flex;
    padding-left: 7rem;
    padding-right: 7rem;
}

.image-holder{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    place-items: center;
    text-align: center;
    margin: 0 15px;
}

.text-holder{
    margin: 0 30px;
}

@media only screen and (max-width: 850px) {
    .container{
        flex-direction: column;
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .text-holder{
        margin: 0 5px;
    }
}

img{
    width: 10rem;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid #343434;
    filter: contrast(80%);
}

i{
    aspect-ratio: 1;
    font-size: 10rem;
    border: 0.25rem solid var(--primary);
    border-radius: 50%;
    padding: 2.5rem;
    color: var(--accent);
    background-color: var(--secondary);
}
</style>
