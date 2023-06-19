<script setup>
    import { ref } from 'vue';

    const msgs = ref([]);
    const repos = ref(['front-end-noob', 'whatever']);

    let myInit = { since: '2023-06-18T12:30:45Z' };


    async function getGithubMsg() {
        let tempMsg = ['Failed to fetch msg'];
        let response = await fetch(`https://api.github.com/repos/William1ondon/${repos.value[0]}/commits`, myInit);
        let parseData = await response.json();
        tempMsg = parseData.map((item) => {
              return item['commit'];
        });
        console.log(tempMsg);
        return tempMsg;
    }

    async function update() {
        msgs.value = await getGithubMsg();
    }
</script>

<template>
    <button @click="update" style="width: 60px; height: 16px;">Button</button>
    <ul>
      <li v-for="item in msgs">
          <div>{{ item['tree']['sha'].substring(0, 8) }}</div>
          <div>{{'message:  ' + item['message']}}</div>
          <div>{{ 'By  ' + item['author']['name'] + 'at  ' + item['author']['date'] }}</div>
      </li>
    </ul>
</template>