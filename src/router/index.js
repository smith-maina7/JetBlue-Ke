import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/performance',
      name: 'performance',
      component: () => import('../views/PerformanceView.vue'),
    },
    {
      path: '/coaching',
      name: 'coaching',
      component: () => import('../views/CoachingView.vue'),
    },
  ],
})

export default router
