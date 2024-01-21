import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from "./router/index";

import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import VueTwZipCodeSelector from '@andy922200/vue-tw-zip-code-selector'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTwZipCodeSelector)
app.use(VueSweetalert2);

app.mount('#app')
