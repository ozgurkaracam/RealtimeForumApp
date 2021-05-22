<template>
    <v-main>
        <v-container fill-height align-start>
            <v-row>
                <v-col md="9">
                    <div>
                        <h1>{{ $route.params.slug ? questions[0].relationships.category.attributes.body+' ' : '' }}Questions</h1>
                    </div>
                    <Question v-for="question,index in questions" :key="index" :data="question" />
                </v-col>
                <v-col md="3">
                    <Categories />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import Question from "../components/forum/Question";
import Categories from "../components/forum/Categories";
import {mapGetters} from "vuex";
export default {
    components: {Categories, Question},
    computed:{
      ...mapGetters(['questions']),
    },
    mounted() {
        if(this.$route.name==='categoryquestions'){
            console.log(this.$route.params.slug)
            this.$store.dispatch('getCategoryQuestions',this.$route.params.slug)
        }
        else{
            this.$store.dispatch('getAllQuestions')
        }
        console.log(this.$route.name)
    }
}
</script>

<style scoped>

</style>
