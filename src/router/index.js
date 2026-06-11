import QuizView from '@/views/QuizView.vue'
import ResultsView from '@/views/ResultsView.vue'
import StartView from '@/views/StartView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartView
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: QuizView
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView
    },
  ],
})

export default router
