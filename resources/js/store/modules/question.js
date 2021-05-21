import axios from "axios";

export const question = {
    state: {
        questions:[]
    },
    mutations: {
        setAllQuestions(state,data){
            state.questions=data
        }
    },
    actions: {

        getAllQuestions({commit}){
            axios.get('/api/questions')
                .then(res=>{
                    commit('setAllQuestions',res.data.data)
                })
        }
    },
    getters: {
        questions(state){
            return state.questions
        }
    }
}

export default question;

