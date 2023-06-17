<script setup>
import { ref } from 'vue'
import Father from './components/Father.vue';
import Slot from './components/Slot.vue';

// 动态组件
import Home from './components/dynamisComponents/Home.vue';
import Posts from './components/dynamisComponents/Posts.vue';
import Archive from './components/dynamisComponents/Archive.vue';

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
]);

const fontSize = ref(1);

const tabs = {
  Home,
  Posts,
  Archive
}

const currentTab = ref('Home');
</script>

<template>
    <!-- # 有时候我们想和HTML元素一样向组件中传递内容 -->
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

    <!-- # 动态组件 -->
    <div>
      <button v-for="(_, tabName) in tabs"
            v-bind:key="tabName"
            v-bind:class="['tab-button', {active: currentTab === tabName}]"
            @click="currentTab = tabName">
        {{ tabName }}
      </button>
      <component v-bind:is="tabs[currentTab]" class="tab"></component>
    </div>
</template>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>