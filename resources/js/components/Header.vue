<template>
    <div>
        <v-toolbar class="blue-grey lighten-5">
            <v-toolbar-title>Realtime Forum App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <router-link to="/forum" tag="v-btn" class="blue-grey lighten-5">
                    Forum
                </router-link>
                <v-btn  class="blue-grey lighten-5">Ask Question</v-btn>
                <v-btn  class="blue-grey lighten-5">Category</v-btn>
                <router-link to="/login" tag="v-btn" class="blue-grey lighten-5">
                    Login
                </router-link>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
