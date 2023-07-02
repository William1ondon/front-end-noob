<template>
    <slot name="whatever"
        :obj0="childObj1"
        :obj1="childObj2"></slot>
</template>

<script setup>
import { ref } from 'vue';
const childObj1 = ref({
    name: 'NamedSlot',
    str: 'Hello VUE!'
});
const childObj2 = ref({
    name: 'NamedSlot1',
    str: 'Hello VUE3!'
});
</script>