<script setup>
import About from './components/About.vue';
import Intro from './components/Intro.vue';
import Navbar from './components/Navbar.vue';
import Projects from './components/Projects.vue';
import Resume from './components/Resume.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Navbar/>
  <main id="content">
    <Intro/>
    <About id="about-me"/>
    <Resume id="resume"/>
    <Projects id="projects"/>
  </main>
  <Footer/>
</template>

<style scoped>
main {
  flex: 1;
}
</style>
