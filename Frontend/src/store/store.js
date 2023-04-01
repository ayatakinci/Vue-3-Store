import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isLoggedIn: false,
        username: ''
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await axios.post('http://localhost:5000/login', {
                    username: username,
                    password: password
                });

                if (response.status === 200 && response.data.success) {
                    this.isLoggedIn = true;
                    this.username = username;
                    return true;
                } else {
                    return false;
                }
            } catch (error) {
                console.error(error);
                return false;
            }
        },
        logout() {
            this.isLoggedIn = false;
            this.username = null;
        }
    }
});
