<script setup></script>

<template>
    <div class="section">
        <h1>About Me</h1>

        <div class="container">
            <div class="image-holder">
                <img src="https://media.licdn.com/dms/image/D4E03AQEKfQyiXBdfHw/profile-displayphoto-shrink_400_400/0/1689212721004?e=1698278400&v=beta&t=TCdtdXYey7nsPEf9Pd2f-03Mv0GpUiJdARVDQDeQ3J4" alt="me">
            </div>
            <div class="text-holder">
                <p>
                    &Tab;Hello, my name is Ryan and I am a fourth year Computer Science student at Penn State University. I've been coding for six years now and have experience with web development, systems programming, data science, and using AI. 
                    I try to stay up to date with the most popular frameworks and libraries, so that I can achieve my goal of becoming a back end developer. I'm from Pittsburg, PA, but I also lived in Tempe, Az for 6 months. I enjoy learning about this ever developing field and I'm willing to work to improve every day.
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

.section{
    margin: 25px 0;
    padding: 0 25px;
    width: calc(100% - 50px);
    height: 100vh;
        /* display: flex;
        justify-content: center;
        flex-direction: column; */
}

.container{
    display: flex;

}

.image-holder{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 30px;
}

.text-holder{
    margin: 0 30px;
}

@media only screen and (max-width: 690px) {
    .container{
        flex-direction: column;
    }
}

img{
    width: 150px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 2px solid #343434;
    filter: contrast(80%);
}
</style>