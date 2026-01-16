<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="section about-page">
    <div class="container about-grid">
      <div>
        <p class="eyebrow">About</p>
        <h1>I'm Jeffrey Reynolds, a Galway-based web designer and developer.</h1>
        <p class="lead">
          I hold a Computer Science degree from Galway and have hands-on experience working on web
          design and development projects for local businesses across the city.
        </p>
        <p class="muted">
          Ceird Digital is a one-person studio. There is no team or sales layer. You work directly
          with me from first call to launch, which keeps everything clear, honest, and efficient.
        </p>
        <p class="muted">
          My focus is simple: make it easy for customers to find you, trust you, and get in touch.
        </p>
        <div class="about-highlights">
          <div>
            <span class="stat">1 person</span>
            <span class="label">Direct collaboration</span>
          </div>
          <div>
            <span class="stat">Galway</span>
            <span class="label">Local experience</span>
          </div>
          <div>
            <span class="stat">CS degree</span>
            <span class="label">Technical foundation</span>
          </div>
        </div>
        <div class="about-cta">
          <RouterLink class="btn primary" to="/#contact">Start a project</RouterLink>
          <RouterLink class="btn outline" to="/#services">See services</RouterLink>
        </div>
      </div>
      <div class="about-card">
        <span class="pill">What you can expect</span>
        <h3>Practical design with a local focus.</h3>
        <p class="muted">
          I combine design and development so you do not have to juggle multiple people or vendors.
          The result is a site that looks great, loads fast, and is easy to manage.
        </p>
        <ul class="list">
          <li>Clear messaging and calls to action</li>
          <li>Mobile-first layouts built for everyday customers</li>
          <li>Honest pricing and predictable steps</li>
          <li>Post-launch support and guidance</li>
        </ul>
        <p class="signature">- Jeffrey Reynolds</p>
      </div>
    </div>
  </section>
</template>
