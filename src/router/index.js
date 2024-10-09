import MainVue from '@/views/MainVue.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "main",
      component: MainVue
    }
  ]
})

export default router
