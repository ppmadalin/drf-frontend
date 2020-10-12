<template>
  <div id="app">
    <the-navbar />
    <main class="content">
      <router-view :key="$route.path" />
    </main>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: { TheNavbar },
};
</script>

<style>
:root {
  box-sizing: border-box;
  /* font-size: calc(1vw + 0.1em); */
  /* Colors */
  --dark-color: #2c3e50;
}
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  line-height: 2rem;
}

.content {
  max-width: 1140px;
  margin: 2rem auto;

  height: 100vh;
  background-color: #fff;
  padding: 0 1rem;
}
</style>
