<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Ryan Crooks</h1>
      <p class="hero-subtitle">Data Scientist & Software Developer</p>
      <a href="#about-me" class="scroll-down-link" aria-label="Scroll to about me section">
        <span class="arrow"></span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
}

.hero-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 5.5rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
  color: var(--text);
  line-height: 1.08;
  animation: fade-down 1s ease-out;
}

.hero-subtitle {
  font-family: var(--font-body);
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 3.5rem;
  color: var(--secondary);
  animation: fade-up 1s ease-out 0.4s backwards;
}

.scroll-down-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  color: var(--primary);
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  animation: fade-up 1s ease-out 0.8s backwards;
  cursor: pointer;
}

.scroll-down-link:hover {
  color: var(--primary-hover);
  transform: translateY(4px);
}

.arrow {
  display: block;
  width: 14px;
  height: 14px;
  border-left: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
}

@keyframes fade-down {
  0% {
    transform: translateY(-24px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-up {
  0% {
    transform: translateY(24px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3.6rem;
  }
  .hero-subtitle {
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    margin-bottom: 2.5rem;
  }
}
</style>
