<template>
    <v-main>
        <v-row>
            <v-col>
                <h1> Add Category</h1>
                <v-form @submit.prevent="addCategory">
                    <v-text-field
                        v-model="name"
                        label="Category Name"
                        required
                    ></v-text-field>
                    <div class="text-right">
                        <v-btn type="submit" large dark> Add Category </v-btn>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
export default {
    data(){
        return{
            name:''
        }
    },
    methods:{
        addCategory(){
            this.$store.dispatch('addCategory',this.name)
            this.name=''
        }
    }
}
</script>

<style scoped>

</style>
