<script setup>
import { computed, ref } from 'vue';
import { gsap } from 'gsap';

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' }
]

const inputData = ref('');

const fiteredData = computed(() => {
    return list.filter(({msg}) => {
        let length = inputData.value.length;
        let msgdata = msg.substring(0, length).toLowerCase();
        let inputdata = inputData.value.toLowerCase();
        if(inputdata === '')
            return true;
        return msgdata === inputdata;
    })
});

function onBeforeEnter(el) {
    el.style.opacity = 0;
    // 这个高度加上的话变换位置的时候才不会是跳楼式
    el.style.height = 0;
}

function onEnter(el, done) {
    gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.5,
        // 默认duration是0.5s
        // duration: 1,
        ease: "ease-in",
        // 回调函数done表示过渡结束，如果不加这个Dom不会刷新，元素还在原来的坑上
        onComplete: done
    })
}

function onLeave(el, done) {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.5,
        // duration: 1,
        ease: "ease-out",
        onComplete: done
    })
}
</script>

<template>
    <input type="text" v-model="inputData" placeholder="input to filter">

    <TransitionGroup
        name="list"
        tag="ul"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        :css="false">
        <li v-for="(item, index) in fiteredData"
            :key="item.msg"
            :data-index="index">
            {{ item.msg }}
        </li>
    </TransitionGroup>
</template>

<style scoped>
.list-move {
    transition: all 1s linear;
}
</style>