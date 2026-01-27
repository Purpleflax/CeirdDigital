<script setup>
import WorkCard from '@/components/WorkCard.vue'
import { projects } from '@/data/projects.js'

const featuredProject = projects.find(p => p.featured)
const standardProjects = projects.filter(p => !p.featured)
</script>

<template>
  <div>
    <section class="hero" id="top">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="hero-meta">
            <p class="eyebrow">Local business websites</p>
            <span class="location-tag">Based in Galway, Ireland</span>
          </div>
          <h1>Simple, modern websites built for local businesses who want it done for them.</h1>
          <p class="lead">
            Ceird Digital partners with local owners to design and build websites that look
            professional, load fast, and bring in more calls, bookings, and walk-ins.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Get a free website plan</a>
            <a class="btn outline" href="#services">See services</a>
          </div>
          <div class="hero-stats">
            <div>
              <span class="stat">2-4 weeks</span>
              <span class="label">Typical build</span>
            </div>
            <div>
              <span class="stat">Clear pricing</span>
              <span class="label">No surprises</span>
            </div>
            <div>
              <span class="stat">Local SEO</span>
              <span class="label">Built in</span>
            </div>
          </div>
        </div>
        <div class="hero-card">
          <div class="hero-card-header">
            <span class="pill">Project Snapshot</span>
            <span class="muted">Local business package</span>
          </div>
          <h3>Done-for-you website package</h3>
          <p>
            We keep it simple. You get a polished website, clear messaging, and a launch plan without
            the technical hassle.
          </p>
          <ul class="hero-list">
            <li>Copy polish and page structure</li>
            <li>Mobile-friendly design</li>
            <li>Contact forms and booking links</li>
            <li>Google-ready SEO setup</li>
          </ul>
          <div class="hero-card-footer">
            <div>
              <span class="stat">5-8</span>
              <span class="label">Pages</span>
            </div>
            <div>
              <span class="stat">2</span>
              <span class="label">Review rounds</span>
            </div>
            <div>
              <span class="stat">30 days</span>
              <span class="label">Launch support</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="logo-strip">
      <div class="container">
        <p class="muted">Trusted by local owners who want a site that works.</p>
        <div class="logo-row">
          <span>Neighborhood Bakery</span>
          <span>Brightside Dental</span>
          <span>Oak Street Fitness</span>
          <span>Harbor Auto Care</span>
          <span>Lakeside Spa</span>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Services</p>
            <h2>Everything you need for a professional local business site.</h2>
          </div>
          <p class="muted">We guide you through each step and handle the technical details.</p>
        </div>
        <div class="services-grid">
          <article class="card">
            <p class="pill soft">01</p>
            <h3>Website Design</h3>
            <p class="muted">
              Clean layouts that build trust and make it easy for customers to reach you.
            </p>
            <ul class="list">
              <li>Homepage and service pages</li>
              <li>Mobile-first design</li>
              <li>Photo and content guidance</li>
            </ul>
          </article>
          <article class="card">
            <p class="pill soft">02</p>
            <h3>Build + Launch</h3>
            <p class="muted">
              We build it, test it, and launch it so you can get back to running the business.
            </p>
            <ul class="list">
              <li>Fast, secure hosting setup</li>
              <li>Contact forms and tracking</li>
              <li>Search-ready structure</li>
            </ul>
          </article>
          <article class="card">
            <p class="pill soft">03</p>
            <h3>Local SEO Boost</h3>
            <p class="muted">Make it easy for nearby customers to find and trust you.</p>
            <ul class="list">
              <li>Google business profile support</li>
              <li>Location and service keywords</li>
              <li>Reviews and testimonials setup</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="work">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Sample Projects</p>
            <h2>Fictional business websites showcasing what I can build for you.</h2>
          </div>
          <p class="muted">Demo designs for local Irish businesses.</p>
        </div>
        <div class="work-grid-featured">
          <WorkCard :project="featuredProject" featured />
          <WorkCard
            v-for="project in standardProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </section>

    <section class="section" id="process">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Process</p>
            <h2>Clear milestones, friendly guidance.</h2>
          </div>
          <p class="muted">A simple process designed for busy owners.</p>
        </div>
        <div class="process-grid">
          <div class="process-step">
            <span class="step-number">01</span>
            <h3>Kickoff Call</h3>
            <p class="muted">We talk goals, customers, and what you want the site to do.</p>
          </div>
          <div class="process-step">
            <span class="step-number">02</span>
            <h3>Content Plan</h3>
            <p class="muted">We outline pages, write copy together, and gather photos.</p>
          </div>
          <div class="process-step">
            <span class="step-number">03</span>
            <h3>Design + Build</h3>
            <p class="muted">We design, build, and show you a working preview.</p>
          </div>
          <div class="process-step">
            <span class="step-number">04</span>
            <h3>Launch</h3>
            <p class="muted">We go live, connect your domain, and monitor performance.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section split" id="studio">
      <div class="container split-grid">
        <div>
          <p class="eyebrow">Studio</p>
          <h2>Solo studio, local focus.</h2>
          <p class="muted">
            Ceird Digital is run by Jeffrey Reynolds with a focus on the Galway community. You work
            directly with me from first call to launch, so nothing gets lost in the shuffle.
          </p>
          <div class="studio-points">
            <div>
              <span class="stat">1:1</span>
              <span class="label">Direct collaboration</span>
            </div>
            <div>
              <span class="stat">Plain talk</span>
              <span class="label">No jargon</span>
            </div>
            <div>
              <span class="stat">Galway</span>
              <span class="label">Local projects</span>
            </div>
          </div>
        </div>
        <div class="metrics-card">
          <h3>What local owners notice</h3>
          <ul class="list">
            <li>Clearer services and pricing</li>
            <li>More calls and form submissions</li>
            <li>Customers find them faster</li>
            <li>Site updates are easy</li>
          </ul>
          <div class="metrics-footer">
            <div>
              <span class="stat">+25%</span>
              <span class="label">Lead lift</span>
            </div>
            <div>
              <span class="stat">2x</span>
              <span class="label">Calls and inquiries</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="testimonials">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Testimonials</p>
            <h2>Owners who wanted a website that finally feels right.</h2>
          </div>
          <p class="muted">Short notes from local business owners.</p>
        </div>
        <div class="testimonials-grid">
          <figure class="card quote">
            <blockquote>
              "They made this so easy. We went from no website to a polished launch in weeks."
            </blockquote>
            <figcaption>
              <span class="name">Amira S.</span>
              <span class="muted">Owner, Lakeside Spa</span>
            </figcaption>
          </figure>
          <figure class="card quote">
            <blockquote>
              "We started getting calls right away. Customers say the site looks trustworthy."
            </blockquote>
            <figcaption>
              <span class="name">Jon K.</span>
              <span class="muted">Owner, Harbor Auto Care</span>
            </figcaption>
          </figure>
          <figure class="card quote">
            <blockquote>
              "They handled everything and kept it simple. The site now brings in new patients."
            </blockquote>
            <figcaption>
              <span class="name">Elena R.</span>
              <span class="muted">Practice Manager, Brightside Dental</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="cta" id="contact">
      <div class="container cta-inner">
        <div>
          <p class="eyebrow">Start a project</p>
          <h2>Ready for a website you can feel proud of?</h2>
          <p class="muted">
            Tell me about your business and what you need. I will reply within two business days.
          </p>
          <div class="cta-actions">
            <a class="btn primary" href="mailto:hello@ceirddigital.com">Email me</a>
            <a class="btn outline" href="#services">See packages</a>
          </div>
        </div>
        <div class="cta-card">
          <h3>Typical project scope</h3>
          <ul class="list">
            <li>Homepage + service pages</li>
            <li>Simple booking or contact form</li>
            <li>Photo and copy guidance</li>
            <li>Launch and support</li>
          </ul>
          <p class="muted small">Need it fast? Ask about a two-week turnaround.</p>
        </div>
      </div>
    </section>
  </div>
</template>
