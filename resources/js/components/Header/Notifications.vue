<template>
    <div class="text-center mr-2">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="red"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    icon
                >
                    <v-icon>
                        {{ unreadnotifications.length>0 ? 'mdi-bell-ring': 'mdi-bell-ring-outline'}}
                    </v-icon>
                    <span v-if="unreadnotifications.length>0">
                        ({{unreadnotifications.length}})
                    </span>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="not in notifications" v-bind:key="not.id">
                    <Notification :data="not" />
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import axios from 'axios'
import {mapGetters} from "vuex";
import Notification from "./Notification";
export default {
    components: {Notification},
    data(){
        return{
        }
    },
    computed:{
      ...mapGetters(['notifications','unreadnotifications','user'])
    },
    mounted(){
        this.$store.dispatch('getAllNotifications')
    },
    async created() {
        await this.$store.dispatch('getUser');
        // Echo.private('App.Models.User.' + this.user.id)
        //     .notification((notification) => {
        //         console.log(notification);
        //     });
    }
}
</script>

<style scoped>

</style>
