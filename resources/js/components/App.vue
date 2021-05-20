<template>
    <v-app>
        <Header />
        <router-view></router-view>
        <Footer />
    </v-app>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
    components: {Footer, Header}
}
</script>

<style scoped>

</style>
