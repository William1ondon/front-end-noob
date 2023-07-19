<script setup>
    import 'animate.css';
    import { ref } from 'vue';

    const isActive = ref(true);
</script>

<template>
    <button v-on:click="isActive = !isActive">Button</button>

    <!-- 这个animate__animated是一定要添加的 -->
    <!-- 这里的enter-active-class不用像transition一样随着"name"去命名 -->
    <Transition
        name="custom-classes"
        enter-active-class="animate__animated animate__flip"
        leave-active-class="animate__animated animate__hinge">
        <p v-if="isActive">Oh my Ferrari!</p>
    </Transition>
</template>