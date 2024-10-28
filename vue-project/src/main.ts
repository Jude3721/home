import './assets/main.css'
import './assets/scss/scss/import.scss'

import { createApp } from 'vue'
import App from './App.vue'
import VueFullPage from "vue-fullpage.js"


createApp(App).mount('#app')
createApp(App).use(VueFullPage);
