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
              <p class="timeline-text">AI Engineering Associate</p>
              <p class="timeline-date">Sep 2026 - Current</p>
              <p class="timeline-text">Data Science Analyst</p>
              <p class="timeline-date">Aug 2024 - Aug 2026</p>
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
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: var(--text);
  font-family: var(--font-heading);
}

.timeline {
  position: relative;
  padding: 1rem 0;
  border-left: 2px solid var(--primary);
  margin-left: 1rem;
}

.timeline-item {
  margin-bottom: 3.5rem;
  position: relative;
  padding-left: 2.5rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  box-sizing: border-box;
  left: 0;
  top: 7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  border: 3px solid var(--background);
  transform: translateX(-50%) translateX(-1px);
}

.timeline-content {
  display: flex;
  flex-direction: column;
}

.timeline-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 1.5rem;
  font-family: var(--font-heading);
}

.timeline-subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 0.5rem;
}

.timeline-text {
  color: var(--secondary);
  font-weight: 500;
  font-size: 1.05rem;
  margin: 0 0 0.2rem;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin: 0 0 1.25rem;
}

.experience-item {
  display: flex;
  flex-direction: column;
}

.experience-item .timeline-date:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .timeline {
    margin-left: 0.5rem;
  }
  .timeline-item {
    padding-left: 1.75rem;
  }
}
</style>
