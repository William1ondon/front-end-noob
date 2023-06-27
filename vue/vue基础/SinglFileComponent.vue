<template>
    <!-- 模板部分 -->
    <div class="my-component">
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
    // 脚本部分
    export default {
      data() {
        return {
          title: 'Hello',
          message: 'Welcome to my component'
        };
      }
    };
  </script>
  
  <style>
    /* 样式部分 */
    .my-component {
      background-color: #f0f0f0;
      padding: 20px;
      border: 1px solid #ccc;
    }
  </style>
  