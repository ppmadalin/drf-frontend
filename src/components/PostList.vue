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
      posts: [
        {
          id: 1,
          title: "First post",
          body:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores expedita illum cum est reiciendis impedit reprehenderit optio, in quibusdam dolor unde vero labore commodi harum quia dicta provident cupiditate incidunt similique eius voluptates velit architecto, aperiam eum. Molestias magnam optio distinctio, labore quam eos fuga aliquam quia fugiat? Unde numquam veritatis sunt reprehenderit delectus voluptates cumque reiciendis natus dignissimos? Qui necessitatibus nulla nemo voluptas ducimus eaque quasi vero facilis quidem vel placeat ea, debitis facere at inventore ipsam reiciendis officia! Beatae ab repellat eaque voluptate! Inventore accusamus perspiciatis cupiditate quis vel praesentium impedit expedita, voluptatem dolorem aliquid facilis sed omnis.",
        },
        {
          id: 2,
          title: "Second post",
          body:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores expedita illum cum est reiciendis impedit reprehenderit optio, in quibusdam dolor unde vero labore commodi harum quia dicta provident cupiditate incidunt similique eius voluptates velit architecto, aperiam eum. Molestias magnam optio distinctio, labore quam eos fuga aliquam quia fugiat? Unde numquam veritatis sunt reprehenderit delectus voluptates cumque reiciendis natus dignissimos? Qui necessitatibus nulla nemo voluptas ducimus eaque quasi vero facilis quidem vel placeat ea, debitis facere at inventore ipsam reiciendis officia! Beatae ab repellat eaque voluptate! Inventore accusamus perspiciatis cupiditate quis vel praesentium impedit expedita, voluptatem dolorem aliquid facilis sed omnis.",
        },
      ],
    };
  },
};
</script>
