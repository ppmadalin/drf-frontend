<template>
  <div id="home">
    <h1>Welcome {{ user.user.username }}!</h1>
    <h2>The user is logged: {{ user.user.isAuthenticated }}</h2>
    <div id="content">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {},
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
#content {
  width: 100%;
  height: 100vh;
}
</style>
