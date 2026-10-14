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
          I'm currently working as an AI Engineering Associate at BNY, where I'm helping to build the next generation of financial applications with generative AI.
          I'm also a graduate of Penn State University, where I earned a degree in Computer Science.
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
  grid-template-columns: 1.5fr 1fr;
  gap: 1.75rem;
  align-items: stretch;
  max-width: 1040px;
  margin: 0 auto;
}

.about-content {
  background: var(--card-background);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 3rem;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.about-content:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-hover);
}

.about-title {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: var(--text);
  font-family: var(--font-heading);
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  color: var(--text-muted);
}

.about-text:last-child {
  margin-bottom: 0;
}

.about-skills {
  background: var(--card-background);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 3rem;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.about-skills:hover {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-hover);
}

.skills-title {
  font-size: 2rem;
  margin-bottom: 1.75rem;
  color: var(--text);
  font-family: var(--font-heading);
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skills-list li {
  background-color: var(--tag-background);
  color: var(--text);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border);
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.skills-list li:hover {
  background-color: rgba(200, 100, 70, 0.18);
  border-color: var(--border-hover);
}

@media (max-width: 820px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .about-content,
  .about-skills {
    padding: 2.25rem 1.75rem;
  }
}
</style>
