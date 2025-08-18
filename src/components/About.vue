<template>
  <section id="about-me" class="about-section">
    <div class="about-container">
      <div class="about-content">
        <h2 class="about-title">About Me</h2>
        <p class="about-text">
          I'm a software engineer with a passion for building functional applications.
          I have a strong background in both front-end and back-end development, and I'm always eager to learn new technologies.
        </p>
        <p class="about-text">
          I'm currently working as a Data Science Analyst at BNY, where I'm helping to build the next generation of financial applications with generative AI.
          I'm also a recent graduate of Penn State University, where I earned a degree in Computer Science.
        </p>
      </div>
      <div class="about-skills">
        <h3 class="skills-title">My Skills</h3>
        <ul class="skills-list">
          <li>Python</li>
          <li>Go</li>
          <li>Rust</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>PostgreSQL</li>
          <li>Firebase</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 2rem;
}

.about-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
}

.about-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text);
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--secondary);
}

.skills-title {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.skills-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skills-list li {
  background-color: var(--tag-background);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
