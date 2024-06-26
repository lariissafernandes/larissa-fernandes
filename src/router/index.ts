import MainDesktopLayout from '@/layouts/main-desktop.layout.vue'
import HomePageView from '@/views/home-page.view.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainDesktopLayout,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePageView,
          meta: {
            title: 'Início'
          }
        },
        {
          path: 'experiencia',
          name: 'Experience',
          component: HomePageView,
          meta: {
            title: 'Experiência'
          }
        }
      ]
    }
  ]
})

export default router
