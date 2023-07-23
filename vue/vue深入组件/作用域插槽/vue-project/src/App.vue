<script setup>
  import DefaultSlot from './DefaultSlot.vue';
  import NamedSlot from './NamedSlot.vue';
  import FancyListSlot from './FancyListSlot.vue';

  import {ref} from 'vue';
  const styleA = {
    color: "red"
  }
</script>

<template>
  <DefaultSlot v-slot="slotProps">
    这是从子组件传过来的参数：
    {{ slotProps.childText }}
    {{ slotProps.childCount }}
  </DefaultSlot>
  <br>
  这是从子组件（具名插槽）传过来的参数: 
  <NamedSlot>
    <template v-slot:whatever="a">
      {{ a }}
    </template>
  </NamedSlot>

  <br>

  <FancyListSlot>
    <template v-slot:fancyList="{ body, username, likes }">
      <div class="item">
        <p>{{ body }}</p>
        <p class="meta">by {{ username }} | {{ likes }} likes</p>
      </div>
    </template>
  </FancyListSlot>
</template>

<style scoped>
.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>