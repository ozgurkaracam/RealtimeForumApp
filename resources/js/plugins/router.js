import Vue from 'vue'
import VueRouter from 'vue-router'
import Forum from "../views/Forum";
import Askquestion from "../views/Askquestion";
import Login from "../views/Login";
import Signup from "../views/Signup";

Vue.use(VueRouter)

const routes=[
    {path:'/', component: Forum},
    {path:'/forum',component:Forum},
    {path:'/askquestion', component: Askquestion},
    {path:'/login',component: Login},
    {path:'/signup',component: Signup}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;
