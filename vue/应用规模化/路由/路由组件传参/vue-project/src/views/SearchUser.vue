<template>
    <div>You want to query {{ QUERY }} ?</div>
</template>

<script setup>
const QUERY = defineProps(['query']);
</script>