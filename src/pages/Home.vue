<script setup>
import WorkCard from '@/components/WorkCard.vue'
import { projects } from '@/data/projects.js'
import { useScrollReveal } from '@/composables/useScrollReveal.js'

useScrollReveal()

const featuredProject = projects.find(p => p.featured)
const standardProjects = projects.filter(p => !p.featured)
</script>

<template>
  <div>
    <section class="hero" id="top">
      <div class="container">
        <div class="hero-intro" data-reveal>
          <p class="eyebrow">Web design &amp; development</p>
          <span class="location-tag">Galway, Ireland</span>
        </div>
        <h1 class="hero-headline" data-reveal data-delay="1">
          I build websites for Galway businesses.
        </h1>
        <p class="lead hero-lead" data-reveal data-delay="2">
          No agency overhead. No handoffs. You work directly with me from the first
          conversation to the day your site goes live.
        </p>
        <div class="hero-actions" data-reveal data-delay="3">
          <a class="btn primary" href="#contact">Start a conversation</a>
          <a class="btn outline" href="#work">See the work</a>
        </div>
        <div class="hero-facts" data-reveal data-delay="4">
          <span>2&ndash;4 week builds</span>
          <span class="hero-fact-sep" aria-hidden="true">/</span>
          <span>Clear pricing</span>
          <span class="hero-fact-sep" aria-hidden="true">/</span>
          <span>Based in Galway</span>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="container">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">Services</p>
            <h2>What I offer</h2>
          </div>
          <p class="muted">Design, build, and launch handled by one person.</p>
        </div>
        <div class="services-grid">
          <article class="card" data-reveal data-delay="1">
            <p class="pill soft">01</p>
            <h3>Website Design</h3>
            <p class="muted">
              Clean, considered layouts built to make a strong first impression and
              make it easy for customers to reach you.
            </p>
            <ul class="list">
              <li>Homepage and service pages</li>
              <li>Mobile-first design</li>
              <li>Photo and content guidance</li>
            </ul>
          </article>
          <article class="card" data-reveal data-delay="2">
            <p class="pill soft">02</p>
            <h3>Build + Launch</h3>
            <p class="muted">
              I handle the technical build, hosting, and go-live so you can stay
              focused on running your business.
            </p>
            <ul class="list">
              <li>Fast, secure hosting setup</li>
              <li>Contact forms and booking links</li>
              <li>Search-ready structure</li>
            </ul>
          </article>
          <article class="card" data-reveal data-delay="3">
            <p class="pill soft">03</p>
            <h3>Local SEO</h3>
            <p class="muted">
              Getting found on Google by people in Galway who are already looking
              for what you offer.
            </p>
            <ul class="list">
              <li>Google Business Profile setup</li>
              <li>Location and service keywords</li>
              <li>Technical SEO foundation</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="work">
      <div class="container">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">Work</p>
            <h2>Real sites built for local businesses.</h2>
          </div>
          <p class="muted">More coming as clients go live.</p>
        </div>
        <div v-if="standardProjects.length > 0" class="work-grid-featured" data-reveal>
          <WorkCard :project="featuredProject" featured />
          <WorkCard
            v-for="project in standardProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div v-else class="work-solo" data-reveal>
          <WorkCard :project="featuredProject" featured />
        </div>
      </div>
    </section>

    <section class="section section-alt" id="process">
      <div class="container">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">Process</p>
            <h2>How it works</h2>
          </div>
          <p class="muted">A straightforward process built around your schedule.</p>
        </div>
        <div class="process-grid">
          <div class="process-step" data-reveal data-delay="1">
            <span class="step-number">01</span>
            <h3>We talk</h3>
            <p class="muted">A short call to understand your business, your customers, and what you need the site to do.</p>
          </div>
          <div class="process-step" data-reveal data-delay="2">
            <span class="step-number">02</span>
            <h3>We plan</h3>
            <p class="muted">We agree on pages and structure. I handle the outline; you fill in what only you know.</p>
          </div>
          <div class="process-step" data-reveal data-delay="3">
            <span class="step-number">03</span>
            <h3>We build</h3>
            <p class="muted">I design and develop the site. You review it and request changes before anything goes live.</p>
          </div>
          <div class="process-step" data-reveal data-delay="4">
            <span class="step-number">04</span>
            <h3>We launch</h3>
            <p class="muted">I handle the go-live, domain setup, and a month of follow-up support.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="studio">
      <div class="container split-grid">
        <div data-reveal>
          <p class="eyebrow">Studio</p>
          <h2>A one-person studio in Galway.</h2>
          <p class="muted">
            Every project is handled by me directly. The person you speak to at the
            start is the same person who builds your site and answers your questions
            after launch. No account managers, no outsourcing, no surprises.
          </p>
          <p class="muted">
            I design and develop in the same breath, which means the finished product
            holds together in a way that separate handoffs rarely manage.
          </p>
        </div>
        <div class="card studio-card" data-reveal data-delay="2">
          <p class="eyebrow">What to expect</p>
          <ul class="list">
            <li>One person handling the project from start to finish</li>
            <li>Quick responses and clear communication</li>
            <li>A site that loads fast and looks right on mobile</li>
            <li>Post-launch support when you need it</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" id="testimonials">
      <div class="container">
        <div class="section-head" data-reveal>
          <div>
            <p class="eyebrow">Testimonials</p>
            <h2>What clients say after launch.</h2>
          </div>
          <p class="muted">Taking on new clients now. Feedback will appear here as projects complete.</p>
        </div>
        <div class="testimonials-placeholder" data-reveal>
          <div class="card testimonials-coming-soon">
            <p class="muted">Currently working with my first clients. Testimonials coming soon.</p>
            <a class="btn outline" href="#contact">Interested in working together?</a>
          </div>
        </div>
      </div>
    </section>

    <section class="cta" id="contact">
      <div class="container cta-inner">
        <div data-reveal>
          <p class="eyebrow">Get in touch</p>
          <h2>Ready to get started?</h2>
          <p class="muted">
            Tell me a bit about your business and what you are looking for.
            I will reply within a couple of days.
          </p>
          <div class="cta-actions">
            <a class="btn primary" href="mailto:hello@ceirddigital.com">Email me directly</a>
          </div>
        </div>
        <div class="cta-card" data-reveal data-delay="2">
          <h3>What to include</h3>
          <ul class="list">
            <li>What your business does and who it serves</li>
            <li>Whether you have an existing site or are starting fresh</li>
            <li>Any rough idea of timeline or budget</li>
          </ul>
          <p class="muted small">No commitment needed for an initial chat.</p>
        </div>
      </div>
    </section>
  </div>
</template>
