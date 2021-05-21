<template>
    <v-card
        elevation="5"
        shaped
        class="mb-3"
    >
        <v-card-title>{{data.attributes.title}}</v-card-title>
        <v-card-subtitle class="justify-space-between">
            <v-span>{{data.attributes.created_at}} By {{ data.relationships.author.attributes.name }}</v-span>
            <v-span class="red--text darken-1">{{data.relationships.category.attributes.body}}</v-span>
        </v-card-subtitle>
        <v-card-text>{{data.attributes.body}}
        </v-card-text>
        <v-card-actions>

            <v-btn text color="deep-red darken">{{data.counts.replies_count}} Replies</v-btn>
            <v-spacer></v-spacer>
            <v-btn text color="deep-orange">See Details</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props:['data'],
}
</script>

<style scoped>

</style>
