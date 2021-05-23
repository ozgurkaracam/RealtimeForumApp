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
        },
        setReplies(state, data) {
            state.replies = data
        },
        pushReply(state,data){
            state.replies.unshift(data)
        },
        foo(){
            alert('question')
        },
        pushQuestion(state,data){
            state.questions.unsift(data)
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
        getQuestion({commit}, data) {
            axios.get('/api/questions/' + data)
                .then(res => {
                    commit('setQuestion', res.data.data)
                    commit('setReplies', res.data.data.relationships.replies.data)
                })
        },
        sendReply({commit,state},data){
            axios.post('/api/replies',{
                question_id:state.question.id,
                body:data
            })
                .then(res=>{
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
                    console.log(res.data)
                    router.push({'name':'home'})
                })
                .catch(err=>{
                    Vue.swal('Error!','Some Problems!','error')
                })
        },
        toggleLike({commit},id){
            return new Promise((resolve,reject)=>{
                axios.post('/api/questions/'+id+'/like')
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
            return new Promise((resolve,reject)=>{
                axios.post('/api/replies/'+id+'/like')
                    .then(res=>{
                        resolve(res.data.data)
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

