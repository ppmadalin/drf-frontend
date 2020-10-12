<template>
  <div id="home">
    <div id="content">
      <post-list />
    </div>
  </div>
</template>
<script>
import PostList from "@/components/PostList.vue";

export default {
  components: { PostList },
};
</script>
<style scoped></style>
