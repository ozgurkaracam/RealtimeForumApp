<template>
    <v-list-item-title @click="markRead(data)">
        <router-link color="secondary" :to="{name:'questiondetails', params:{ slug: data.data.question_slug}}">
            <span :class="{'font-weight-bold' : data.read_at == null}">{{data.data.user}} replied your {{data.data.question}}, <span color="green">{{data.data.created_at}}</span></span>
        </router-link>
    </v-list-item-title>
</template>

<script>
export default {
    props:['data'],
    methods:{
        markRead(data){
            this.$store.dispatch('markRead',data.id);
        }
    }
}
</script>

<style scoped>

</style>
