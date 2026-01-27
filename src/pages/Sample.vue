<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { projects } from '@/data/projects.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.slug))
</script>

<template>
  <div class="sample-page">
    <div class="sample-banner">
      <span class="sample-badge">Sample Design</span>
      This is a fictional demo website for a made-up business.
    </div>

    <section class="sample-hero" v-if="project">
      <div class="container">
        <RouterLink to="/#work" class="back-link">&larr; Back to Portfolio</RouterLink>
        <h1>{{ project.name }}</h1>
        <p class="lead">{{ project.summary }}</p>
        <div class="tag-row">
          <span class="tag">{{ project.industry }}</span>
          <span class="tag" v-for="service in project.services" :key="service">{{ service }}</span>
          <span class="tag">{{ project.location }}</span>
        </div>
      </div>
    </section>

    <section class="sample-content">
      <div class="container">
        <div class="coming-soon-card">
          <h2>Full demo coming soon</h2>
          <p class="muted">
            This demo page is under construction. Soon you'll be able to explore a fully
            designed website for this fictional {{ project?.industry?.toLowerCase() }} business.
          </p>
          <RouterLink to="/#contact" class="btn primary">Get a site like this</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sample-page {
  min-height: 100vh;
}

.sample-banner {
  background: var(--accent-2);
  color: white;
  text-align: center;
  padding: 12px 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.sample-banner .sample-badge {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.sample-hero {
  padding: 80px 0 60px;
  background: linear-gradient(180deg, var(--bg-alt) 0%, var(--bg) 100%);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 0.9rem;
  margin-bottom: 24px;
  text-decoration: none;
}

.back-link:hover {
  color: var(--accent);
}

.sample-hero h1 {
  font-family: var(--heading);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 16px;
}

.sample-hero .lead {
  font-size: 1.15rem;
  color: var(--muted);
  max-width: 600px;
  margin-bottom: 24px;
}

.sample-content {
  padding: 60px 0 100px;
}

.coming-soon-card {
  background: white;
  border: 2px dashed var(--border);
  border-radius: var(--radius);
  padding: 60px 40px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.coming-soon-card h2 {
  font-family: var(--heading);
  margin-bottom: 16px;
}

.coming-soon-card p {
  margin-bottom: 24px;
}
</style>
