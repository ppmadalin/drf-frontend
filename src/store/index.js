import Vue from 'vue'
import Vuex from 'vuex'

// Import modules
import user from '@/store/modules/user.js'
import posts from '@/store/modules/posts.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    posts
  }
})
