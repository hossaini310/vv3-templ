import { Icon } from '@iconify/vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/index.css';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('Icon', Icon);
app.mount('#app');
