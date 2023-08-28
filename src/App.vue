<script setup>
import About from './components/About.vue';
import Intro from './components/Intro.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
import Skills from './components/Skills.vue';
import { onMounted } from 'vue';

onMounted(()=>{
  const blob = document.getElementById('blob');

  document.body.onpointermove = event =>{
    const {pageX, pageY} = event;

    blob.animate({
      left: `${pageX}px`,
      top: `${pageY}px`
    }, {duration: 300, fill: 'forwards'})
  }

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

});
</script>

<template>
  <Navbar/>
  <div id="blob"></div>
  <div id="content">
    <Intro/>
    <About id="about-me" class="hidden"/>
    <Resume id="resume" class="hidden"/>
    <Projects id="projects" class="hidden"/>
    <Skills id="skills" class="hidden"/>
  </div>
</template>

<script>

</script>

<style scoped>

#blob{
  top: 50%;
  left: 50%;
  height: 100px;
  aspect-ratio: 1;
  background-color: white;
  background: linear-gradient(
    to right,
    var(--primary),
    var(--accent)
  );
  position: absolute;
  border-radius: 50%;
  translate: -50% -50%;
  animation: rotate 10s infinite;
  filter: blur(75px);
  z-index: 2;
  pointer-events: none;
}

@keyframes rotate{
  from{
    rotate: 0deg;
  }

  50%{
    scale: 1 1.25;
  }

  to{
    rotate: 360deg;
  }
}


.hidden{
  opacity: 0%;
  filter: blur(5px);
  transition: all 650ms ease-in-out;
}

.show{
  opacity: 100%;
  filter: blur(0);
}

</style>
