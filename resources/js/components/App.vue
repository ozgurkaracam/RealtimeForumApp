<template>
    <v-app>
        <Header />
        <router-view :key="$route.path"></router-view>
        <Footer />
    </v-app>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import store from "../store/store";
export default {
    components: {Footer, Header},
    beforeCreate() {
        if(localStorage.getItem('token')){
            axios.defaults.headers.common['Authorization']=localStorage.getItem('token')
            this.$store.dispatch('getUser')
        }
    }
}
</script>

<style scoped>

</style>
