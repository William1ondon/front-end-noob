import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import ComponentC from './ComponentC.vue';

const app = createApp(App);
// 全局注册的组件可以在此应用的任意组件模板中使用，所有的子组件也可以使用全局注册的组件。下面为链式调用方法
app
    .component('ComponentA', ComponentA)
    .component('ComponentB', ComponentB)
    .component('ComponentC', ComponentC);
app.mount('#app');

