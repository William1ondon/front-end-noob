import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue';
import HomePage from '../views/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/user/abc',
      // 重定向的时候，component可省，因为完全没使用过
      // component: HomeView
      redirect: '/'
    },
    {
      // /user/id/ 后面再加任何东西都会被重定向到'/'
      path: '/user/:id(.*)',
      // 函数也可以
      redirect: to => {
        return {
          path: '/'
        }
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
      // 这就是别名，将'/homee'映射为'/'
      // alias: '/homee'
      // 甚至可以是数组
      alias: ['/homee', '/homeeeeee']
    },
    // {
    //   path: '/user/alan',
    //   redirect: to => {
    //     // 相对重定向，将'/user/alan'重定向到'/user/alan/william'，相对位置不以'/'开头
    //     return 'william';
    //   } 
    // },
    {
      path: '/user/:name',
      name: 'userPage',
      component: UserView
    }
  ]
})

export default router
