require('./bootstrap');

// TODO: check usage of alpine
// import Alpine from 'alpinejs';
//
// window.Alpine = Alpine;
//
// Alpine.start();

// Imports
import {createApp} from "vue";
import App from "./App";
import router from "./router";
import flowbite from "flowbite/dist/flowbite";

const app = createApp(App);
app.use(router);
app.mount('#app');
