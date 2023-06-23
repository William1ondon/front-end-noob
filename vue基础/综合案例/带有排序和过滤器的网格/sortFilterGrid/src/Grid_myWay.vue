<template>
    <table>
        <thead>
            <tr>
                <th v-for="item in titles"
                    @click="sortBy(item)"
                    >
                    {{ item }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in computedLists">
                <td>{{ item.name }}</td>
                <td>{{ item.power }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
    props: {
        // Array用来制定lists的数据类型，如果实际传送的不是Array，会触发警告
        lists: Array,
        titles: Array,
        inputTex: String,
    },
    setup(props, ctx) {
        const flag = ref(false);
        const tempLists = ref([]);
        const focusName = ref(true);

        const computedLists = computed(() => {
            let finalList = [...tempLists.value];
            finalList.sort(flag.value ? asc : dsc);
            finalList = finalList.filter(element => {
                let len = props.inputTex.length;
                return element.name.substring(0, len).localeCompare(props.inputTex) === 0;
            });
            return finalList;
        });

        watch(()=>props.lists, (newArray) => (tempLists.value = [...newArray]), {immediate: true, deep: true});

        function asc(a, b) {
            return focusName.value ? a.name.localeCompare(b.name) : (a.power > b.power ? 1 : -1);
        }

        function dsc(a, b) {
            return focusName.value ? b.name.localeCompare(a.name) : (a.power > b.power ? -1 : 1);
        }

        function sortBy(item){
            flag.value = !flag.value;
            focusName.value = item === 'Name' ? true : false;
            console.log(focusName.value);
        }

        return {
            flag,
            tempLists,
            computedLists,
            sortBy
        };
    }
};
</script>

<style scoped>
    th, td {
        border: 1px solid skyblue;
        padding: 6px;
        text-align: center;
    }

    table {
        border-collapse: collapse;
    }
</style>