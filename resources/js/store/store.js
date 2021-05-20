import Vuex from 'vuex';
import Vue from 'vue';
import user from "./modules/user";
import question from "./modules/question";
Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        user,
        question
    }
})

export default store;
