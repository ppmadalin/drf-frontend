<template>
  <div id="post" class="post">
    <template>
      <base-card v-for="post in posts" :key="post.id">
        <template v-slot:title>
          <router-link :to="{ name: 'Post', params: { id: post.id } }"
            ><h2>{{ post.title }}</h2></router-link
          >
        </template>
        <template>
          {{ post.body }}
        </template>
        <template v-slot:footer>
          <h4>Card footer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ab nulla possimus quos modi dolor dolores minima sed, cumque beatae!
          </p>
        </template>
      </base-card>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.$store.dispatch("getPosts");
    console.log("Test");
  },
};
</script>
