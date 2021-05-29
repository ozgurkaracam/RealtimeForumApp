import axios from "axios";

export default {
    state:{
        notifications:[],
        unreadnotifications:[]
    },
    getters:{
        notifications(state){
            return state.notifications
        },
        unreadnotifications(state){
            return state.unreadnotifications
        }
    },
    mutations:{
        setNotifications(state,data){
            state.notifications=data
            state.unreadnotifications=state.notifications.filter((val)=>{
                return val.read_at===null
            })
        }
    },
    actions:{
        getAllNotifications({commit}){
            axios.get('/api/notifications').then(res=>{
                commit('setNotifications',res.data)
            })
        },
        markRead({dispatch},data){
            axios.post('/api/notifications',{id:data})
                .then(res=>{
                    console.log(res.data)
                    dispatch('getAllNotifications')
                })
        }
    }
}
