import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import DashBoard from '../views/DashBoard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      alias: '/'
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: DashBoard
    }
  ]
})

export default router
