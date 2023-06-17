<script setup>
import { ref } from 'vue'
import Father from './components/Father.vue';
import Slot from './components/Slot.vue';
const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
]);

const fontSize = ref(1);
</script>

<template>
    <!-- 有时候我们想和HTML元素一样向组件中传递内容 -->
    <Slot>Congratulations! This is your special label.</Slot>


    <div v-bind:style="{fontSize : fontSize + 'em'}">
      <Father
        v-for="post in posts"
        v-bind:keys="post.id"
        v-bind:title="post.title"
        v-on:enlarge-text=" {
          console.log($event);// undefined
          fontSize = fontSize + 0.1;
        }"
    />
    </div>
</template>