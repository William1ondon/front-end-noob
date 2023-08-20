<template>
  <form @submit.prevent="login">
    <label for="account">Account: </label>
    <input type="text" id="account" v-model="account" required>
    <br>
    <label for="password">Password: </label>
    <input type="password" id="password" v-model="password" required>
    <button>Login</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const account = ref('');
const password = ref('');
const router = useRouter();

function login() {
  if(account.value === 'lzm' && password.value === '123'){
    router.push('/dashboard/lzm');
  } else {
    alert('账号或密码错误！');
  }
}
</script>