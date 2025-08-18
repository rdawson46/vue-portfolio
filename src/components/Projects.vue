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
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab-btn {
  background: transparent;
  border: 1px solid var(--secondary);
  color: var(--secondary);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tab-btn.active, .tab-btn:hover {
  background-color: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: var(--card-background);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #2a2a2a;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--secondary);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: #2a2a2a;
  color: var(--text);
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-size: 0.8rem;
}

.project-link {
  display: block;
  background-color: var(--primary);
  color: #fff;
  text-align: center;
  padding: 1rem;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #0056b3;
}
</style>
