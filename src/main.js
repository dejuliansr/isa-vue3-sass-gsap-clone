import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/styles/main.scss'

createApp(App).use(router).mount('#app')
