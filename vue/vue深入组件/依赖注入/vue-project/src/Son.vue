<template>
    <button @click="changeData">Button: {{ data + ',' + Data }}</button>
</template>

<script setup>
import { inject } from 'vue';
import { myInjectionKey } from './key.js';

const { data, function: changeData } = inject('provide-item');
const Data = inject(myInjectionKey);
</script>