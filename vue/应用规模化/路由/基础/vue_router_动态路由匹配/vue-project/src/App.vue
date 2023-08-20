<template>
  <ul>
    <li>
      <router-link to="/user/William/post/1">William's 1st post</router-link>
    </li>
    <li>
      <router-link to="/user/William/post/16">William's 16th post</router-link>
    </li>
    <li>
      <router-link to="/user/Jennifer/post/2">Jennifer's 2nd post</router-link>
    </li>
    <li>
      <router-link to="/user/Jennifer/post/18">Jennifer's 18th post</router-link>
    </li>
  </ul>

  <button @click="routeTo">Not Found button</button>
  <router-view class="routerView"></router-view>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

function routeTo() {
  router.push({
    name: 'NotFound',
    params: { pathMatch: route.path.substring(1).split('/') },
    query: route.query,
    hash: route.hash,
  });
}
</script>

<style>
.routerView {
  margin: 30px auto;
  width: 800px;
  height: 100px;
  border: 1px solid black;
  border-radius: 6px;
}
</style>