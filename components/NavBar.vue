<template>
  <div class="main-navbar">
    <nuxt-link exact active-class="active" class="nav-link" to="/">
      Projects
    </nuxt-link>
    <nuxt-link active-class="active" class="nav-link" to="/login">
      Logout
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-navbar {
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #000;
  padding: 15px;
}
.nav-link {
  margin-left: 15px;
  color: grey;
  text-decoration: none;
  text-transform: uppercase;
}
.nav-link:hover {
}
</style>
