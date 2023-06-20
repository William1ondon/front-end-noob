<script setup>
    import { ref, watch } from 'vue';

    const value1 = ref('');
    const size = ref('default');

    const msgs = ref([]);
    const repos = ref(['front-end-noob', 'whatever']);
    const branches = ['sha=main', 'sha=dev'];
    const pick = ref(0);
    const since = ref('');
    const until = ref('');

    let myInit = {
        headers: {
          'Authorization': 'YOUR-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'
        } 
    };


    async function getGithubMsg() {
        let tempMsg = ['Failed to fetch msg'];
        let response = await fetch(`https://api.github.com/repos/William1ondon/${repos.value[pick.value]}/commits?${branches[pick.value === 0 ? 1 : 0]}${since.value}${until.value}`, myInit);
        console.log(response);
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

    watch(value1, (newValue) => {
        let sinceString = newValue[0].toISOString();
        let untilString = newValue[1].toISOString();

        since.value = sinceString ? ('&since=' + sinceString) : '';
        until.value = untilString ? ('&until=' + untilString) : '';
    })
</script>

<template>
    <div class="demo-date-picker">
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :size='size'
        />
      </div>
    </div>

    <div class="middle">
      <input type="radio" id="front-end-noob" v-model="pick" value="0">
      <label for="front-end-noob">front-end-noob&nbsp&nbsp&nbsp</label>
      <input type="radio" id="whatever" v-model="pick" value="1">
      <label for="whatever">whatever&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>

      <button @click="update">Show me commits!</button>
      <ul>
        <li v-for="item in msgs">
            <div>{{ item['tree']['sha'].substring(0, 8) }}</div>
            <div>{{'message:  ' + item['message']}}</div>
            <div>{{ 'By  ' + item['author']['name'] + 'at  ' + item['author']['date'] }}</div>
        </li>
      </ul>
    </div>
</template>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.middle {
    margin: 0 auto;
    width: 360px;
}
</style>