import axios from "axios";

const category={
    state:{
        categories:[]
    },
    getters:{
        categories(state){
            return state.categories
        }
    },
    mutations:{
        setAllCategories(state,data){
            state.categories=data
        }
    },
    actions:{
        getAllCategories({commit}){
            axios.get('/api/categories')
                .then(res=>{
                    commit('setAllCategories',res.data.data)
                })
        }
    }
}

export default category;
