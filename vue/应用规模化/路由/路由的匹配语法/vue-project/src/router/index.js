import { createRouter, createWebHistory } from 'vue-router'
import Number from '../views/Number.vue';
import NotNumber from '../views/NotNumber.vue';

const routes = [
  // {
  //   // 仅匹配数字
  //   path: '/:chapters(\\d+)',
  //   name: 'number',
  //   component: Number
  // },
  // {
  //   // 匹配其他任何内容
  //   path: '/:chapters',
  //   name: 'notNumber',
  //   component: NotNumber
  // },
  {
    // 可重复的参数
    // * 零个或多个
    path: '/:chapters(\\d+)*',
    name: 'manyNumber',
    component: Number
  },
  {
    // + 一个或多个
    path: '/:chapters+',
    name: 'notNumber',
    component: NotNumber
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
