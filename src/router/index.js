import { createRouter, createWebHistory } from 'vue-router'
import AboutUs from '../views/About-us.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AboutUs
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
