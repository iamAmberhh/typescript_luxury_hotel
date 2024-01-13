import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "./router/index";

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// import '@andy922200/vue-tw-zip-code-selector/dist/vue-tw-zip-code-selector.css'
import VueTwZipCodeSelector from '@andy922200/vue-tw-zip-code-selector'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTwZipCodeSelector)

app.mount('#app')
