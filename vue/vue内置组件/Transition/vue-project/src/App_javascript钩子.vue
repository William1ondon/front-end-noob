<script setup>
import { gsap } from 'gsap';
import { onMounted, ref, watch } from 'vue';

const changeState = ref(false);

function onBeforeEnter(el) {
    gsap.set(el, {
        opacity: 1,
        scaleX: 0.25,
        scale: 0.25
    })
}

function onEnter(el, done) {
    gsap.to(el, {
        // delay: 0.5,
        duration: 1,
        opacity: 1,
        scaleX: 1,
        scaleY: 1,
        ease: "elastic.out(2.5, 1)",
        onComplete: done,
    })
}

function onLeave(el, done) {
    gsap.to(el, {
        x: 668,
        duration: 0.7,
        ease: "elastic.inOut(1, 0.5)"
    }),
    gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done,
    })
}
</script>

<template>
    <button @click="changeState = !changeState">button</button>
    <Transition name="GsapTrasition"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        :css="false">
    <!-- :css="false"显式地向Vue表明可以跳过对CSS过渡的自动检测，性能会好一点，还可以防止CSS规则意外干扰过渡效果 -->
    <!-- 在有了 :css="false" 后，我们就自己全权负责控制什么时候过渡结束了。这种情况下对于 @enter 和 @leave 钩子来说，回调函数 done 就是必须的。否则，钩子将被同步调用，过渡将立即完成。 -->
        <div class="gsap-box" v-if="changeState"></div>
    </Transition>
</template>

<style>
.gsap-box {
    width: 30px;
    height: 30px;
    background-color: cadetblue;
    border-radius: 50%;
}
</style>