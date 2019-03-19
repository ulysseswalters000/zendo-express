import Vue from 'vue'
import App from './App.vue'
// imports 'animate on scroll library'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
import { store } from './store'
const fb = require('./firebaseConfig.js')


Vue.config.productionTip = false
let app
fb.auth.onAuthStateChanged( user => {
  if(!app) {
    app = new Vue({
      created () {

        // initializes animate on scroll library
        AOS.init()
      },

      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
