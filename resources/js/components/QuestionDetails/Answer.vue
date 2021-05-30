<template>
    <v-card
        elevation="5"
        shaped
        class="mb-3 background--red"
    >
        <v-card-title>
            <span>By {{ data.relationships.author.attributes.name }}</span>
            <v-spacer></v-spacer>
            <v-btn color="blue" class="white--text mr-2" @click="editMode=true" v-if="user.id === data.relationships.author.id && !editMode">Edit</v-btn>
            <v-btn color="gray" class="mr-2" @click="saveAnswer(data)" v-if="user.id === data.relationships.author.id && editMode">Save</v-btn>
            <v-btn color="orange" class="white--text mr-2" @click="editMode=false" v-if="user.id === data.relationships.author.id && editMode">Cancel</v-btn>
            <v-btn color="red" class="white--text" @click="deleteAnswer(data)" v-if="user.id === data.relationships.author.id && editMode==false">Delete</v-btn>

        </v-card-title>
        <v-card-subtitle class="justify-space-between">
            <span>{{data.attributes.created_at}}</span>
        </v-card-subtitle>
        <v-card-text v-html="data.attributes.body" v-if="!editMode">
        </v-card-text>
        <v-card-text v-if="editMode">
            <ckeditor :editor="editor" v-model="data.attributes.body" :config="editorConfig" style="height: 400px"></ckeditor>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="pink">
                <v-icon @click="toggleLike(data)">
                    mdi-heart{{ !data.relationships.islike ? '-outline' : ''}}
                </v-icon>
            </v-btn>
            <v-btn text color="pink">{{data.counts.likedusers_count}} Like</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script>
import {mapGetters} from "vuex";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
    props:['data'],
    methods:{
        toggleLike(d) {
            this.$store.dispatch('toggleReplyLike',d.id).then(res=>{
                console.log(res)
                this.data=res
            })
        },
        saveAnswer(data){
            this.$store.dispatch('saveAnswer',{
                body:data.attributes.body,
                id:data.id
            }).then(res=>{
                if(res=='success'){
                    this.$swal('success','Successfuly!','success')
                    this.editMode=false
                }
            }).catch(res=>
                this.$swal('error','some problems','error'))
        },
        deleteAnswer(data){
            this.$swal.fire({
                title:'Are you sure?',
                text:'Are you sure to delete?',
                icon:'warning',
                showCancelButton:true,
                confirmButtonText:'Yes!',

            }).then(res=>{
                if(res.isConfirmed)
                    this.$store.dispatch('deleteAnswer',data)
            })
        },

    },
    data(){
        return{
            editMode:false,
            editor: ClassicEditor,
            editorConfig: {
                // The configuration of the editor.
            },
        }
    },
    computed:{
        ...mapGetters(['user'])
    },
    mounted() {
        console.log('mounted '+this.data.id)
        Pusher.subscribe('reply-channel-like-'+this.data.id).bind('reply-like-event-'+this.data.id,(e)=>{
            console.log(e)
            this.data.counts.likedusers_count=e.like.counts.likedusers_count
        })
    }
}
</script>

<style scoped>

</style>
