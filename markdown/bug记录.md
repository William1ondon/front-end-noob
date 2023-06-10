## 避免在模板中直接修改响应式数据，否则有可能出现无限递归

```javascript
...
<body>
    <div id="app">
        <p v-on:click="onClick">{{count++}}</p>
    </div>

    <script type="module">
        import {createApp, ref} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

        createApp({
            setup(){
                function onClick(){
                    //  count0.count++;
                     count1.count.value++;
                } 

                let count1 = {count: ref(0)};
                let {count} = count1;
                count.value++;

                return {
                    // count0,
                    count1,
                    count,
                    onClick,
                };
            }
        }).mount('#app');
    </script>
</body>
```

如代码所示，每次执行count的时候，count就自增，一自增就触发vue更新，一更新count又自增...循环往复。