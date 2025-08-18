<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-socials">
        <a href="https://www.linkedin.com/in/ryan-crooks/" target="_blank" rel="noreferrer" aria-label="link to LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/rdawson46" target="_blank" rel="noreferrer" aria-label="link to Github">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <p class="footer-text">Ryan Crooks - 2025</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 2rem;
  text-align: center;
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
}

.footer-socials {
  margin-bottom: 1.5rem;
}

.footer-socials a {
  color: var(--secondary);
  font-size: 1.8rem;
  margin: 0 1.5rem;
  transition: color 0.3s ease;
}

.footer-socials a:hover {
  color: var(--primary);
}

.footer-text {
  font-size: 1rem;
  color: var(--secondary);
}
</style>
