import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

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
    component: () => import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
    meta: { requiresAuth: true },
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

// router.beforeEach((to, from, next) => {
  
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     console.log(to)
//     if (!store.state.user.user.isAuthenticated) {
//       next({
//         name: "Login",
//         query: { redirect: to.name },
//       });
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });


router.beforeEach((to, from, next) =>{
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (store.state.user.user.isAuthenticated){
      console.log("Authorized")
      return next()
    } else {
      console.log("Not Authorized")
      return next({name: 'Login', query: {redirect: to.fullPath}})
    }
  } else {
    console.log("Default next()")
    return next()
  }
});

export default router
