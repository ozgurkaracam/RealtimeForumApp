import App from "./components/App";
require('./bootstrap');
import Vue from 'vue'
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
import store from "./store/store";
import axios from "axios";
const app = new Vue({
    el: '#app',
    render: h => h(App),
    vuetify: vuetify,
    router,
    store
});

if(localStorage.getItem('token')){
    axios.defaults.headers.common['Authorization']=localStorage.getItem('token')
    store.dispatch('getUser')
}
