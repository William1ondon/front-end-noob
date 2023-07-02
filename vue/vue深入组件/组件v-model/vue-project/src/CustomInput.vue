<template>
    <!-- 方法1 -->
    <!-- <input type="text"
        v-bind:value="props.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"> -->

    <!-- 方法2: 使用一个可写的、同时有getter和setter的computed属性，这里的input 的 v-model就是原生标签的用法，切勿混淆 -->
    <input v-model="value" />
</template>

<script>
import { computed } from 'vue';

export default {
    props: {
        modelValue: {
            type: String,
            required: false
        }
    },
    emits: {
        'update:modelValue':null
    },
    setup(props, ctx) {
        const value = computed({
            get() {
                return props.modelValue;
            },
            set(newValue) {
                ctx.emit('update:modelValue', newValue);
            }
        })

        return {
            props,
            value
        }
    }
}
</script>