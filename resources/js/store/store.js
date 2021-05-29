import Vuex from 'vuex';
import Vue from 'vue';
import user from "./modules/user";
import question from "./modules/question";
import category from "./modules/category";
import notifications from "./modules/notifications";
Vue.use(Vuex)

const store=new Vuex.Store({
    modules:{
        user,
        question,
        category,
        notifications
    }
})

export default store;
