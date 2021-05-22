<template>
    <v-card>
        <v-card-title>Categories</v-card-title>
        <v-list flat>
            <v-list-item-group>
                <v-list-item v-for="category,index in categories" :key="index" :to="{name:'categoryquestions',params:{'slug':category.attributes.slug}}">
                    <v-list-item-content>
                        {{ category.attributes.body }}
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    computed:{
      ...mapGetters(['categories'])
    },
    mounted() {
        this.$store.dispatch('getAllCategories')
        // console.log(this.categories)
    }
}
</script>

<style scoped>

</style>
