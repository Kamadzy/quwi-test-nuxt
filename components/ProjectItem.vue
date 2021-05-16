<template>
    <a href="#" @click.prevent="show(project.id)">
        <p>{{ project.name }}</p>
        <img
            :src="project.img"
            alt="logo"
            class="project-img"
        />

        <h3>{{ project.name }}</h3>

        <p :style="status">
            {{ statusPlainText }}
        </p>
        <div class="summary">
            <ul class="summary-list">
                <li class="summary-item">
                    <span class="status">time this week</span>
                    <span class="status-time">00:00:00</span>
                </li>
                <li class="summary-item">
                    <span class="status">time month</span>
                    <span class="status-time">00:00:00</span>
                </li>
                <li class="summary-item">
                    <span class="status">total</span>
                    <span class="status-time">00:00:00</span>
                </li>
            </ul>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    methods: {
        show(id) {
            this.$router.push(`/projects/${id}`)
        }
    },
    computed: {
        status() {
            return {
                color: this.project.is_active ? "green" : "grey"
            };
        },
        statusPlainText() {
            return this.project.is_active ? "Active" : "Inactive";
        },
    }
}
</script>

<style>
    .summary-list {
        list-style: none;
    }

    .status {
        margin-right: 20px;
    }

    .summary-item {
        display: flex;
        justify-content: space-between;
    }
</style>
