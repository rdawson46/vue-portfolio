<template>
  <section id="resume" class="resume-section">
    <div class="resume-container">
      <h2 class="resume-title">My Resume</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">Education</h3>
            <p class="timeline-subtitle">Pennsylvania State University</p>
            <p class="timeline-date">May 2024</p>
            <p class="timeline-text">Bachelor of Science in Computer Science</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3 class="timeline-title">Experience</h3>
            <div class="experience-item">
              <p class="timeline-subtitle">BNY, AI Hub</p>
              <p class="timeline-date">Aug 2024 - Current</p>
              <p class="timeline-text">Data Science Analyst</p>
            </div>
            <div class="experience-item">
              <p class="timeline-subtitle">BNY</p>
              <p class="timeline-date">May 2023 - Aug 2023</p>
              <p class="timeline-text">START Intern Program, Data Science</p>
            </div>
          </div>
        </div>
      </div>
      <div class="resume-download">
        <a href="/resume.pdf" download class="btn btn-primary">Download Resume</a>
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
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20px;
  height: 100%;
  width: 2px;
  background: var(--primary);
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
  padding-left: 60px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 12px;
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--primary);
    border: 2px solid var(--background);
}

.timeline-content {
  padding-left: 2rem;
}

.timeline-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.timeline-subtitle {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--secondary);
  margin-bottom: 0.2rem;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--secondary);
  margin-bottom: 1rem;
}

.experience-item {
  margin-bottom: 1.5rem;
}

.resume-download {
  text-align: center;
  margin-top: 3rem;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: var(--primary);
  color: #fff;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}
</style>
