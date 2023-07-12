<script setup>
    import { ref } from 'vue';

    const show = ref(false);
</script>

<template>
    <button @click="show = !show">Button</button>

    <Transition name="bounce">
        <p v-if="show" style="text-align: center;">
            Hello! Here is bouncy text!
        </p>
    </Transition>
</template>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 1s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}
</style>