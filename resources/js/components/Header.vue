<template>
    <div>
        <v-toolbar class="blue-grey lighten-5">
            <router-link tag="v-toolbar-title" to="/">Realtime Forum App</router-link>
            <v-spacer></v-spacer>
            <Notifications />
            <v-toolbar-items class="hidden-sm-and-down">
                <router-link v-for="link in links" :key="link.title" :to="link.to" tag="v-btn" v-if="link.show" class="blue-grey lighten-5">
                    {{ link.title }}
                </router-link>
                <v-btn v-if="loggedIn" @click="logout">
                    Logout
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Notifications from "./Header/Notifications";

export default {
    components: {Notifications},
    computed: {
        ...mapGetters(['user','loggedIn']),
        links(){
            return [
                {'title':'Forum','to':'/forum','show':true},
                {'title':'Ask Question','to':'/askquestion','show':this.loggedIn},
                {'title':'Category','to':'/category','show':this.loggedIn},
                {'title':'Login','to':'/login','show':!this.loggedIn},
            ]
        }
    },
    methods:{
        logout(){
            this.$store.dispatch('logout')
        }
    },
    data(){
        return{

        }
    }

}
</script>

<style scoped>
    .v-toolbar__title{
        cursor:pointer;
    }
</style>
