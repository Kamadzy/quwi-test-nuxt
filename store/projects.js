export const state = () => ({
    projects: []
})

export const mutations = {
    setProjects(state, projects) {
        state.projects = projects;
    },

    editProject(state, {id, name}) {
        const updateItemId = state.projects.findIndex(
            project => project.id === id
        );
        const item = {...state.projects[updateItemId], name};
        state.projects = [
            ...state.projects.slice(0, updateItemId),
            item,
            ...state.projects.slice(updateItemId + 1)
        ];
    }
}

export const actions = {
    async editProject({commit}, {id, name}) {
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
        commit("editProject", {id, name});
    },

    async getProjects({commit}) {
        const req = await this.$axios.get(
            `${process.env.BASE_URL}/projects-manage/index`,
            {
                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`
                }
            });
        commit('setProjects', req);
    }
}

export const getters = {
    projects: state => state.projects
}
