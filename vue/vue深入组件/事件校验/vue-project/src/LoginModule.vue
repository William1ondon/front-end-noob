<template>
    <form @submit.prevent="handleFormSubmit(email, password)">
    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email">
    <br>
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="password">
    <br>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const emit = defineEmits({
    // 校验submit事件
    submit: ({email, password}) => {
        if(email === 'admin@gmail.com' && password === '123456'){
            console.log('ok');
            return true;
        }else{
            console.log('email',email);
            console.log('password',password);
            console.log('Wrong email or wrong password');

            // 返回false的话vue会打印警告： [Warning] [Vue warn]: Invalid event arguments: event validation failed for event "submit".
            return false;
        }
    }
})

function handleFormSubmit(email, password){
    emit('submit', {email: email, password: password});
}
</script>