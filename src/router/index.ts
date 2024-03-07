import { createRouter, createWebHistory } from 'vue-router'
import ShowView from '../views/ShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'show',
      component: ShowView
    }
  ]
})

export default router
