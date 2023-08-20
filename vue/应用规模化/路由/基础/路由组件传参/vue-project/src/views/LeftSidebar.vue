<template>
    <div>This is LeftSidebar. user: {{ id === '' ? id : 'NULL' }}</div>
</template>

<script setup>
const id = defineProps(['id']);
</script>