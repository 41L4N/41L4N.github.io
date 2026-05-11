import './assets/styles/app.css';

import { createApp } from 'vue';

import App from './App.vue';
import pinia, { hydrateUiStore } from '@/plugins/pinia';
import i18n from '@/plugins/vue-i18n';

const app = createApp(App);

app.use(pinia);
app.use(i18n);
hydrateUiStore();

app.mount('#app');
