<template>
    <v-row>
        <v-col>
<!--            <v-md-editor v-model="text" height="300px"></v-md-editor>-->
<!--            <v-md-preview-html :html="text" preview-class="vuepress-markdown-body"></v-md-preview-html>-->
            <ckeditor :editor="editor" v-model="text" :config="editorConfig" style="height: 400px"></ckeditor>
            <v-col class="text-right">
                <v-btn flat color="pink" class="mt-2 white--text" @click="sendReply">Send Reply!</v-btn>
            </v-col>
        </v-col>
    </v-row>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
    data(){
        return{
            editor: ClassicEditor,
            text: '<p>Type your reply.</p>',
            editorConfig: {
                // The configuration of the editor.
            },
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
