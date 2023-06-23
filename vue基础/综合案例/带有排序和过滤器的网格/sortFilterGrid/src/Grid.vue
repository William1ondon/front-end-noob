<script>
import { ref, computed, watch } from 'vue';

export default{
    props: {
        lists: Array,
        titles: Array,
        inputTex: String,
    },
    setup(props, ctx) {
        // (a,...,lastOne)，','用于执行多个表达式，并返回最后一个表达式的结果
        const keysFlag = ref(
            props.titles.reduce((accumulator, currentValue) => ( accumulator[currentValue] = 1, accumulator), {})
        );

        const keyFocus = ref('');

        const filteredData = computed(() => {
            let { lists:data, inputTex } = props;
            if(inputTex){
                // filter,callbackFunc应返回布尔值，为真则保留元素
                inputTex = inputTex.toLowerCase();
                data = data.filter((row)=>{
                    // some: 测试数组中是否至少有一个元素通过了由提供的函数进行的测试，有则返回true
                    return Object.keys(row).some((key) => {
                        // String在作为函数调用时执行类型转换，而不是作为构造函数使用
                        return String(row[key]).toLowerCase().indexOf(inputTex) > -1;
                    })
                })
            }
            if(keyFocus.value){
                console.log(data);
                let order = keysFlag.value[keyFocus.value];
                data = data.slice().sort((a, b) => {
                    a = a[keyFocus.value.toLowerCase()];
                    b = b[keyFocus.value.toLowerCase()];
                    console.log(a,b);
                    return (a === b ? 0 : (a > b ? 1 : -1))*order;
                })
            }
            return data;
        });

        function changeStatus(key) {
            keyFocus.value = key;
            keysFlag.value[key] *= -1;
        }

        watch(keyFocus, (newValue)=>{
            console.log(newValue);
        }, {immediate:true});

        watch(keysFlag, (newValue)=>{
            console.log(newValue);
        })

        return {
            filteredData,
            changeStatus,
            keysFlag,
        };
    }
}
</script>

<template>
    <table v-if="filteredData.length">
        <thead>
            <tr>
                <th v-for="key in titles"
                    @click="changeStatus(key)"
                    class="arrow" :class="keysFlag[key] === 1? 'asc' : 'dsc'">{{ key }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="obj in filteredData">
                <td v-for="item in obj">{{ item }}</td>
            </tr>
        </tbody>
    </table>
    <span v-else>No matches found.</span>
</template>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>