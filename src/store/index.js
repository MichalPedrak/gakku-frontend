import { createStore } from 'vuex';

export default createStore({
    state: {
        authenticated: false,

    },
    mutations: {
        SET_AUTH: (state, auth) => state.authenticated = auth
    },
    actions: {
        setAuth: ({commit: Commit}, auth) => commit('SET_AUTH', auth)
    },
    modules: {},
})