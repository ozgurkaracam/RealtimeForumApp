<template>
    <v-main>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login Form</v-toolbar-title>
                        </v-toolbar>

                        <v-alert type="success" v-if="status=='success'">Signup Successfuly! Redirecting..</v-alert>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    name="login"
                                    label="Name"
                                    type="email"
                                    v-model="name"
                                ></v-text-field>
                                <small class="red--text" v-if="errors.name">{{errors.name[0]}}</small>
                                <v-text-field
                                    name="login"
                                    label="Email"
                                    type="email"
                                    v-model="email"
                                ></v-text-field>

                                <small class="red--text" v-if="errors.email">{{errors.email[0]}}</small>
                                <v-text-field
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    v-model="password"
                                ></v-text-field>
                                <small class="red--text" v-if="errors.password">{{errors.password[0]}}</small>
                                <v-text-field
                                    id="password"
                                    name="password_confirmation"
                                    label="Password Confirm"
                                    type="password"
                                    v-model="password_confirmation"
                                ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <router-link to="/login" tag="v-btn" color="primary"> Login</router-link>
                            <v-btn color="primary" @click="signUp">Signup</v-btn>
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
    computed:{
      ...mapGetters(['errors','status'])
    },
    data(){
        return{
            name:null,
            email:null,
            password:null,
            password_confirmation:null
        }
    },
    methods:{
        signUp(){
            this.$store.dispatch('signUp',{
                name:this.name,
                email:this.email,
                password:this.password,
                password_confirmation:this.password_confirmation
            })
        }
    }
}
</script>

<style scoped>

</style>
