<template>
    <div>Current component: A</div>
    <span>count: {{ count }}</span>
    <button @click="count++">+</button>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>