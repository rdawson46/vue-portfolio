<script setup>
import { ref } from 'vue';
import { projects } from '../projects';

const activeTab = ref('python');

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <h2 class="projects-title">My Projects</h2>
      <div class="tabs">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'python' }"
          @click="setActiveTab('python')"
        >
          Python
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'go' }"
          @click="setActiveTab('go')"
        >
          Go
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'javascript' }"
          @click="setActiveTab('javascript')"
        >
          JavaScript
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'others' }"
          @click="setActiveTab('others')"
        >
          Others
        </button>
      </div>
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects[activeTab]"
          :key="index"
          class="project-card"
        >
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="(tech, i) in project.technologies" :key="i" class="tech-tag">{{ tech }}</span>
            </div>
          </div>
          <a :href="project.github" target="_blank" class="project-link">View on GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 6rem 2rem;
}

.projects-container {
  max-width: 1040px;
  margin: 0 auto;
}

.projects-title {
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-family: var(--font-heading);
}

.tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.tab-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  padding: 0.6rem 1.4rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  position: relative;
  transition: color 0.2s ease;
}

.tab-btn::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: var(--radius-pill);
  background-color: var(--primary);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.tab-btn:hover {
  color: var(--text);
}

.tab-btn.active {
  color: var(--primary);
}

.tab-btn.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}

.project-card {
  background-color: var(--card-background);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: var(--shadow-card);
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-hover);
  box-shadow: var(--shadow-hover);
}

.project-content {
  padding: 2.25rem 2rem;
}

.project-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.75rem;
  font-family: var(--font-heading);
}

.project-description {
  font-size: 0.98rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  color: var(--text-muted);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: var(--tag-background);
  color: var(--tag-text);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.3rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-link {
  display: block;
  background-color: rgba(200, 100, 70, 0.1);
  color: var(--text);
  border-top: 1px solid var(--border);
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.project-link:hover {
  background-color: var(--primary);
  color: #FFF;
}
</style>
