<template>
    <div>This is Promotion.vue, the prop is {{ prop }}</div>
</template>

<script setup>
const prop = defineProps(['newsletterPopup', 'what']);
</script>