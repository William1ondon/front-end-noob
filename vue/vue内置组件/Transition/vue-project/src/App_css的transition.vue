<script setup>
  import { ref } from 'vue';
  const isActive = ref(true);
</script>

<template>
  <button @click="isActive = !isActive">Toggle</button>
  <div>
    <Transition name="my-component">
      <p v-if="isActive">Hello! Transition!</p>
    </Transition>
  </div>
</template>

<style scoped>
  .my-component-enter-active {
    transition: all 0.3s ease-out;
  }

  .my-component-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .my-component-enter-from,
  .my-component-leave-to{
    transform: translateX(20px);
    opacity: 0;
  }
</style>
