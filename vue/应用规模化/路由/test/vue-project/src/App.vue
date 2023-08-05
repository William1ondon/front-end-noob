<script setup>
import WelcomeItem from './components/WelcomeItem.vue';
const em = { a: true };
</script>

<template>
  <WelcomeItem abc="123" :def="em"/>
</template>