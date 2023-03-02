import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: localStorage.getItem("user")
    }),

    actions: {
        // since we rely on `this`, we cannot use an arrow function
        login(user) {
            this.user = JSON.stringify(user)
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout() {
            localStorage.removeItem("user");
            this.user = null
        },
    }

})
