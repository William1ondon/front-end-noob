<script setup>
import { ref, provide, readonly } from 'vue';
import Father from './Father.vue';
import { myInjectionKey } from './key.js';

const data = ref(8);
function changeData() {
  data.value++;
}

provide('provide-item', {
  data: data,
  function: changeData,
});

// 如果想确保提供的数据不被注入方的组件更改，就用readonly来包装提供的值
// readonly接受一个对象 (不论是响应式还是普通的) 或是一个 ref，返回一个原值的只读代理。
provide('read-only-count', readonly(data));

// 使用Symbol作为注入名
// 如果你正在构建大型的应用，包含非常多的依赖提供，或者你正在编写提供给其他开发者使用的组件库，建议最好使用 Symbol 来作为注入名以避免潜在的冲突。
// 因为没有两个相同的Symbol
provide(myInjectionKey, data);
</script>

<template>
  <Father></Father>
</template>