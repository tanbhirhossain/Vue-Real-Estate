import { createRouter, createWebHistory } from 'vue-router'
import { defaultCompany, getCompanyBySlug } from '../composables/useCompanyContext'
import HomeView from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: `/${defaultCompany.slug}`
    },
    {
      path: '/:companySlug',
      beforeEnter: (to) => {
        const companySlug = to.params.companySlug as string | undefined
        const matchedCompany = getCompanyBySlug(companySlug)
        if (!matchedCompany) {
          return {
            name: 'not-found',
            params: {
              pathMatch: to.path.slice(1).split('/')
            }
          }
        }

        if (companySlug && companySlug !== matchedCompany.slug) {
          return {
            path: `/${matchedCompany.slug}`,
            query: to.query,
            hash: to.hash,
            replace: true
          }
        }

        return true
      },
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'properties',
          name: 'properties',
          component: () => import('../pages/Properties.vue')
        },
        {
          path: 'properties/:id',
          name: 'property-details',
          component: () => import('../pages/PropertyDetails.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../pages/About.vue')
        },
        {
          path: 'agents',
          name: 'agents',
          component: () => import('../pages/Agents.vue')
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: () => import('../pages/Reviews.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../pages/Contact.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../pages/Blog.vue')
        },
        {
          path: 'faq',
          name: 'faq',
          component: () => import('../pages/FAQ.vue')
        }
      ]
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
