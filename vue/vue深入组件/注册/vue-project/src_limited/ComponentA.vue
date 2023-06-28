<template>
    <div class="comA">
        Hello vue from ComponentA
        <componentB/>
        <component-B/>
        <component-b/>

        <!-- 这三不行 -->
        <!-- <Component-B/>
        <Component-b/>
        <ComponentB/> -->
    </div>
</template>

<script>
    import ComponentB from './ComponentB.vue'

    export default {
        components: {
            componentB: ComponentB
        },
        setup(){
            return {}
        }
    }
</script>

<style>
    .comA {
        color: skyblue;
    }
</style>