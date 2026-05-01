<script setup>
import { RouterLink } from 'vue-router'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()
</script>

<template>
  <section class="section about-page">
    <div class="container about-grid">
      <div>
        <p class="eyebrow" data-reveal>About</p>
        <h1 data-reveal data-delay="1">I'm Jeffrey Reynolds, a Galway-based web designer and developer.</h1>
        <p class="lead" data-reveal data-delay="2">
          I studied Computer Science in Galway and have spent the time since building
          websites for local businesses across the city. Ceird Digital is where that
          comes together.
        </p>
        <p class="muted" data-reveal data-delay="3">
          Ceird Digital is a one-person studio. There is no team or sales layer. You work
          directly with me from first call to launch, which keeps everything clear,
          honest, and efficient.
        </p>
        <p class="muted" data-reveal data-delay="3">
          I keep it simple: clear pages, fast loading, and copy that speaks to the right
          people in the right area.
        </p>
        <div class="about-highlights" data-reveal data-delay="4">
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
        <div class="about-cta" data-reveal data-delay="4">
          <RouterLink class="btn primary" to="/#contact">Start a project</RouterLink>
          <RouterLink class="btn outline" to="/#services">See services</RouterLink>
        </div>
      </div>
      <div class="about-card" data-reveal data-delay="2">
        <span class="pill">What you can expect</span>
        <h3>Practical websites with a local focus.</h3>
        <p class="muted">
          I combine design and development, so you get a cohesive result without
          managing multiple people or vendors.
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
