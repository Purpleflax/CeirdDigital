<script setup>
import { RouterLink } from 'vue-router'

const menuCategories = [
  {
    title: 'Starters & Small Plates',
    items: ['Galway Bay Chowder', 'Boxty Bites with Smoked Salmon', 'Soup of the Day'],
    priceRange: '€8 - €14'
  },
  {
    title: 'Mains',
    items: ['Guinness Beef Stew', 'Beer-Battered Fish & Chips', 'Shepherd\'s Pie'],
    priceRange: '€16 - €24'
  },
  {
    title: 'Craft Beers & Whiskey',
    items: ['12 Irish Craft Beers on Tap', '40+ Irish Whiskeys', 'Local: Galway Hooker'],
    priceRange: 'From €5.50'
  },
  {
    title: 'Sunday Roast',
    items: ['Roast Beef or Lamb', 'All the Trimmings', 'Available 1pm - 6pm'],
    priceRange: '€22'
  }
]

const events = [
  {
    day: 'Thursday',
    title: 'Traditional Music Session',
    time: 'From 9pm',
    description: 'Open to all musicians. Bring your bodhrán.'
  },
  {
    day: 'Friday',
    title: 'Live Music Night',
    time: 'From 9:30pm',
    description: 'Local bands and solo artists. This week: The Connemara Seals'
  },
  {
    day: 'Sunday',
    title: 'Afternoon Session',
    time: 'From 4pm',
    description: 'Relaxed trad music. Family friendly until 6pm.'
  },
  {
    day: 'Tuesday',
    title: 'Quiz Night',
    time: '8pm Sharp',
    description: 'Teams of up to 6. €50 bar tab for winners.'
  }
]

const reviews = [
  {
    text: 'Best chowder in Galway, and we\'ve tried them all. The music on Thursday nights is the real deal - proper trad sessions with talented locals.',
    author: 'Aoife M.',
    location: 'Galway'
  },
  {
    text: 'We wandered in during the rain and stayed for five hours. Lovely staff, great pints, and the beef stew warmed us right up.',
    author: 'James T.',
    location: 'Cork'
  },
  {
    text: 'My local for fifteen years. Siobhán and the team treat everyone like family. You\'ll never drink alone at The Solas.',
    author: 'Pádraig O\'Brien',
    location: 'Salthill'
  }
]
</script>

<template>
  <div class="solas-page">
    <!-- Sample Banner -->
    <div class="sample-banner">
      <span class="sample-badge">Sample Design</span>
      This is a fictional demo website created by Ceird Digital. The Solas Bar is not a real business.
    </div>

    <!-- Pub Navigation -->
    <header class="pub-header">
      <div class="container pub-header-inner">
        <div class="pub-brand">
          <span class="pub-logo">The Solas Bar</span>
          <span class="pub-tagline">Est. 1987</span>
        </div>
        <nav class="pub-nav">
          <a href="#menu">Menu</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#find-us">Find Us</a>
          <a href="#book" class="btn primary small">Book a Table</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section class="pub-hero">
      <div class="container">
        <p class="eyebrow light">Traditional Irish Pub · Galway City</p>
        <h1>Good craic, great food, and a warm welcome on Shop Street.</h1>
        <p class="lead">
          The Solas Bar has been a gathering place for locals and visitors since 1987.
          Traditional music sessions, craft beers, and hearty Irish fare in the heart of Galway.
        </p>
        <div class="hero-actions">
          <a href="#menu" class="btn primary">View Our Menu</a>
          <a href="#book" class="btn outline light">Book a Table</a>
        </div>
        <div class="hero-stats">
          <div>
            <span class="stat">36 Years</span>
            <span class="label">Serving Galway</span>
          </div>
          <div>
            <span class="stat">Live Music</span>
            <span class="label">Thurs - Sun</span>
          </div>
          <div>
            <span class="stat">4.8 Stars</span>
            <span class="label">250+ Reviews</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="pub-section" id="about">
      <div class="container about-grid">
        <div class="about-content">
          <p class="eyebrow">Our Story</p>
          <h2>Three generations of Brennans welcoming Galway home.</h2>
          <p class="lead">
            When Michael Brennan opened these doors in 1987, he had a simple goal: create a place
            where neighbors become friends and visitors become regulars.
          </p>
          <p>
            Today, his granddaughter Siobhán keeps that tradition alive, serving the same warm
            welcome alongside the best craft beers in Connacht.
          </p>
          <ul class="values-list">
            <li>Sourcing locally from Galway farms and fisheries</li>
            <li>Preserving traditional music sessions</li>
            <li>Making everyone feel like a local</li>
          </ul>
          <p class="signature">— The Brennan Family</p>
        </div>
        <div class="about-card">
          <div class="about-image"></div>
          <div class="about-badge">
            <span class="badge-number">36</span>
            <span class="badge-text">Years of<br>Good Craic</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Highlights -->
    <section class="pub-section pub-menu-section" id="menu">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Our Menu</p>
            <h2>Hearty Irish fare, done right.</h2>
          </div>
          <p class="muted">Fresh, local ingredients. Recipes passed down through generations.</p>
        </div>
        <div class="menu-grid">
          <div v-for="category in menuCategories" :key="category.title" class="menu-card">
            <h3>{{ category.title }}</h3>
            <ul class="menu-items">
              <li v-for="item in category.items" :key="item">{{ item }}</li>
            </ul>
            <span class="price-range">{{ category.priceRange }}</span>
          </div>
        </div>
        <div class="menu-cta">
          <a href="#" class="btn outline">View Full Menu</a>
        </div>
      </div>
    </section>

    <!-- Events -->
    <section class="pub-section pub-events-section" id="events">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">What's On</p>
            <h2>Live music, quiz nights, and sessions.</h2>
          </div>
          <p class="muted">There's always something happening at The Solas.</p>
        </div>
        <div class="events-grid">
          <div v-for="event in events" :key="event.title" class="event-card">
            <div class="event-day">{{ event.day }}</div>
            <div class="event-details">
              <h3>{{ event.title }}</h3>
              <span class="event-time">{{ event.time }}</span>
              <p class="muted">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="pub-section pub-reviews-section" id="reviews">
      <div class="container">
        <div class="section-head centered">
          <p class="eyebrow">What People Say</p>
          <h2>Don't take our word for it.</h2>
        </div>
        <div class="reviews-grid">
          <div v-for="review in reviews" :key="review.author" class="review-card">
            <div class="stars">★★★★★</div>
            <p class="review-text">"{{ review.text }}"</p>
            <div class="review-author">
              <strong>{{ review.author }}</strong>
              <span class="muted">{{ review.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Hours -->
    <section class="pub-section pub-location-section" id="find-us">
      <div class="container">
        <div class="section-head">
          <div>
            <p class="eyebrow">Find Us</p>
            <h2>In the heart of Galway.</h2>
          </div>
        </div>
        <div class="location-grid">
          <div class="location-info">
            <div class="info-block">
              <h3>Address</h3>
              <p>
                The Solas Bar<br>
                47 Shop Street<br>
                Galway City, H91 XY23<br>
                Ireland
              </p>
            </div>
            <div class="info-block">
              <h3>Contact</h3>
              <p>
                <strong>Phone:</strong> +353 91 555 0123<br>
                <strong>Email:</strong> hello@thesolasbar.ie
              </p>
            </div>
            <div class="info-block">
              <h3>Opening Hours</h3>
              <div class="hours-table">
                <div class="hours-row">
                  <span>Mon - Wed</span>
                  <span>12pm - 11:30pm</span>
                </div>
                <div class="hours-row">
                  <span>Thu - Sat</span>
                  <span>12pm - 12:30am</span>
                </div>
                <div class="hours-row">
                  <span>Sunday</span>
                  <span>12pm - 11pm</span>
                </div>
              </div>
              <p class="muted small">Kitchen open daily 12pm - 9pm</p>
            </div>
            <div class="info-block">
              <h3>Getting Here</h3>
              <ul class="directions-list">
                <li>2-minute walk from Eyre Square</li>
                <li>On-street parking evenings</li>
                <li>Bike racks outside</li>
              </ul>
            </div>
          </div>
          <div class="map-placeholder">
            <span>Map placeholder</span>
            <p class="muted small">Interactive map would appear here</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking CTA -->
    <section class="pub-cta" id="book">
      <div class="container">
        <div class="cta-content">
          <p class="eyebrow light">Book a Table</p>
          <h2>Planning a visit or private event?</h2>
          <p>
            We take reservations for groups of 6 or more. For smaller parties,
            just walk in — there's usually a seat by the fire waiting.
          </p>
          <div class="cta-actions">
            <a href="tel:+353915550123" class="btn primary">Call to Book</a>
            <a href="mailto:hello@thesolasbar.ie" class="btn outline light">Send an Email</a>
          </div>
          <div class="cta-info">
            <div>
              <strong>Groups</strong>
              <span>6+ recommended to book</span>
            </div>
            <div>
              <strong>Private Hire</strong>
              <span>Available Mon - Wed</span>
            </div>
            <div>
              <strong>Events Room</strong>
              <span>Up to 40 guests</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="pub-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="pub-logo">The Solas Bar</span>
            <p class="muted">Traditional Irish Pub · Galway City</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <a href="#menu">Menu</a>
            <a href="#events">Events</a>
            <a href="#book">Book a Table</a>
            <a href="#find-us">Find Us</a>
          </div>
          <div class="footer-social">
            <h4>Connect</h4>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">TripAdvisor</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="muted">
            Sláinte! This is a sample website design by
            <RouterLink to="/">Ceird Digital</RouterLink>.
          </p>
          <RouterLink to="/#work" class="back-link">← Back to Portfolio</RouterLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* ========================================
   The Solas Bar - Sample Pub Website
   ======================================== */

.solas-page {
  --pub-dark: #1a1512;
  --pub-gold: #d4a843;
  --pub-cream-dark: #e8dfd1;
}

/* Sample Banner */
.sample-banner {
  background: var(--accent-2);
  color: white;
  text-align: center;
  padding: 10px 20px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.sample-banner .sample-badge {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Pub Header */
.pub-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(246, 241, 233, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
}

.pub-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.pub-brand {
  display: flex;
  flex-direction: column;
}

.pub-logo {
  font-family: var(--heading);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent-2);
}

.pub-tagline {
  font-size: 0.75rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.pub-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.pub-nav a {
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.pub-nav a:hover {
  color: var(--accent);
}

.pub-nav .btn.small {
  padding: 8px 16px;
  font-size: 0.85rem;
}

/* Hero */
.pub-hero {
  position: relative;
  padding: 100px 0 80px;
  background: linear-gradient(
    145deg,
    var(--accent-2) 0%,
    #0b2a22 50%,
    var(--pub-dark) 100%
  );
  color: #f6f1e9;
  overflow: hidden;
}

.pub-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(196, 91, 61, 0.2), transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(212, 168, 67, 0.15), transparent 40%);
  pointer-events: none;
}

.pub-hero .container {
  position: relative;
  z-index: 1;
}

.pub-hero .eyebrow.light {
  color: rgba(255, 255, 255, 0.7);
}

.pub-hero h1 {
  font-family: var(--heading);
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  line-height: 1.2;
  max-width: 700px;
  margin-bottom: 20px;
}

.pub-hero .lead {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 550px;
  margin-bottom: 32px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.btn.outline.light {
  border-color: rgba(255, 255, 255, 0.4);
  color: white;
}

.btn.outline.light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.6);
}

.hero-stats {
  display: flex;
  gap: 40px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.hero-stats .stat {
  display: block;
  font-family: var(--heading);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--pub-gold);
}

.hero-stats .label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Sections */
.pub-section {
  padding: 80px 0;
}

.pub-section:nth-child(even) {
  background: var(--bg-alt);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  margin-bottom: 40px;
}

.section-head.centered {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-head h2 {
  font-family: var(--heading);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin-top: 8px;
}

/* About Section */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-content h2 {
  font-family: var(--heading);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin: 8px 0 20px;
}

.about-content .lead {
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 16px;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 24px 0;
}

.values-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  color: var(--muted);
}

.values-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-2);
  font-weight: 600;
}

.signature {
  font-family: var(--heading);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--accent);
  margin-top: 24px;
}

.about-card {
  position: relative;
}

.about-image {
  aspect-ratio: 4/5;
  background: linear-gradient(145deg, #3d2814, #5c3a1d, #8b5a2b);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.about-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: var(--accent);
  color: white;
  padding: 20px;
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 8px 30px rgba(196, 91, 61, 0.3);
}

.badge-number {
  font-family: var(--heading);
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.badge-text {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
  margin-top: 4px;
}

/* Menu Section */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.menu-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.menu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(28, 24, 18, 0.12);
}

.menu-card h3 {
  font-family: var(--heading);
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: var(--accent-2);
}

.menu-items {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
}

.menu-items li {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
  color: var(--text);
}

.menu-items li:last-child {
  border-bottom: none;
}

.price-range {
  display: inline-block;
  background: rgba(15, 59, 46, 0.08);
  color: var(--accent-2);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

.menu-cta {
  text-align: center;
  margin-top: 40px;
}

/* Events Section */
.events-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.event-card {
  display: flex;
  gap: 20px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(28, 24, 18, 0.1);
}

.event-day {
  font-family: var(--heading);
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent);
  min-width: 80px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.event-details h3 {
  font-family: var(--heading);
  font-size: 1.15rem;
  margin-bottom: 4px;
}

.event-time {
  display: inline-block;
  background: rgba(196, 91, 61, 0.1);
  color: var(--accent);
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.event-details .muted {
  font-size: 0.9rem;
  margin: 0;
}

/* Reviews Section */
.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.review-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
}

.stars {
  color: var(--pub-gold);
  font-size: 1rem;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.review-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 20px;
}

.review-author {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.review-author strong {
  font-size: 0.95rem;
}

.review-author .muted {
  font-size: 0.85rem;
}

/* Location Section */
.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: start;
}

.location-info {
  display: grid;
  gap: 28px;
}

.info-block h3 {
  font-family: var(--heading);
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--accent-2);
}

.info-block p {
  margin: 0;
  line-height: 1.7;
}

.hours-table {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.hours-row:last-child {
  border-bottom: none;
}

.directions-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.directions-list li {
  padding: 6px 0;
  padding-left: 20px;
  position: relative;
  color: var(--muted);
}

.directions-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.map-placeholder {
  aspect-ratio: 4/3;
  background: linear-gradient(145deg, #d6e0dd, #e8ebe9);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  gap: 8px;
}

.map-placeholder span {
  font-size: 0.9rem;
  font-weight: 500;
}

.small {
  font-size: 0.8rem;
}

/* CTA Section */
.pub-cta {
  padding: 80px 0;
  background: linear-gradient(
    145deg,
    var(--accent-2) 0%,
    #0b2a22 100%
  );
  color: white;
  text-align: center;
}

.pub-cta .eyebrow.light {
  color: rgba(255, 255, 255, 0.7);
}

.pub-cta h2 {
  font-family: var(--heading);
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  margin: 8px 0 16px;
}

.pub-cta > .container > p {
  color: rgba(255, 255, 255, 0.8);
  max-width: 500px;
  margin: 0 auto 32px;
}

.cta-actions {
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.cta-info {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  flex-wrap: wrap;
}

.cta-info > div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.cta-info strong {
  font-size: 0.85rem;
  color: var(--pub-gold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cta-info span {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Footer */
.pub-footer {
  background: linear-gradient(140deg, #0f3b2e 0%, #0b2735 100%);
  color: #f6f2ea;
  padding: 60px 0 30px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 40px;
}

.footer-brand .pub-logo {
  color: white;
  font-size: 1.8rem;
}

.footer-brand .muted {
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
}

.footer-links h4,
.footer-social h4 {
  font-family: var(--heading);
  font-size: 1rem;
  margin-bottom: 16px;
  color: white;
}

.footer-links a,
.footer-social a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 6px 0;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-links a:hover,
.footer-social a:hover {
  color: var(--pub-gold);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-wrap: wrap;
  gap: 16px;
}

.footer-bottom .muted {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
}

.footer-bottom a {
  color: var(--pub-gold);
}

.back-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.back-link:hover {
  color: white;
}

/* Responsive */
@media (max-width: 980px) {
  .pub-nav {
    display: none;
  }

  .about-grid,
  .location-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-card {
    order: -1;
  }

  .about-badge {
    bottom: auto;
    top: -20px;
    right: 20px;
  }

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .events-grid {
    grid-template-columns: 1fr;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 24px;
  }
}

@media (max-width: 720px) {
  .pub-hero {
    padding: 70px 0 60px;
  }

  .pub-section {
    padding: 60px 0;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .cta-info {
    flex-direction: column;
    gap: 20px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
