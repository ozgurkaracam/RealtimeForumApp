import axios from "axios";

export const user = {
    state: {
        user:{},
        status:''
    },
    mutations: {
        setUser(state,data){
            state.user=data.data
        },
        setToken(state,data){
            localStorage.setItem('token','Bearer '+data.access_token)

            axios.defaults.headers.common['Authorization']=localStorage.getItem('token')
        },
        logout(state){
            state.user={}
            localStorage.removeItem('token')
        },
        setStatus(state,data){
            state.status=data
        }
    },
    actions: {
        login({commit}, data) {

            axios.post('/api/authenticate', {
                'email': data.email,
                'password': data.password
            })
                .then(res => {
                    commit('setUser',res.data)
                    commit('setToken',res.data)
                    commit('setStatus','success')
                    console.log(res)
                }).catch(err=>{
                    commit('setStatus','error')
            })

        },
        logout({commit}){
            axios.post('/api/logout')
                .then(res=>{
                    commit('logout')
                })
        },
        getUser({commit}){
            axios.get('/api/user')
                .then(res=>commit('setUser',res.data))
                .catch(err=> {
                    commit('setUser',{})
                    localStorage.removeItem('token')
                })
        }
    },
    getters: {
        user(state){
            return state.user
        },
        status(state){
            return state.status
        }
    }
}

export default user;
