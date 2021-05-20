import Vue from 'vue'
import VueRouter from 'vue-router'
import Forum from "../views/Forum";
import Askquestion from "../views/Askquestion";
import Login from "../views/Login";

Vue.use(VueRouter)

const routes=[
    {path:'/', component: Forum},
    {path:'/forum',component:Forum},
    {path:'/askquestion', component: Askquestion},
    {path:'/login',component: Login}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;
