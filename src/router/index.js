import ExperianceView from '@/views/ExperianceView.vue'
import ServicesView from '@/views/ServicesView.vue'
import TeamView from '@/views/TeamView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutUsView from '@/views/AboutUsView.vue'
import EmployeeMainBlock from '@/components/teams/employeeMainBlock.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: "about-us",
      component: AboutUsView
    },
    {
      path: '/services',
      name: "our-services",
      component: ServicesView
    },
    {
      path: '/experiance',
      name: "our-experiance",
      component: ExperianceView
    },
    {
      path: '/team/',
      name: "our-team",
      component: TeamView,
      redirect: { name: 'selectedEmployee', params: { id: 1 } },
      children: [
        {
          path: ':id',
          name: 'selectedEmployee',
          component: EmployeeMainBlock,
        },
      ]
    }
  ]
})

export default router
