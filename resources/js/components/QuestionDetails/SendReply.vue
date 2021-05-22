<template>
    <v-row>
        <v-col>
            <v-md-editor v-model="text" height="300px"></v-md-editor>
<!--            <v-md-preview-html :html="text" preview-class="vuepress-markdown-body"></v-md-preview-html>-->
            <v-col class="text-right">
                <v-btn flat color="pink" class="mt-2 white--text" @click="sendReply">Send Reply!</v-btn>
            </v-col>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data(){
        return{
            body:''
        }
    },
    methods:{
        sendReply(){
            this.$store.dispatch('sendReply',this.text)
            this.body=''
        }
    }
}
</script>

<style scoped>

</style>
