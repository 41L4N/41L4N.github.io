import './assets/styles/app.css';

import { createApp } from 'vue';
import App from './App.vue';
import pinia from './plugins/pinia';
import i18n from './plugins/vue-i18n';

const app = createApp(App);

app.use(pinia);
app.use(i18n);

app.mount('#app');
