<template>
  <section id="resume" class="resume-section">
    <div class="resume-container">
      <h2 class="resume-title">My Resume</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">Experience</h3>
            <div class="experience-item">
              <p class="timeline-subtitle">BNY, AI Hub</p>
              <p class="timeline-text">Data Science Analyst</p>
              <p class="timeline-date">Aug 2024 - Current</p>
              <p class="timeline-text">START Intern Program, Data Science</p>
              <p class="timeline-date">May 2023 - Aug 2023</p>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">Education</h3>
            <p class="timeline-subtitle">Pennsylvania State University</p>
            <p class="timeline-text">Bachelor of Science in Computer Science</p>
            <p class="timeline-date">May 2024</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.resume-section {
  padding: 6rem 2rem;
}

.resume-container {
  max-width: 800px;
  margin: 0 auto;
}

.resume-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-family: 'Raleway', sans-serif;
}

.timeline {
  position: relative;
  padding: 2rem 0;
  border-left: 2px solid var(--primary);
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
  padding-left: 40px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -9px;
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 0;
    background: var(--primary);
    border: 2px solid var(--background);
}

.timeline-content {
  padding-left: 2rem;
}

.timeline-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1.5rem;
  font-family: 'Raleway', sans-serif;
}

.timeline-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.2rem;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--text);
  opacity: 0.7;
  margin-bottom: 1rem;
}

.timeline-text {
    color: var(--text);
}

.experience-item {
  margin-bottom: 2rem;
}

.resume-download {
  text-align: center;
  margin-top: 3rem;
}

.btn {
  padding: 1rem 2.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--text);
  border-radius: 0;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn:hover {
  background-color: var(--primary);
  color: var(--background);
  border-color: var(--primary);
}
</style>
