<template>
    <form action="">
        <label for="email">email:</label>
        <input type="text" id="email" v-bind="mail">
        <br>
        <label for="password">password:</label>
        <input type="password" id="password" v-bind="pw">
        <br>
        <button @click="$emit('submit',mail, pw )">submit</button>
        <button @click="$emit('click', 1)">click</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
const mail = ref('');
const pw = ref('');
const emit = defineEmits({
    // 没有校验
    click: (value) => {
        if(value === 1){
            console.log('It\'s 1');
        }else{
            console.log('wrong');
        }
    },

    // 校验submit事件
    submit: (email, password) => {
        if(email === 'admin@gmail.com' && password === '123456'){
            return true;
        }else{
            console.log('Wrong email or wrong password');
            return false;
        }
    }
})
</script>