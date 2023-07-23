<script setup>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
import SelfDefineModel from './SelfDefineModel.vue';
import ModelModifier from './ModelModifier.vue';

const searchText = ref('');
const value = ref('');
const value1 = ref('');
</script>

<template>
  <span>{{ searchText }}</span>

  <!-- 表面上我们这么写，如果是原生标签那么这么写就行，其他什么都不用做 -->
  <CustomInput v-model="searchText"/>
  {{ console.log(searchText)}}

  <!-- 但这是自定义标签，因此自定义组件的操作要自己实现，如下为v-model展开的样子，根据这个来实现组件相应功能，注意modelValue是vue默认内部实现的名字 -->
  <!-- <CustomInput
    v-bind:modelValue="searchText"
    v-on:update:modelValue="newValue => searchText = newValue"/> -->

  <!-- 自定义 v-model 参数（名） -->
  <SelfDefineModel 
    v-model:selfDefinedVal="value"/>{{ value }}

  <!-- v-model自定义修饰符 -->
  <ModelModifier
    v-model.capitalize="value1"/>{{ value1 }}
</template>