export const state = () => ({
    token: null,
    user: {}
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    },
    setAuth(state, {user, token}) {
        state.user = user;
        window.localStorage.setItem("token", token);
        state.token = token;
    },
}

export const actions = {
    async login({commit}, {email, password}) {
        const req = await this.$axios.post(`${process.env.BASE_URL}/auth/login`, {
            email,
            password
        });
        commit("setAuth", req);
        commit('setToken', 'trueToken')
    },

    nuxtServerInit({dispatch}) {
        console.log('nuxtServerInit')
    },

    logout({commit}) {
        commit('clearToken')
    }
}

export const getters = {
    hasToken: state => !!state.token
}
