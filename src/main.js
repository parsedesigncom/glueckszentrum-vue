import { createApp } from 'vue'
import { createPinia } from 'pinia';
import router from './router';
import './assets/styles/reset.scss'
import './assets/styles/grid.scss'
import './style.scss'
import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');
