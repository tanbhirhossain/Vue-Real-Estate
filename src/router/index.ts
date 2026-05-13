import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/properties',
      name: 'properties',
      component: () => import('../pages/Properties.vue')
    },
    {
      path: '/properties/:id',
      name: 'property-details',
      component: () => import('../pages/PropertyDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/About.vue')
    },
    {
      path: '/agents',
      name: 'agents',
      component: () => import('../pages/Agents.vue')
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../pages/Reviews.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/Contact.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../pages/Blog.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../pages/FAQ.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../pages/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
