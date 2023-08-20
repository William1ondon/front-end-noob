<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/user/posts">My Posts</RouterLink>
        <br>
        <RouterLink to="/user/profile">My Profile</RouterLink>
        <br>
        <RouterLink to="/user">Default view</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>