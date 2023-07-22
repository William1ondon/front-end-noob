<script setup>
import { ref } from 'vue';

let count = 0;
const items = ref([]);

function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function addItem() {
  items.value.splice(randomIndex(items.value.length), 0, count++);
}

function removeItem() {
  items.value.splice(randomIndex(items.value.length), 1);
}

function getRefName(id) {
  return `id${id}`;
}

function addClass() {
  const ele = document.getElementById('6');
  ele.classList.add("myClass");
}
</script>

<template>
  <button @click="addItem">Add a item</button>
  <br>
  <button @click="removeItem">remove a item</button>
  <br>
  <button @click="addClass">add position absolute</button>

  <!-- tag 是个prop，作用是指定一个元素作为容器元素渲染，在这里就是指定ul作为容器元素渲染 -->
  <TransitionGroup name="list" tag="ul">
    <!-- 列表中的每个元素都必须有一个独一无二的 `key` attribute。 -->
    <li v-for="item in items" :key="item" :id="item">
      {{ item }}
    </li>
  </TransitionGroup>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 不加下面两个时，增加删除元素总是会弹跳一下,很生硬 */
.list-move {
  /* 这个是对移动中的元素应用的过渡 */
  transition: all 3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* 使用 position: absolute 可以实现一下效果：
    1、离场元素不再占据原来的位置，其他元素可以在其原有位置继续布局，无需因为离场元素的消失而重新布局
    2、由于离场元素不再占据空间，其他元素在过渡期间可以自然填补其位置

  经测试：“删除行为” 和 “absolute” 缺一不可，缺少一个都不会有平滑过渡的效果，原因有机会看源码的时候
  再研究
*/
.list-leave-active {
  position: absolute;
}

.myClass {
  position: absolute;
}
</style>
