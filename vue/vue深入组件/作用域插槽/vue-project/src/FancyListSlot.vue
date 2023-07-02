<template>
    <ul>
        <li v-for="item in items">
            <li v-if="!items.length">
                Loading...
            </li>
            <slot 
                name="fancyList"
                v-bind="item">No Data Yet...</slot>
                <!-- v-bind如果加名字，比如 v-bind:item="item"
                    就变成了 { "item": item }，不加名字呢就直接是数据 -->
        </li>
    </ul>
</template>

<script setup>
    import { ref } from 'vue';

    const items = ref([]);

    let myKey = {
        headers: {
            'x-api-key': 'PMAK-64a17e9e4c2152003868a255-38b585608aadc7dc1bf22368cfce2661b0'
        }
    }

    async function getMockData() {
        let response = await fetch('https://342d4909-cdfc-4202-a722-3f3fd55cea14.mock.pstmn.io/abc', myKey);
        let str = await response.json();
        console.log(str.args.data); 
        if(str){
            items.value = str.args.data;
        }
    }

    getMockData();
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
  }
  li {
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
  }
</style>