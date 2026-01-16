<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    <header class="site-header">
      <div class="container nav">
        <RouterLink class="brand" to="/#top">
          <span class="brand-mark"></span>
          <span class="brand-name">Ceird Digital</span>
        </RouterLink>
        <nav class="nav-links">
          <RouterLink to="/#services">Services</RouterLink>
          <RouterLink to="/#work">Work</RouterLink>
          <RouterLink to="/#process">Process</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/#studio">Studio</RouterLink>
          <RouterLink to="/#contact">Contact</RouterLink>
        </nav>
        <div class="nav-cta">
          <RouterLink class="btn ghost" to="/#work">View work</RouterLink>
          <RouterLink class="btn primary" to="/#contact">Start a project</RouterLink>
        </div>
      </div>
    </header>

    <main>
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <div class="brand footer-brand">
            <span class="brand-mark"></span>
            <span class="brand-name">Ceird Digital</span>
          </div>
          <p class="muted">Local web design and development focused on simple, effective websites.</p>
        </div>
        <div class="footer-links">
          <div>
            <p class="eyebrow">Explore</p>
            <RouterLink to="/#services">Services</RouterLink>
            <RouterLink to="/#work">Work</RouterLink>
            <RouterLink to="/#process">Process</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </div>
          <div>
            <p class="eyebrow">Connect</p>
            <a href="mailto:hello@ceirddigital.com">hello@ceirddigital.com</a>
            <RouterLink to="/#contact">Project intake</RouterLink>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="muted">(c) 2026 Ceird Digital. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
