import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/samples/the-solas-bar', name: 'the-solas-bar', component: () => import('./pages/samples/TheSolasBar.vue') },
    { path: '/samples/:slug', name: 'sample', component: () => import('./pages/Sample.vue') },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
