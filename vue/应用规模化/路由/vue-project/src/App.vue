<script setup>
  import { computed, ref } from 'vue';
  import Home from './components/Home.vue';
  import About from './components/About.vue';
  import NotFound from './components/NotFound.vue';

  const routes = {
    '/': Home,
    '/About': About
  };

  const currentPath = ref(window.location.hash);

  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  });

  // 这里是自定义路由最关键的部分
  const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound;
  });
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/About">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView"/>
</template>