<template>
    <v-content fill-height class="mt-3">
        <v-container
            >
            <v-row>

                <v-col>
                    <v-select
                        :items="cats"
                        :item-text="text"
                        :item-value="value"
                        v-model="category"
                        label="Select Category"
                        dense
                        class="mb-3"
                        required
                    ></v-select>
                    <v-text-field
                        v-model="title"
                        :rules="titleRules"
                        label="Title"
                        required
                        class="mb-3"
                    ></v-text-field>
                    <ckeditor :editor="editor" v-model="body" :config="editorConfig" style="height: 400px"></ckeditor>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-right">
                    <v-btn color="red" class="white--text">Ask Question</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {mapGetters} from "vuex";
export default {
    data() {
        return {
            editor: ClassicEditor,
            body: '<p>Type your question.</p>',
            editorConfig: {
                // The configuration of the editor.
            },
            titleRules:[
                v => !!v || 'Title is required',
                v => (v && v.length >= 10 ) || 'Title must be less than 10 characters',
            ]
        }
    },
    methods:{
        sendQuestion(){

        }
    },
    computed:{
        ...mapGetters(['categories']),
        cats(){
            var arr=[];
            this.categories.forEach(x=>{
                arr.push({
                    text: x.attributes.body,
                    value:x.id
                })
            })
            return arr
        },
        category(){
            return this.cats[0]
        }
    },
    mounted() {
        this.$store.dispatch('getAllCategories')
    }
}
</script>

<style scoped>

</style>
