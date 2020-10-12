import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Components
import BaseCard from '@/components/BaseCard'

Vue.component('BaseCard', BaseCard)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
