<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/user/william">william's user space.</RouterLink>
        <br>
        <RouterLink to="/user/abc">地址abc</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>