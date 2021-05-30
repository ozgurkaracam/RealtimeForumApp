<template>
    <v-row>
        <v-col md="12">
            <h1>{{replies.length}} Answers</h1>
            <Answer v-for="reply,index in replies" :key="index" :data="reply" />
        </v-col>
    </v-row>
</template>

<script>
import {mapGetters} from "vuex";
import Answer from "./Answer";

export default {
    components: {Answer},
    props:['replies'],
    async mounted() {
        await this.$store.dispatch('getQuestion',this.$route.params.slug)
        Pusher.subscribe('send-reply-channel-'+this.replies[0].relationships.question_id).bind('send-reply-event-'+this.replies[0].relationships.question_id,(e)=>{

            this.replies.push(e.reply)
        })
    }
}
</script>

<style scoped>

</style>
