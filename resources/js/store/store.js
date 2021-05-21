import Vuex from 'vuex';
import Vue from 'vue';
import user from "./modules/user";
import question from "./modules/question";
import category from "./modules/category";
Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        user,
        question,
        category
    }
})

export default store;
