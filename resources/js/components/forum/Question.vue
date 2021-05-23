<template>
    <v-card
        elevation="5"
        shaped
        class="mb-3"
    >
        <v-card-title>{{data.attributes.title}}</v-card-title>
        <v-card-subtitle class="justify-space-between">
            <span>{{data.attributes.created_at}} By {{ data.relationships.author.attributes.name }}</span>
            <span class="red--text darken-1">{{data.relationships.category.attributes.body}}</span>
        </v-card-subtitle>
        <v-card-text v-html="data.attributes.body">
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
export default {
    props: ['data'],
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

        }
    }
}
</script>

<style scoped>

</style>
