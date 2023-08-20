import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import UserPage from '../views/UserPage.vue';
import Posts from '../components/Posts.vue';
import Profile from '../components/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 以 / 开头的嵌套路径将被视为根路径。这允许你利用组件嵌套，而不必使用嵌套的 URL。
      path: '/user',
      // name: 'defaultView'，
      component: UserPage,
      children: [
        {
          path: 'posts',
          name: 'posts',
          component: Posts
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '',
          name: 'default',
          component: UserPage
        }
      ]
    }
  ]
})

export default router
