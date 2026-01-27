<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  project: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <RouterLink
    :to="project.demoUrl"
    class="work-card"
    :class="{ 'work-card-featured': featured }"
  >
    <div class="work-thumb" :class="project.thumbClass">
      <div class="browser-frame">
        <div class="browser-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="browser-content"></div>
      </div>
    </div>
    <div class="work-card-body">
      <div class="work-card-header">
        <h3>{{ project.name }}</h3>
        <span v-if="project.isSample" class="sample-badge">Sample</span>
      </div>
      <p class="muted">{{ project.summary }}</p>
      <div class="tag-row">
        <span class="tag">{{ project.industry }}</span>
        <span class="tag" v-for="service in project.services" :key="service">
          {{ service }}
        </span>
        <span class="tag">{{ project.location }}</span>
      </div>
      <span class="work-link-indicator">View Demo</span>
    </div>
  </RouterLink>
</template>
