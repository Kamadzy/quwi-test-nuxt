import axios from "axios";
const base_URL = "https://api.quwi.com/v2";
export default {
  state: {
    projects: [],
    token: "",
    user: ""
  },
  mutations: {
    EDIT_PROJECT(state, { id, name }) {
      const updateItemId = state.projects.findIndex(
        project => project.id === id
      );
      const item = { ...state.projects[updateItemId], name };
      state.projects = [
        ...state.projects.slice(0, updateItemId),
        item,
        ...state.projects.slice(updateItemId + 1)
      ];
    },
    LOGIN(state, { app_init: { user }, token }) {
      state.user = user;
      window.localStorage.setItem("token", token);
      state.token = token;
    },
    GET_PROJECTS(state, { projects }) {
      state.projects = projects;
    }
  },
  getters: {
    getAllProjects: state => state.projects
  },
  actions: {
    async editProject({ commit }, { id, name }) {
      await axios.post(
        `${base_URL}/projects-manage/update?id=1690`,
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
      const req = await axios.post(`${base_URL}/auth/login`, {
        email,
        password
      });
      commit("LOGIN", req.data);
    },
    async getProjects({ commit }) {
      const req = await axios.get(`${base_URL}/projects-manage/index`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      });
      commit("GET_PROJECTS", req.data);
    }
  }
};
