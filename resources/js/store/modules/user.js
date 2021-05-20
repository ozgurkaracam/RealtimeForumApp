import axios from "axios";

export const user = {
    state: {},
    mutations: {
        try() {
            alert('module works!');
        }
    },
    actions: {
        login({commit}, data) {

            axios.post('/api/authenticate', {
                'email': data.email,
                'password': data.password
            })
                .then(res => console.log(res));

        }
    },
    getters: {}
}

export default user;
