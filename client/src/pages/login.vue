<template lang="pug">
  div
    Navigation
    form(@submit.prevent)
      label(for="email") Email
      input(type="email" placeholder="email" id="email" v-model.trim="loginForm.email")
      label(for="password") Password
      input(type="password" placeholder="password" id="password" v-model.trim="loginForm.password")
      button(type="submit" @click="login") Login
    TheFooter
</template>

<script>
import Navigation from '@/components/Navigation'
import TheFooter from '@/components/TheFooter'
const fb = require('../firebaseConfig.js')
export default {
  name: 'login',
  components: {
    Navigation,
    TheFooter
  },
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then( user => {
        this.$store.commit('setCurrentUser', user.user)
        this.$router.push('/addBlog')
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    padding-top: 120px;
    display: flex;
    flex-wrap: wrap;
  }
</style>
