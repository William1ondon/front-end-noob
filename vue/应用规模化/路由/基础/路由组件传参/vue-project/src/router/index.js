import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue';
import LeftSidebar from '../views/LeftSidebar.vue';
import RightSidebar from '../views/RightSidebar.vue';
import Promotion from '../views/Promotion.vue';
import SearchUser from '../views/SearchUser.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/user/:id',
    //   name: 'user',
    //   component: User,
    //   // 当props设置为true时，route.params将被设置为组件的props
    //   props: true
    // }
    {
      path: '/user/:id',
      name: 'user',
      components: {
        default: User,
        LeftSidebar: LeftSidebar,
        RightSidebar: RightSidebar,
      },
      // 有命名视图的，一定要为每个命名视图定义porps配置
      props: {
        default: true,
        LeftSidebar: false,
        RightSidebar: true,
      }
    },
    // 对象模式
    {
      path: '/promotion/from-newsletter',
      component: Promotion,
      props: { newsletterPopup: true, what: 'true' }
    },
    // 函数模式
    {
      path: '/search',
      component: SearchUser,
      // URL(比如'/search?q=william')会传递一个{ query: 'william' }对象过去
      props: (route) => ({ query: route.query.q }) 
    }
  ]
})

export default router
