<template>
    <ul>
        <li v-for="project of projects" class="li-item">
            <ProjectItem
                :project={project}
            />
        </li>
    </ul>
</template>

<script>
import ProjectItem from "@/components/ProjectItem";

export default {
    async fetch({store}) {
        if (store.getters['projects/projects'].length === 0) {
            await store.dispatch('projects/getProjects')
        }
    },
    data: () => ({

    }),
    methods: {
        show(id) {
            this.$router.push(`/projects/${id}`)
        }
    },
    computed: {
        projects() {
            return this.$store.getters['projects/projects']
        }
    }
};
</script>

<style scoped>
    .li-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px rgba(0, 0, 0, 0.1) solid;
        padding: 10px 30px;
        border-radius: 2px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        color: black;
    }

    .li-item:hover {
        box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
        transform: translate3d(0px, -1px, 0px);
    }
</style>
