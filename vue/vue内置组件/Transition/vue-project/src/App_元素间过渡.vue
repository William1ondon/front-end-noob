<script setup>
import { ref } from 'vue';

const num = ref(0);

function changeNum() {
    num.value = ( ++num.value ) % 3;
}
</script>

<template>
    <Transition name="iKun" mode="out-in">
        <button @click="changeNum" v-if="num === 0">🐔你太美</button>
        <button @click="changeNum" v-else-if="num === 1">多看一眼就要爆炸</button>
        <button @click="changeNum" v-else>再近一点快被融化</button>
    </Transition>
</template>

<style>
button {
    /* 在之前的例子中，进入和离开的元素都是在同时开始动画的，因此我们不得不将它们设为 position: absolute 以避免二者同时存在时出现的布局问题。 */
    /* 但我们可能想要先执行离开动画，然后在其完成之后再执行元素的进入动画。手动编排这样的动画是非常复杂的，好在我们可以通过向 <Transition> 传入一个 mode prop 来实现这个行为：
    in-out 或者 out-in */
    position: absolute;
    margin-top: 30px;
    width: 110px;
    height: 18px;
}

.iKun-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.iKun-enter-active {
    transition: all 0.5s cubic-bezier(0.5, 0.28, 0.84, 0.3);
}

/* .iKun-enter-to {
    transform: none;
} */

.iKun-leave-active {
    transition: all 0.5s cubic-bezier(0.6, 0.04, 0.98, 0.335);
}

.iKun-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>