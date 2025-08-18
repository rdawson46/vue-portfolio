<template>
  <section id="resume" class="resume-section">
    <div class="resume-container">
      <h2 class="resume-title">My Resume</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-graduation-cap"></i>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">Education</h3>
            <p class="timeline-subtitle">Pennsylvania State University</p>
            <p class="timeline-date">May 2024</p>
            <p class="timeline-text">Bachelor of Science in Computer Science</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-briefcase"></i>
          </div>
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
        <div class="timeline-item">
          <div class="timeline-icon">
            <i class="fas fa-code"></i>
          </div>
          <div class="timeline-content">
            <h3 class="timeline-title">Skills</h3>
            <div class="skills-grid">
              <div class="skill-category">
                <h4>Back-End</h4>
                <ul>
                  <li>Python</li>
                  <li>Go</li>
                  <li>Rust</li>
                  <li>JavaScript</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Front-End</h4>
                <ul>
                  <li>Vue.JS</li>
                  <li>CSS</li>
                  <li>React</li>
                </ul>
              </div>
              <div class="skill-category">
                <h4>Tools</h4>
                <ul>
                  <li>Linux</li>
                  <li>Neovim</li>
                  <li>Git</li>
                  <li>Windows</li>
                  <li>Firebase</li>
                </ul>
              </div>
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
  background-color: var(--background);
}

.resume-container {
  max-width: 900px;
  margin: 0 auto;
}

.resume-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
  text-align: center;
  margin-bottom: 3rem;
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
  width: 4px;
  background: var(--primary);
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
  padding-left: 60px;
}

.timeline-icon {
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.timeline-content {
  background: var(--smallbackground);
  padding: 1.5rem;
  border-radius: 10px;
}

.timeline-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 0.5rem;
  margin-top: 0;
}

.timeline-subtitle {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.2rem;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--secondary-accent);
  margin-bottom: 1rem;
}

.experience-item {
  margin-bottom: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.skill-category h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  margin-bottom: 0.5rem;
}

.resume-download {
  text-align: center;
  margin-top: 3rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--background);
}

.btn-primary:hover {
  background-color: var(--accent);
  color: var(--background);
  transform: translateY(-3px);
}
</style>
