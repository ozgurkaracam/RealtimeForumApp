import axios from "axios";

export const question = {
    state: {
        questions:[],
        question:{},
        replies:[]
    },
    mutations: {
        setAllQuestions(state,data){
            state.questions=data
        },
        setQuestion(state,data){
            state.question=data
        },
        setReplies(state,data){
            state.replies=data
        }
    },
    actions: {
        getCategoryQuestions({commit},data){
            axios.get('/api/categories/'+data)
                .then(res=>{
                    commit('setAllQuestions',res.data.data.relationships.questions.data)
                })
        },
        getAllQuestions({commit}){
            axios.get('/api/questions/')
                .then(res=>{
                    commit('setAllQuestions',res.data.data)
                })
        },
        getQuestion({commit},data){
            axios.get('/api/questions/'+data)
                .then(res=>{
                    commit('setQuestion',res.data.data)
                    commit('setReplies',res.data.data.relationships.replies.data)
                })
        }
    },
    getters: {
        questions(state){
            return state.questions
        },
        question(state){
            return state.question
        },
        replies(state){
            return state.replies
        }
    }
}

export default question;

