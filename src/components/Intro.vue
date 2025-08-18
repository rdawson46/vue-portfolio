<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Ryan Crooks</h1>
      <div class="hero-sub">
        <p class="hero-subtitle">Data Scientist & Software Developer</p>
        <a href="#projects" class="btn btn-primary">View My Work</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text);
  animation: fade-down 750ms ease-out;
}

.hero-sub {
  animation: fade-up 750ms ease-out;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: var(--secondary);
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

@keyframes fade-down {
    0% {
        translate: 0 -25px;
        opacity: 0;
    }

    100% {
        transition: 0;
        opacity: 1;
    }
}

@keyframes fade-up {
    0% {
        translate: 0 25px;
        opacity: 0;
    }

    100% {
        transition: 0;
        opacity: 1;
    }
}

</style>
