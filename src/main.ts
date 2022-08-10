import { createApp } from 'vue';
import App from './App.vue';

import BootstrapVue3 from 'bootstrap-vue-3';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import InstantSearch from 'vue-instantsearch/vue3/es';

import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(BootstrapVue3);
app.use(InstantSearch);

app.mount('#app');
