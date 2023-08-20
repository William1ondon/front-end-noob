import { createRouter, createWebHashHistory } from 'vue-router';
import UserPost from '../views/UserPost.vue';
import NotFound from '../views/NotFound.vue';
import UserGeneric from '../views/UserGeneric.vue';

const routes = [
  { path: '/user/:name/post/:index', component: UserPost },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/user-:afterUser(.*)', component: UserGeneric }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router
