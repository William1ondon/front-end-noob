import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LeftSidebarView from '../views/LeftSidebarView.vue';
import RightSidebarView from '../views/RightSidebarView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // 记得是 components 而不是 component
      components: {
        default: HomeView,
        // 这里跟about的区别是我换了个位置
        LeftSidebar: LeftSidebarView,
        RightSidebar: RightSidebarView,
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: AboutView,
        LeftSidebar: RightSidebarView,
        RightSidebar: LeftSidebarView,
      }
    }
  ]
})

export default router
