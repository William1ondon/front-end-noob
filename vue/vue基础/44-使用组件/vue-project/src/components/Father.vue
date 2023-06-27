<script setup>
    import ButtonCounter from './Son.vue';

    // defineProps 和 defineEmits 都仅可用于 <script setup> 之中，都不需要导入
    const props = defineProps(['title', 'keys']);
    const emits = defineEmits(['enlarge-text']);

    // defineProps 会返回一个对象，其中包含了可以传递给组件的所有 props： 
    console.log('props', props);// props是儿子给父亲的接口，父亲可以给儿子里的属性赋值
    console.log('emits', emits);// emits是儿子发给父亲的事件，对父亲来说，就跟监听原生DOM事件一样
    // emits('enlarge-text');// 可以像这样直接发送事件
</script>

<template>
    <h1>Here is a child component</h1>
    <h2>{{ 'title: ' + title?title:'noTitle' + ', ' + 'key: ' + keys?keys:'noKey'}}</h2>
    <button @click="$emit('enlarge-text')">Enlarge Text Button</button>
    <ButtonCounter/>
    <!-- 
    · 组件可被重用多次
    · 推荐子组件使用 PascalCase ， 即每个单词首字母大写 -->
    <ButtonCounter/>
    <ButtonCounter/>
</template>