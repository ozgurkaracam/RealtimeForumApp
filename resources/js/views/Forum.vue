<template>
    <v-main>
        <v-container fill-height align-start>
            <v-row>
                <v-col md="9">
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
      ...mapGetters(['questions'])
    },
    mounted() {
        this.$store.dispatch('getAllQuestions')
    }
}
</script>

<style scoped>

</style>
