import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { authStore } from './store/authStore.js';
import { favoritesStore } from './store/favoritesStore.js';
import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(authStore);
app.use(favoritesStore);

app.mount('#app');
