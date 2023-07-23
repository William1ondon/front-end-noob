<script setup>
  import ComponentA from './ComponentA.vue'
</script>

<template>
  <!-- 在使用 <script setup> 的单文件组件中，倒入的组件可以直接在模板中使用，无需注册 -->
  <ComponentA/>
</template>
