<script setup>
import About from './components/About.vue';
import Intro from './components/Intro.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
</script>

<template>
  <Navbar/>
  <div id="content">
    <Intro/>
    <About id="about-me"/>
    <Resume id="resume"/>
    <Projects id="projects"/>
  </div>
</template>

<style scoped>

</style>
