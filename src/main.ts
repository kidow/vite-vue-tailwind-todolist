import { createApp } from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification'
import './index.css'

createApp(App).use(VueToast).mount('#app')
