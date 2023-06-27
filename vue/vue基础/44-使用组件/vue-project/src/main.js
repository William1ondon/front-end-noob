// import './assets/main.css'


import { createApp } from 'vue'
// import App from './App.vue'
import Son from './components/Son.vue'
import Father from './components/Father.vue'
import App from './App.vue'

//createApp(Son).mount('#app1')// 直接用
//createApp(Father).mount('#app');// 间接用
createApp(App).mount('#app2');// 间接用
