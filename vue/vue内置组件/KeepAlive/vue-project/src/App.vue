<script setup>
import A from './components/A.vue';
import B from './components/B.vue';
import { ref, shallowRef } from 'vue';

// const component = ref(A);
// 这样也行，但会弹出来一个警告，因为这里接收到的是一整个组件对象，然后转换成一个响应式对象
// 但是这是没必要的，我们不需要跟踪组件下面的各种东西
// 和 ref() 不同，浅层 ref （即shallowRef）的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 .value 的访问是响应式的。
// shallowRef() 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成。

const component = shallowRef(A);
</script>

<template>
  <label for="A">A component:</label>
  <input type="radio" :value="A" id="A" v-model="component" checked>
  <br>
  <label for="B">B component:</label>
  <input type="radio" :value="B" v-model="component">
  
  <!-- KeepAlive 它的功能是在多个组件间动态切换时缓存被移除的组件实例。 -->
  <!-- 不加这个，你会发现在切回来之后，之前已更改的状态都被重置了 -->
  <KeepAlive>
    <component :is="component"/>
  </KeepAlive>

  <hr>

  <!-- 缓存A和B -->
  <KeepAlive include="A,B">
    <component :is="component"/>
  </KeepAlive>

  <hr>

  <!-- 只包含了A，B不会被缓存 -->
  <KeepAlive include="A">
    <component :is="component"/>
  </KeepAlive>

  <hr>

  <!-- 排除A，只有B被缓存 -->
  <KeepAlive exclude="A">
    <component :is="component"/>
  </KeepAlive>
</template>