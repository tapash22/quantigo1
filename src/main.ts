import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'vue-video-annotation/dist/style.css'

createApp(App).use(store).mount('#app')
