import { createRouter, createWebHistory } from 'vue-router'
import UserPost from './components/UserPost.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/users/:username/posts/:postId', component: UserPost }],
})
