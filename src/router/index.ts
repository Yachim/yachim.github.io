import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";

// TODO: skills and portfolio will be on the home page
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomeView
    },
    {
      path: '/cv',
      name: 'cv',
      component: HomeView
    },
  ]
})

export default router
