import axios from "axios";

export const question = {
    state: {
    },
    mutations: {
        foo(){
            alert('bar')
        }
    },
    actions: {

        getQuestions(){
            axios.get('/api/questions')
                .then(res=>console.log(res))
        }
    },
    getters: {
    }
}

export default question;

