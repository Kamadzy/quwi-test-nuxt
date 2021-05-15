<template>
  <nuxt-link
    :to="{
      name: 'project-edit',
      params: { name: project.name, id: project.id }
    }"
  ><li class="li-item">
    <p>{{ testProg }}</p>
    <img :src="project.logo_url" alt="logo" class="project-img" />
    <h3>{{ project.name }}</h3>
    <p :style="styledStatus">
      {{ this.project.is_active ? "Active" : "Inactive" }}
    </p>
    <div class="summury">
      <ul class="summury-list">
        <li class="summury-item">
          <span class="status">time this week</span>
          <span class="status-time">00:00:00</span>
        </li>
        <li class="summury-item">
          <span class="status">time mounth</span>
          <span class="status-time">00:00:00</span>
        </li>
        <li class="summury-item">
          <span class="status">total</span>
          <span class="status-time">00:00:00</span>
        </li>
      </ul>
    </div>
  </li>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true
    }
  },
  methods: {},
  computed: {
    styledStatus() {
      return {
        color: this.project.is_active ? "green" : "grey"
      };
    },
    testProg() {
      console.log("project", project);
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
.summury-list {
  list-style: none;
}
.status {
  margin-right: 20px;
}
.summury-item {
  display: flex;
  justify-content: space-between;
}
</style>
