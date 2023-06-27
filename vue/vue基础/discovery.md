## v-for 

#### 对象中可以直接写对象，而无需key

```javascript
  <ul id="app">
      <li v-for="(value, item) in list">{{value + ' ' +  item}}</li>
  </ul>
  <script type="module">
      import { createApp, ref, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

      createApp({
          setup(){
              const student0 = {'name' : 'Tony'};
              const student1 = {'name' : 'Jenny'};
              const student2 = {'name' : 'Mary'};

              const list = {
                  'studentTony':student0,
                  student1,
                  student2
              };

              return {
                  list,
              }
          }
      }).mount('#app');
  </script>
```

打印为：

```html
[object Object] studentTony
[object Object] student1
[object Object] student2
```

#### v-for 循环的key和value是永远保留在标签中的

```javascript
<button
     v-for="(value, tab) in tabs"
     @click="console.log(tab,value)"
 ></button>
```

