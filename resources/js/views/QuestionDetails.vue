<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col md="12" class="mx-auto" sm="12">
                    <Question :data="question"></Question>
                </v-col>
            </v-row>
            <v-divider class="mb-10"></v-divider>

            <Answers />
        </v-container>
    </v-main>
</template>

<script>
import {mapGetters} from "vuex";
import Question from "../components/forum/Question";
import Answers from "../components/QuestionDetails/Answers";

export default {
    components: {Answers, Question},
    computed: {
        ...mapGetters(['question'])
    },
    mounted() {
        this.$store.dispatch('getQuestion', this.$route.params.slug)
    }
}
</script>

<style scoped>

</style>
