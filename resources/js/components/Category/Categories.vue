<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        Categories
                    </v-card-title>
                    <v-list-item v-for="category,key in categories" :key="key">
                        <v-list-item-content class="d-flex justify-space-between">
                            <div class="flex">
                                <div class="flex" v-if="updateMode">
                                    <v-form @submit.prevent="saveCategory(category.attributes.body,category.id)">
                                        <v-text-field class="flex" v-model="category.attributes.body" required type="text" :value="category.attributes.body"></v-text-field>
                                        <v-btn class="flex" type="submit" text v-if="updateMode">
                                            <v-icon color="green">
                                                mdi-checkbox-marked-circle
                                            </v-icon>
                                        </v-btn>
                                        <v-btn class="flex" text v-if="updateMode" @click="updateMode=!updateMode">
                                            <v-icon text color="blue">
                                                mdi-cancel
                                            </v-icon>
                                        </v-btn>
                                    </v-form>
                                </div>
                                <div class="flex" v-else>{{ category.attributes.body }}</div>
                            </div>
                            <div class="flex text-right">

                                <v-btn text v-if="!updateMode" @click="updateMode=!updateMode">
                                    <v-icon dark>
                                        mdi-wrench
                                    </v-icon>
                                </v-btn>
                                <v-btn text @click="deleteCategory(category.id)">
                                    <v-icon large color="red">
                                        mdi-delete
                                    </v-icon>
                                </v-btn>
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed: {
        ...mapGetters(['categories'])
    },
    mounted() {
        this.$store.dispatch('getAllCategories')
    },
    methods:{
        deleteCategory(i){
            this.$swal.fire({
                'title': 'Are you sure?',
                'text':' Are you sure for delete this category?',
                'showCancelButton':true,
                'showCloseButton':true,
                'confirmButtonText':'YES!'
            }).then(
                d=>{
                    this.$store.dispatch('deleteCategory',i)
                }
            )
        },
        saveCategory(e,id){
            this.$store.dispatch('saveCategory',{
                category_id:id,
                name:e
            }).then(d=>this.updateMode=false)
        }
    },
    data(){
        return{
            updateMode:false
        }
    }
}
</script>

<style scoped>

</style>
