<template>
  <div id="home">
    <the-navbar />
    <div id="content">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>
<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style scoped>
#content {
  width: 100%;
  height: 100vh;
}
</style>
