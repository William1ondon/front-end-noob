<template>
    <div>Current component: B</div>
    <span>Message: {{ msg }}</span>
    <input type="text" v-model="msg">
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('');
</script>