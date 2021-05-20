import App from "./components/App";
require('./bootstrap');
import Vue from 'vue'
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
import store from "./store/store";
const app = new Vue({
    el: '#app',
    render: h => h(App),
    vuetify: vuetify,
    router,
    store
});
