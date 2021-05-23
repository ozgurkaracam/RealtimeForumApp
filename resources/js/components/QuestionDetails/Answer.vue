<template>
    <v-card
        elevation="5"
        shaped
        class="mb-3 background--red"
    >
        <v-card-title>By {{ data.relationships.author.attributes.name }}</v-card-title>
        <v-card-subtitle class="justify-space-between">
            <v-span>{{data.attributes.created_at}}</v-span>
        </v-card-subtitle>
        <v-card-text v-html="data.attributes.body">
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
export default {
    props:['data'],
    methods:{
        toggleLike(d) {
            this.$store.dispatch('toggleReplyLike',d.id).then(res=>{
                console.log(res)
                this.data=res
            })
        }
    }
}
</script>

<style scoped>

</style>
