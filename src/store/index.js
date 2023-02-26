import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user'))
    }),

    actions: {
        // since we rely on `this`, we cannot use an arrow function
        login(user) {
            alert('l1ogin')
            localStorage.setItem("user", JSON.stringify(user));
        },
        logout() {
            alert('logout')
            localStorage.removeItem("user");
            this.user = null
        },
    }

})