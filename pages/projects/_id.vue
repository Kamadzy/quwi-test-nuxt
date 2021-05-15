<template>
    <div class="main-section">
        <p>Name</p>
        <form @submit.prevent="() => editProjectName()">
            <input
                class="new-input"
                type="text"
                v-model="newProjectTitle"
                placeholder=""
            />
            <button class="new-btn">OK</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            require: true
        },
        name: {
            type: String,
            require: true
        }
    },
    data() {
        return {
            newProjectTitle: this.getProjectName()
        };
    },
    name: "ProjectEdit",
    methods: {
        getProjectName() {
            return this.name;
        },
        editProjectName() {
            this.$store.dispatch("editProject", {
                name: this.newProjectTitle,
                id: this.id
            });
        }
    }
};
</script>

<style scoped>
.main-section {
    display: flex;
    margin: 15px;
}

.new-input {
    width: 250px;
    padding: 10px 15px;
    margin: 0 10px;
}

.new-btn {
    text-transform: uppercase;
    font-size: 14px;
    padding: 9px 24px;
    background: rgb(62, 83, 117);

    color: white;
    border-radius: 5px;
    cursor: pointer;
}
</style>
