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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:
    linear-gradient(to right, rgba(198, 94, 56, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(198, 94, 56, 0.1) 1px, transparent 1px);
  background-size: 4rem 4rem;
  padding: 0 2rem;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-family: 'Raleway', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text);
  animation: fade-down 1s ease-out;
}

.hero-subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 4rem;
  color: var(--text);
  opacity: 0.8;
  animation: fade-up 1s ease-out 0.5s backwards;
}

.scroll-down-link {
  display: inline-block;
  animation: fade-up 1s ease-out 1s backwards;
}

.arrow {
  display: block;
  width: 20px;
  height: 20px;
  border-left: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  transform: rotate(-45deg);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(-45deg);
  }
  40% {
    transform: translateY(10px) rotate(-45deg);
  }
  60% {
    transform: translateY(5px) rotate(-45deg);
  }
}

@keyframes fade-down {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fade-up {
    0% {
        transform: translateY(50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>
