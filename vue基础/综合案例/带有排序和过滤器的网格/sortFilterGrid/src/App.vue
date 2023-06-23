<script setup>
    import { ref } from 'vue';
    import Grid from './Grid.vue';

    const gridData = [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ];

    const titles = [
      'Name',
      'Power'
    ]

    const inputVal = ref('');
</script>

<template>
  <form>
    <span>Search</span>
    <input type="text" v-model="inputVal">
    <Grid
      :lists="gridData"
      :titles="titles"
      :inputTex="inputVal"/>
  </form>
</template>