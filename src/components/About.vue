<template>
  <section id="about-me" class="about-section">
    <div class="about-container">
      <div class="about-image">
        <img src="/logoThing.png" alt="Ryan Crooks" />
      </div>
      <div class="about-content">
        <h2 class="about-title">About Me</h2>
        <p class="about-text">
          Hi, I’m Ryan, a Computer Science graduate from Penn State University with seven years of coding experience.
          My expertise spans web development, systems programming, data science, and generative AI.
          I strive to stay current with popular frameworks and libraries, always working toward my goal of becoming a skilled back-end developer.
        </p>
        <p class="about-text">
          Currently, I’m a Data Science Analyst at the AI Hub at the Bank of New York Mellon.
          I’m passionate about continuous learning and problem-solving, always eager to improve and grow in this ever-evolving field.
        </p>
        <div class="skills">
          <h3 class="skills-title">My Skills</h3>
          <div class="skills-grid">
            <div class="skill-item"><img src="/src/assets/python.svg" alt="Python"><span>Python</span></div>
            <div class="skill-item"><img src="/src/assets/javascript.svg" alt="JavaScript"><span>JavaScript</span></div>
            <div class="skill-item"><img src="/src/assets/vue.svg" alt="Vue.js"><span>Vue.js</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 2rem;
  background-color: var(--background);
}

.about-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.about-image {
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid var(--primary);
  box-shadow: 0 0 20px var(--primary40);
  animation: float 3s ease-in-out infinite;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.skills-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--accent);
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--smallbackground);
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
}

.skill-item img {
  height: 40px;
}

.skill-item span {
  font-weight: 500;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .about-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .about-image {
    margin: 0 auto 2rem;
  }
}
</style>
