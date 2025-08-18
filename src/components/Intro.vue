<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Ryan Crooks</h1>
      <p class="hero-subtitle">Data Scientist & Software Engineer</p>
      <a href="#projects" class="btn btn-primary">View My Work</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-content {
  z-index: 1;
  color: var(--text);
}

.hero-title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease-in-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease-in-out;
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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
