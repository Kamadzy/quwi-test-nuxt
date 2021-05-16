export const state = () => ({
    token: localStorage.getItem('token') || null,
    isAuthorized: false,
    user: {}
})

export const mutations = {
    setToken(state, token) {
        state.token = token;
        state.isAuthorized = true;

        console.log('Bearer ' + token);

        this.$axios.setHeader('Authorization', 'Bearer ' + token)
        window.localStorage.setItem('token', token);
    },
    clearToken(state) {
        state.token = null;
        state.isAuthorized = false;
        window.localStorage.removeItem('token');
    },
    setUser(state, user) {
        state.user = user;
    },
    removeUser(state) {
        state.user = null;
    },
}

export const actions = {
    async login({commit}, {email, password}) {
        const {token, app_init: {user}} = await this.$axios.$post('/auth/login', {email, password});

        commit('setUser', user);
        commit('setToken', token);
    },
    logout({commit}) {
        commit('removeUser')
        commit('removeToken')
    }
}

export const getters = {
    hasToken: state => !!state.token
}
