import axios from "axios";
import router from "../../plugins/router";
import Vue from 'vue'

export const question = {
    state: {
        questions: [],
        question: {},
        replies: []
    },
    mutations: {
        setAllQuestions(state, data) {
            state.questions = data
        },
        setQuestion(state, data) {
            state.question = data
            state.replies=data.relationships.replies.data
        },
        setReplies(state, data) {
            state.replies = data
        },
        pushReply(state,data){
            state.replies.push(data)
        },
        pushQuestion(state,data){
            state.questions.unsift(data)
        },
        deleteReply(state,data){
            state.replies=state.replies.filter((val)=>{
                return val.id!==data
            })
        }
    },
    actions: {
        getCategoryQuestions({commit}, data) {
            axios.get('/api/categories/' + data)
                .then(res => {
                    if (res.status == 404)
                        router.back()
                    else
                        commit('setAllQuestions', res.data.data.relationships.questions.data)
                }).catch(err => {
                    router.push('/')
            })
        },
        getAllQuestions({commit}) {
            axios.get('/api/questions/')
                .then(res => {
                    commit('setAllQuestions', res.data.data)
                }).catch(err => console.log(err.response))
        },
        async getQuestion({commit}, data) {
            await axios.get('/api/questions/' + data)
                .then(res => {
                    commit('setQuestion', res.data.data)

                }).catch(err=>router.push({name:'home'}))
        },
        async sendReply({commit,state},data){
            await axios.post('/api/replies',{
                question_id:state.question.id,
                body:data
            })
                .then(res=>{
                    console.log(res.data.data)
                    commit('pushReply',res.data.data)

                    Vue.swal('Success!!',"Your Reply added",'success')
                }).catch(
                    err=>{
                        Vue.swal('Error!!',"Your Reply Can't added",'error')
                    }
            )

        },
        sendQuestion({commit},data){
            axios.post('/api/questions',data)
                .then(res=>{
                    Vue.swal('Success!','Your Question Sended','success')
                    router.push({'name':'home'})
                })
                .catch(err=>{
                    Vue.swal('Error!','Some Problems!','error')
                })
        },
        toggleLike({commit},id){
            return new Promise(async (resolve,reject)=>{
                await axios.post('/api/questions/'+id+'/like')
                    .then(res=>{
                        resolve(res.data.data)
                    })
            })
        },
        toggleReplyLike({commit},id){
            // axios.post('/api/replies/'+id+'/like')
            //     .then(res=>{
            //         resolve('sss')
            //     })
            return new Promise(async (resolve,reject)=>{
                await axios.post('/api/replies/'+id+'/like')
                    .then(res=>{
                        resolve(res.data.data)
                    })
            })
        },
        async deleteQuestion({commit},id){

            await axios.delete('/api/questions/'+id)
                .then(res=>{
                    commit('setAllQuestions',res.data.data)
                    Vue.swal('Success','Success for deleting!','success')
                    if(router.history.current.name=="questiondetails")
                        router.push({name:'home'})
                })
        },
        saveQuestion({},data){
            console.log(data)
            return new Promise((resolve,reject)=>{
                axios.put('/api/questions/'+data.id,{
                    title:data.title,
                    body:data.body
                }).then(res=>{
                    resolve('success')
                }).catch(err=>{
                    reject('error')
                })
            })
        },
        deleteAnswer({commit},data){
            console.log(data)
            axios.delete('/api/replies/'+data.id)
                .then(res=>{
                    // commit('setQuestion',res.data.data)
                    Vue.swal('Success','Success for deleting!','success')
                    commit('setQuestion',res.data.data)
                })
        },
        saveAnswer({},data){
            console.log(data)
            return new Promise((resolve,reject)=>{
                axios.put('/api/replies/'+data.id,{
                    title:data.title,
                    body:data.body
                }).then(res=>{
                    resolve('success')
                }).catch(err=>{
                    reject('error')
                })
            })
        }
    },
    getters: {
        questions(state) {
            return state.questions
        },
        question(state) {
            return state.question
        },
        replies(state) {
            return state.replies
        }
    }
}

export default question;

