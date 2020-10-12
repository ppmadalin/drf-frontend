import Vue from 'vue'
import VueRouter from 'vue-router'

// Views
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login

  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ "../views/Admin"),
    children: [
      {
        path: "/admin/posts",
        name: "Posts",
        component: () =>
        import(/* webpackChunkName: "login" */ "../views/Post.vue"),

      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
