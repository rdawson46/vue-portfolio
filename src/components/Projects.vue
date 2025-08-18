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
  background-color: var(--background);
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.projects-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 2rem;
}

.tabs {
  margin-bottom: 2rem;
}

.tab-btn {
  background: none;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tab-btn.active, .tab-btn:hover {
  background-color: var(--primary);
  color: var(--background);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--smallbackground);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: var(--primary40);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-link {
  display: block;
  background-color: var(--primary);
  color: var(--background);
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: var(--accent);
}
</style>