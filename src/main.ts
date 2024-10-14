import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "vue3-openlayers/styles.css";
import OpenLayersMap from "vue3-openlayers";

import PrimeVue from "primevue/config";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(PrimeVue, {
    unstyled: true
});
app.use(OpenLayersMap);
app.use(router);
app.use(Toast);

app.mount('#app');
