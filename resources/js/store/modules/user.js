import axios from "axios";
import router from "../../plugins/router";

export const user = {
    state: {
        user: {},
        status: '',
        loggedIn: null,
        errors: {}
    },
    mutations: {
        setUser(state, data) {
            if (data != {})
                state.loggedIn = true
            state.user = data.data
        },
        setToken(state, data) {
            localStorage.setItem('token', 'Bearer ' + data.access_token)

            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
        },
        logout(state) {
            state.user = {}
            localStorage.removeItem('token')
            state.loggedIn = false
            router.push('/forum')
        },
        setStatus(state, data) {
            state.status = data
            setTimeout(function () {
                state.status = ''
            }, 2000);
        },
        setErrors(state,data){
            state.errors=data
        }
    },
    actions: {
        login({commit}, data) {

            axios.post('/api/authenticate', {
                'email': data.email,
                'password': data.password
            })
                .then(res => {
                    commit('setUser', res.data)
                    commit('setToken', res.data)
                    commit('setStatus', 'success')
                    setTimeout(() => {

                        router.push('/forum')
                    }, 2000)
                }).catch(err => {
                commit('setStatus', 'error')
            })

        },
        logout({commit}) {
            axios.post('/api/logout')
                .then(res => {
                    commit('logout')
                })
        },
        getUser({commit}) {
            axios.get('/api/user')
                .then(res => commit('setUser', res.data))
                .catch(err => {
                    commit('setUser', {})
                    localStorage.removeItem('token')
                })
        },
        signUp({commit},data){
            axios.post('/api/register',data)
                .then(res=>{
                    commit('setUser', res.data)
                    commit('setToken', res.data)
                    commit('setStatus', 'success')
                    setTimeout(() => {

                        router.push('/forum')
                    }, 2000)
                })
                .catch(err=>{
                    // state.errors=err.response.data.errors
                    commit('setErrors',err.response.data.errors)
                })
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        status(state) {
            return state.status
        },
        loggedIn(state) {
            return state.loggedIn
        },
        errors(state){
            return state.errors
        }
    }
}

export default user;
