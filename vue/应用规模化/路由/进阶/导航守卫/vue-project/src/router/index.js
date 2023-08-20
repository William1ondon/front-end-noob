import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      /**
       * ## 路由独享的守卫
       * ·发生的时间节点: 只在进入路由时触发，【不会在params、query或hash改变时触发】
       * ·传入: 函数
       * ·作用: 与全局前置守卫相同(详见 注解.md)
       */
      beforeEnter: (to, from) => {
        // reject the navigation
        return false;
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// Notice: 守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于等待中。

/**
 * ## 全局前置守卫
 * ·发生的时间节点: 一个导航触发时(p.s.全局前置守卫按照创建顺序调用)
 * ·传入: 函数
 * ·作用: 检查地址，防止不合法或未授权的地址？
 * @to: 即将要进入的目标
 * @from: 当前导航正要离开的路由
 * return(二选一)：
 *    false: 取消当前的导航
 *    一个路由地址: 通过此路由地址跳转到一个不同的地址
 *    其他: 什么都没返回、undefined或返回true，则导航都是有效的，并调用下一个导航守卫
 */
router.beforeEach(async (to, from) => {
  if(
    // 检查用户是否已登陆
    !isAuthenticated && 
    // 避免无限重定向
    to.name !== 'Login' ){
      // 将用户重定向到登录页面
      return { name: 'Login' };
    }
})

/**
 * ## 全局解析守卫
 * ·发生的时间节点: 在导航被确认之前、所有组件内守卫和异步路由组件被解析后调用(详情见 注解.md)
 * ·传入: to函数
 * ·作用: 导航确认前确认某些必要事项是否没问题，比如在这里就是看看摄像头许可给没给，给了就确认进入，没给就执行其他操作
 *       官方描述是: router.beforeResolve 是获取数据或执行任何其他操作（如果用户无法进入页面时你希望避免执行的操作）的理想位置。
 */
router.beforeResolve(async to => {
  if(to.meta.requiresCamera){
    try {
      await askForCameraPermission();
    } catch (error) {
      if(error instanceof NotAllowedError){
        // ... 处理错误，然后取消导航
        return false;
      } else {
        // 意料之外的错误，取消导航并把错误传给全局处理器
        throw error;
      }
    }
  }
})

/**
 * ## 全局后置钩子
 * ·发生的时间节点: 导航被确认后
 * ·传入: 函数
 * ·作用: 分析、更改页面标题、声明页面等辅助功能，这个钩子不接受next函数也不会改变导航本身
 * @to: 即将要进入的目标
 * @from: 当前导航正要离开的路由
 */
router.afterEach((to, from) => {
  sendToAnalytics(to.fullPath)
})


export default router
