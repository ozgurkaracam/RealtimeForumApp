import Vue from 'vue'
import VueRouter from 'vue-router'
import Forum from "../views/Forum";
import Askquestion from "../views/Askquestion";
import Login from "../views/Login";
import Signup from "../views/Signup";
import store from "../store/store";
import QuestionDetails from "../views/QuestionDetails";

Vue.use(VueRouter)

const islogin= (to,from,next)=>{
    console.log(store.getters.loggedIn)
    if(store.getters.loggedIn)
        next('/')
    next()
}

const routes=[
    {path:'/', component: Forum, 'name':'home'},
    {path:'/forum',component:Forum , name:'forum'},
    {path:'/askquestion', component: Askquestion},
    {path:'/login',component: Login, beforeEnter:islogin},
    {path:'/signup',component: Signup, beforeEnter:islogin},
    {path:'/questions/:slug',component: QuestionDetails,name:'questiondetails'},
    {path:'/forum/:slug',component: Forum,name:'categoryquestions'},
    {path:'/:i', component: Forum}
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router;
