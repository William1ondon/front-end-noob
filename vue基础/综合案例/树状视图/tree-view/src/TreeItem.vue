<template>
    <div
        :class="{ bold: ifExist }"
        @click="isActive = !isActive"
        @dblclick="!ifExist ? addChild() : ''">
        {{ srcData.name }}
        <span v-if="ifExist">{{ isActive ? '[-]' : '[+]' }}</span>
    </div>
    <ul v-show="isActive" v-if="ifExist">
        <li v-for="childrenItem in srcData.children">
            <TreeItem v-bind:srcData="childrenItem"/>
        </li>
        <li @click="srcData.children.push({name: 'stuff'})">+</li>
    </ul>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    // 一个可以通过其“name”选项递归渲染自己的组件，
    // (如果使用单文件组件，则从文件名推断)
    name: 'TreeItem',
    props: {
        srcData: Object,
    },
    setup(props, ctx) {
        const isActive = ref(false);
        const ifExist = ref(false);
        const { srcData } = props;

        watch(srcData, (newValue) => {
            ifExist.value = newValue.children && newValue.children.length;
        }, { immediate: true });

        function addChild() {
            srcData.children = [{ name: 'stuff' }];
            isActive.value = true;
        }

        return {
            isActive,
            ifExist,
            addChild,
        };
    }
}
</script>