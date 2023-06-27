<script setup>
    import {marked} from 'marked';
    import { ref } from 'vue';
    import { debounce } from 'lodash'

    const markdownText = ref('# Hello, Markdown!');
    const htmlText = ref('');

    const onInput = debounce((e) => {
        htmlText.value = marked(e.target.value);
    }, 200);
</script>

<template>
    <div class="editor">
      <textarea class="input" v-model="markdownText" v-on:input="onInput"></textarea>
      <div class="output" v-html="htmlText"></div>
    </div>
</template>

<style scoped>
    

    .editor {
      display: flex;
      height: 100vh;
      width: 100vw;
    }

    .input,
    .output {
      overflow: auto;
      width: 50%;
      height: 100%;
      box-sizing: border-box;
      padding: 0 20px;
    }

    .input {
      border: none;
      outline: none;

      /* 用于禁止元素的调整大小功能，通常用于textarea，以防止用户通过拖动调整文本区域的大小
      使用了以后，文本输入框右下角的小三角形也会消失 */
      resize: none;
      border-right: 1px solid #ccc;
      background-color: #f6f6f6;
      font-size: 14px;
      font-family: 'Monaco', courier, monospace;
      padding: 20px;
    }
</style>