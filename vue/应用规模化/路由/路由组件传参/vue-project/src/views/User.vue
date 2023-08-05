<template>
  <!-- 这允许你在任何地方使用该组件，使得该组件更容易重用和测试 -->
  <!-- 官方说的，暂时还不知道什么意思 -->
  <div>User: {{ id }}</div>
</template>

<script setup>
const id = defineProps(['id']);
</script>