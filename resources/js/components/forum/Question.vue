<template>
    <v-card
        elevation="5"
        shaped
        class="mb-3"
        v-if="data"
    >
        <v-card-title>
            <span v-if="!editMode">{{data.attributes.title}}</span>
            <v-text-field v-else v-model="data.attributes.title"></v-text-field>
            <v-spacer></v-spacer>
            <v-btn color="blue" class="white--text mr-2" @click="editMode=true" v-if="user.id === data.relationships.author.id && !editMode">Edit</v-btn>
            <v-btn color="gray" class="mr-2" @click="saveQuestion(data)" v-if="user.id === data.relationships.author.id && editMode">Save</v-btn>
            <v-btn color="orange" class="white--text mr-2" @click="editMode=false" v-if="user.id === data.relationships.author.id && editMode">Cancel</v-btn>
            <v-btn color="red" class="white--text" @click="deleteQuestion(data.id)" v-if="user.id === data.relationships.author.id && editMode==false">Delete</v-btn>
        </v-card-title>
        <v-card-subtitle class="justify-space-between">
            <span>{{data.attributes.created_at}} By {{ data.relationships.author.attributes.name }}</span>
            <span class="red--text darken-1">{{data.relationships.category.attributes.body}}</span>
        </v-card-subtitle>
        <v-card-text v-html="data.attributes.body" v-if="!editMode">
        </v-card-text>
        <v-card-text v-if="editMode">
            <ckeditor :editor="editor" v-model="data.attributes.body" :config="editorConfig" style="height: 400px"></ckeditor>
        </v-card-text>
        <v-card-actions>
            <v-btn text color="deep-red darken" v-if="$route.name!='questiondetails'"
                   :to="{name:'questiondetails',params:{'slug':data.attributes.slug}}">{{data.counts.replies_count}}
                Replies
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="pink">
                <v-icon @click="toggleLike(data)">
                    mdi-heart{{ !data.relationships.islike ? '-outline' : ''}}
                </v-icon>
            </v-btn>
            <v-btn color="pink" text :to="{name:'questiondetails',params:{'slug':data.attributes.slug}}">

                {{data.counts.likedusers_count}} LIKES
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {mapGetters} from 'vuex'
export default {
    props: ['data'],
    computed:{
      ...mapGetters(['user','questions'])
    },
    created(){

    },
    mounted(){
      console.log(this.data.id)
        Pusher.subscribe('question-channel-like-'+this.data.id).bind('question-like-event-'+this.data.id,(e)=>{
            console.log(e)
            this.data.counts.likedusers_count=e.like.counts.likedusers_count

        })
    },
    data(){
        return{
            editor:ClassicEditor,
            editorConfig: {

            },
            editMode:false
        }
    },
    methods: {
        toggleLike(d) {
            this.$store.dispatch('toggleLike',d.id).then(res=>{
                this.data=res
                // data.relationships.islike=!data.relationships.islike
                // if(data.relationships.islike)
                //     data.counts.likedusers_count=data.counts.likedusers_count+1
                // else
                //     data.counts.likedusers_count=data.counts.likedusers_count-1
            })

        },
        deleteQuestion(id){
            this.$swal.fire({
                title:'Are you sure?',
                text:'Are you sure to delete?',
                icon:'warning',
                showCancelButton:true,
                confirmButtonText:'Yes!',

            }).then(res=>{
                if(res.isConfirmed)
                    this.$store.dispatch('deleteQuestion',id)
            })
        },
        saveQuestion(data){
            this.$store.dispatch('saveQuestion',{
                title:data.attributes.title,
                body:data.attributes.body,
                id:data.id
            }).then(res=>{
                if(res=='success'){
                    this.$swal('success','Successfuly!','success')
                    this.editMode=false
                }
            }).catch(res=>
                this.$swal('error','some problems','error'))
        }
    }
}
</script>

<style scoped>

</style>
