<template>
    <v-main>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login Form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-alert type="success" v-if="status=='success'">Login Successfuly!</v-alert>
                            <v-alert type="error" v-if="status=='error'">Your e-mail or password incorrect!</v-alert>
                            <v-form>
                                <v-text-field
                                    name="login"
                                    label="Email"
                                    type="email"
                                    v-model="email"
                                ></v-text-field>
                                <v-text-field
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    v-model="password"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <router-link to="/signup" tag="v-btn" color="secondary"> Signup</router-link>
                            <v-btn color="primary" @click="login">Login</v-btn>
<!--                            <v-btn color="secondary" @click="login">Signup</v-btn>-->
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-main>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    computed:{
        ...mapGetters(['status','loggedIn'])
    },
    methods:{
        login(){
            this.$store.dispatch('login',{
                'email':this.email,
                'password':this.password
            })
        }
    },
    // beforeMount() {
    //     console.log(this.loggedIn)
    //     if(this.loggedIn)
    //         this.$route.push('/')
    // }
}
</script>

<style scoped>

</style>
