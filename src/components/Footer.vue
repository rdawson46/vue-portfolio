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
      <p class="footer-text">Ryan Crooks - 2026</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 4rem 2rem;
  text-align: center;
  border-top: 1px solid var(--border);
}

.footer-container {
  max-width: 1040px;
  margin: 0 auto;
}

.footer-socials {
  margin-bottom: 1.5rem;
}

.footer-socials a {
  color: var(--text);
  font-size: 1.8rem;
  margin: 0 1.5rem;
  transition: color 0.3s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-socials a:hover {
  color: var(--primary);
  transform: translateY(-2px);
}

.footer-text {
  font-size: 0.95rem;
  color: var(--text-muted);
}
</style>
