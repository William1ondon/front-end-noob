<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/user/jennifer">jennifer</RouterLink>
        <br>
        <RouterLink to="/user/william">william</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <RouterView name="LeftSidebar"/>
  <RouterView name="RightSidebar"/>
</template>