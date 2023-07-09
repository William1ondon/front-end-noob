<script setup>
  import { ref, computed } from 'vue';
  import { useMouse } from './Mouse.js';
  import { useFetch } from './useFetch.js';

  const { x, y } = useMouse();
  const { x: a, y: b } = useMouse();

  const baseUrl = 'https://jsonplaceholder.typicode.com/todos/';
  const index = ref('1');
  const url = computed(() => baseUrl + index.value);
  console.log(url.value);
  const { data, error, retry } = useFetch(url);
</script>

<template>
  <div>x: {{ x }}, y: {{ y }}</div>
  <div>a: {{ a }}, b: {{ b }}</div>

  <button v-for="i in 5" :id="i" @click="index = i">{{i}}</button>
  <br>
  <div>
    <div v-if="error">
      <p>Oops! Error encountered: {{ error }}</p>
      <button @click="retry">Retry</button>
    </div>
    <div v-else-if="data">Data loaded: <pre>{{ data }}</pre></div>
    <div v-else>loading...</div>
  </div>
</template>