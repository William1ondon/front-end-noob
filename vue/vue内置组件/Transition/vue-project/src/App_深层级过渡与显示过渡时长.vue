<script setup>
    import { ref } from 'vue';

    const isActive = ref(true);
</script>

<template>
    <button @click="isActive = !isActive">Toggle</button>

    <!-- 
        默认情况下，<Transition>组件会通过监听过渡->>根元素上的第一个<<-transition end或者animation end事件来尝试自动判断过渡何时结束。
        而在嵌套的过渡中，期望的行为应该是等待所有内部元素的过渡完成，在这种情况下我们就需要 duration prop来显式指定过渡的持续时间
     -->
    <Transition name="DeepTransition"
        :duration="550">
        <div class="outer" v-if="isActive">
            <div class="inner">
                I am the inner item.
            </div>
        </div>
    </Transition>
    <!-- 
        如果有必要的话，你也可以用对象的形式传入，分开指定进入和离开所需的时间：
        <Transition :duration="{ enter: 500, leave: 800 }">...</Transition>
     -->
</template>

<style scoped>
.outer {
    width: 300px;
    height: 100px;
    padding: 35px;
    box-sizing: border-box;
    background-color: brown;
}

.inner {
    width: 130px;
    height: 30px;
    margin: auto;
    line-height: 30px;
    background-color: skyblue;
}

/* 因为 xxx-enter-active实际上是在根元素上的，所以不能用子集选择器，可以直接不写或者交集选择器 */
.DeepTransition-enter-active.outer,
.DeepTransition-leave-active.outer {
    transition: all 0.3s ease-in-out;
}

.DeepTransition-enter-from.outer,
.DeepTransition-leave-to.outer {
    transform: translateY(60px);
    opacity: 0;
}

.DeepTransition-leave-to.outer {
    transition-delay: 0.3s;
}

.DeepTransition-leave-active .inner,
.DeepTransition-enter-active .inner {
    transition: all 0.3s linear;
}

.DeepTransition-enter-active .inner{
    transition-delay: 0.25s;
}

.DeepTransition-enter-from .inner,
.DeepTransition-leave-to .inner {
    transform: translateX(60px);
    opacity: 0;
}
</style>