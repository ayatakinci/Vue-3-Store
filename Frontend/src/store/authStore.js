import axios from 'axios';
import { createStore } from 'vuex';

 const authStore = createStore({
    state: {
        isLoggedIn: false,
        username: ''
    },
    mutations: {
        SET_LOGGED_IN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
        SET_USERNAME(state, username) {
            state.username = username;
        }
    },
    actions: {
        async login({ commit }, { username, password }) {
            try {
                const response = await axios.post('http://localhost:5000/login', {
                    username: username,
                    password: password
                });

                if (response.status === 200 && response.data.success) {
                    commit('SET_LOGGED_IN', true);
                    commit('SET_USERNAME', username);
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        logout({ commit }) {
            commit('SET_LOGGED_IN', false);
            commit('SET_USERNAME', '');
        }

    }
});
export { authStore };