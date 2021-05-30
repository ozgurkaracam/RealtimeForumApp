<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col md="12" class="mx-auto" sm="12">
                    <Question :data="question"></Question>
                </v-col>
            </v-row>
            <v-divider class="mb-10"></v-divider>
            <SendReply />
            <Answers :replies="question.relationships.replies.data" />
        </v-container>
    </v-main>
</template>

<script>
import {mapGetters} from "vuex";
import Question from "../components/forum/Question";
import Answers from "../components/QuestionDetails/Answers";
import SendReply from "../components/QuestionDetails/SendReply";

export default {
    components: {SendReply, Answers, Question},
    computed: {
        ...mapGetters(['question'])
    },
    mounted() {
        this.$store.dispatch('getQuestion', this.$route.params.slug)

    },
    async created() {
        await this.$store.dispatch('getQuestion', this.$route.params.slug)
        window.Pusher.subscribe('delete-reply-channel-'+this.question.id).bind('delete-reply-event-'+this.question.id,(e)=>{
            this.$store.commit('deleteReply',e.reply)
        })
    }
}
</script>

<style scoped>

</style>
