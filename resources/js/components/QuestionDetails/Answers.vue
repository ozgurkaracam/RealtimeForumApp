<template>
    <v-row>
        <v-col md="12">
            <h1>{{replies.length}} Answers</h1>
            <Answer v-for="reply,index in replies" :key="index" :data="reply" />
        </v-col>
    </v-row>
</template>

<script>
import {mapGetters} from "vuex";
import Answer from "./Answer";

export default {
    components: {Answer},
    computed:{
        ...mapGetters(['replies'])
    }
}
</script>

<style scoped>

</style>
