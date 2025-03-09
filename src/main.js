import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);

const primaryBgColor = localStorage.getItem('primaryBgColor') || '#00acd1';
const secondaryBgColor = localStorage.getItem('secondaryBgColor') || '#000000';
const primaryColor = localStorage.getItem('primaryColor') || '#ffffff';
const secondaryColor = localStorage.getItem('secondaryColor') || '#ffffff';
document.documentElement.style.setProperty('--primary-bg-color', primaryBgColor);
document.documentElement.style.setProperty('--secondary-bg-color', secondaryBgColor);
document.documentElement.style.setProperty('--primary-color', primaryColor);
document.documentElement.style.setProperty('--secondary-color', secondaryColor);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
