import App from "./components/App";
require('./bootstrap');
import Vue from 'vue'
import vuetify from "./plugins/vuetify";
import store from "./store/store";
import router from "./plugins/router";
import axios from "axios";
const app = new Vue({
    el: '#app',
    render: h => h(App),
    vuetify: vuetify,
    store,
    router,
});
