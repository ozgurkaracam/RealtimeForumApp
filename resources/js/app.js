
import App from "./components/App";
require('./bootstrap');
import Vue from 'vue'
//
// window.Vue = require('vue').default;
//
//
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    render: h => h(App),
});
