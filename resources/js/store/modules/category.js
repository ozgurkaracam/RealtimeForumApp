import axios from "axios";
import Vue from 'vue';
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
        },
        addCategory(state,data){
            state.categories.unshift(data)
        }
    },
    actions:{
        getAllCategories({commit}){
            axios.get('/api/categories')
                .then(res=>{
                    commit('setAllCategories',res.data.data)
                })
        },
        addCategory({commit},data){
            axios.post('/api/categories',{name:data})
                .then(res=>{
                    console.log(res)
                    commit('addCategory',res.data.data)
                    Vue.swal('Success','Category Added!','success')
                    // commit('addCategory',res.data)
                })
                .catch(err=>{
                    Vue.swal('Error','Category Not Added! ','error')
                    console.log(err.response)
                })
        },
        deleteCategory({commit,dispatch},id){
            axios.delete('/api/categories/'+id)
                .then(res=>{
                    commit('deleteCategory',id)
                    dispatch('getAllCategories')
                    Vue.swal('Success!','Category Deleted','success')
                })
                .catch(err=>{
                    Vue.swal('Error','ERROR!!!!','error')
                })
        },
        saveCategory({dispatch},data){
            console.log(data.name)
            axios.put('/api/categories/'+data.category_id,{
                'name':data.name
            }).then(res=>{
                // console.log(res)
                Vue.swal('Successful','Category Updated!','success')
                dispatch('getAllCategories')
            }).catch(err=>{
                Vue.swal('error','Category Can Not Updated!','error')
            })
        }
    }
}

export default category;
