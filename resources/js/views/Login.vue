<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login Form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
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
                            <v-btn color="primary" @click="login">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            axios.post('/api/authenticate',{
                'email':this.email,
                'password':this.password
            })
            .then(res=>console.log(res));
        }
    }
}
</script>

<style scoped>

</style>
