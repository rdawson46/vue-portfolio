<script setup>
import { ref, onMounted } from 'vue';

const exp_ind = ref(0);

onMounted(() => {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else{
        entry.target.classList.remove('show');
      }
    });
  })

  const hidden = document.querySelectorAll('.hidden');

  hidden.forEach((element)=> observer.observe(element));
})
</script>

<template>
    <div class="section">
        <h1>About Me</h1>

        <div class="container">
            <div class="image-holder hidden">
                <i class="fa-solid fa-circle-user"></i>
            </div>
            <div class="text-holder hidden">
                <p>
                Hi, I’m Ryan, a Computer Science graduate from Penn State University with seven years of coding experience.
                My expertise spans web development, systems programming, data science, and generative AI.
                I strive to stay current with popular frameworks and libraries, always working toward my goal of becoming a skilled back-end developer.
                </p>
 
                <p>
                Currently, I’m a Data Science Analyst at the AI Hub at the Bank of New York Mellon.
                I’m passionate about continuous learning and problem-solving, always eager to improve and grow in this ever-evolving field.
                </p>

                <p>
                Originally from Pittsburgh, I’ve also spent time in Tempe, AZ and State College, PA. When I’m not coding, I enjoy running (currently training for my second marathon), cooking for friends and family, and following sports like the NBA, NFL, Formula 1, and college athletics. I’m also an avid snowboarder, making the most of Pennsylvania’s snowy winters.
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

.section::before{
    content: '';
    height: 10px;
    left: 0;
    right: 0;
    background-image: linear-gradient(
        139deg,
        #194c6c,
        #364f7e,
        #584f89,
        #7b4c8a,
        #9c4781,
        #b5456e,
        #c44d55,
        var(--accent)
    );
    position: absolute;
    display: block;
    top: -30px;
}

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

i{
    aspect-ratio: 1;
    font-size: 12.5rem;
    border: 0.25rem solid var(--secondary-accent);
    border-radius: 50%;
    /*padding: 2.5rem;*/
    color: var(--primary);
    background-color: var(--accent);
}
</style>
