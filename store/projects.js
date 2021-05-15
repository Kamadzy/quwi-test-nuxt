export const state = () => ({
  projects: [],
  token: '',
  user: ''
})

export const mutations = {
  setProjects(state, projects) {
    state.projects = projects;
  },

  setAuth(state, {user, token}) {
    state.user = user;
    window.localStorage.setItem("token", token);
    state.token = token;
  },

  editUser(state, {id, name}) {
    const updateItemId = state.projects.findIndex(
      project => project.id === id
    );
    const item = { ...state.projects[updateItemId], name };
    state.projects = [
      ...state.projects.slice(0, updateItemId),
      item,
      ...state.projects.slice(updateItemId + 1)
    ];
  }
}

export const actions = {
  async editProject({ commit }, { id, name }) {
    await this.$axios.post(
      `${process.env.BASE_URL}/projects-manage/update?id=1690`,
      {
        name
      },
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      }
    );
    commit("EDIT_PROJECT", { id, name });
  },

  async getLogin({ commit }, { email, password }) {
    const req = await this.$axios.post(`${process.env.BASE_URL}/auth/login`, {
      email,
      password
    });
    commit("SET_AUTH", req);
  },

  async getProjects({ commit }) {
    const req = await this.$axios.get(
      `${process.env.BASE_URL}/projects-manage/index`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
      }
    });
    commit('SET_PROJECTS', req);
  }
}

export const getters = {
  users: state => state.users
}
