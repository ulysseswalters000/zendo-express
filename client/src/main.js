import Vue from 'vue'
import App from './App.vue'
// imports 'animate on scroll library'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'



Vue.config.productionTip = false

new Vue({
  created () {

    // initializes animate on scroll library
    AOS.init()
  },

  router,
  render: h => h(App)
}).$mount('#app')