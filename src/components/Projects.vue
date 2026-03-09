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
  max-width: 1000px;
  margin: 0 auto;
}

.projects-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text);
  font-family: 'Raleway', sans-serif;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab-btn {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--text);
  padding: 0.7rem 1.5rem;
  border-radius: 0;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.tab-btn.active, .tab-btn:hover {
  background-color: var(--primary);
  color: var(--background);
  border-color: var(--primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--card-background);
  border: 1px solid var(--accent);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1rem;
  font-family: 'Raleway', sans-serif;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text);
  opacity: 0.9;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: var(--tag-background);
  color: var(--text);
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.project-link {
  display: block;
  background-color: var(--primary);
  color: var(--background);
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: var(--accent);
}
</style>
