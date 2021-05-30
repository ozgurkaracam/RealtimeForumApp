import App from "./components/App";
require('./bootstrap');
import Vue from 'vue'
import vuetify from "./plugins/vuetify";
import store from "./store/store";
import router from "./plugins/router";
import './plugins/markdown'
import './plugins/sweetalert'
import './plugins/ckeditor'
import 'pusher-js'
import Echo from "laravel-echo";
import axios from "axios";

window.Pusher=new Pusher('753f53131fe08ddcafda', {
    cluster: 'eu'
});

// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: "753f53131fe08ddcafda",
//     cluster: 'eu',
//     forceTLS: true,
//     auth: {
//         headers: {
//             Authorization: 'Bearer 6|OMTCZD97LtK5JZFTem4iYCEWvhLfxYfi4KCxkoLB'
//         },
//     },
// });


const app = new Vue({
    el: '#app',
    render: h => h(App),
    vuetify: vuetify,
    store,
    router
});
