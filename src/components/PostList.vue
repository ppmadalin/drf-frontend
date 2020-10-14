<template>
  <div id="post" class="post">
    <template>
      <base-card v-for="post in posts.posts" :key="post.id">
        <template v-slot:title>
          <router-link :to="{ name: 'Post', params: { id: post.id } }"
            ><h2>{{ post.title }}</h2></router-link
          >
        </template>
        <template>
          {{ post.body }}
        </template>
        <template v-slot:footer>
          <h4>Written by {{ post.owner }}</h4>
          <p>Created on {{ post.created }}</p>
        </template>
      </base-card>
    </template>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["posts"]),
  },
  created() {
    this.$store.dispatch("getPosts");
  },
};
</script>
