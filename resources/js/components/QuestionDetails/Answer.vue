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
            <v-btn text color="pink">Like</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props:['data']
}
</script>

<style scoped>

</style>
