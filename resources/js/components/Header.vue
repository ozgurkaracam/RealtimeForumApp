<template>
    <div>
        <v-toolbar class="blue-grey lighten-5">
            <v-toolbar-title>Realtime Forum App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <router-link to="/forum" tag="v-btn" class="blue-grey lighten-5">
                    Forum
                </router-link>
                <v-btn class="blue-grey lighten-5">Ask Question</v-btn>
                <v-btn class="blue-grey lighten-5">Category</v-btn>
                <router-link to="/login" tag="v-btn" v-if="user.attributes" class="blue-grey lighten-5">
                    {{ user.attributes.name }}
                </router-link>
                <v-btn v-if="user.attributes" @click="logout">
                    Logout
                </v-btn>
                <router-link to="/login" tag="v-btn" v-else class="blue-grey lighten-5">
                    Login
                </router-link>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters(['user'])
    },
    methods:{
        logout(){
            this.$store.dispatch('logout')
        }
    }
}
</script>

<style scoped>

</style>
