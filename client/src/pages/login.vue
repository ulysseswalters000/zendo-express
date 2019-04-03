<template lang="pug">
  div
    form(@submit.prevent)
      div.form-elements
        label(for="email") Email:
        input(type="email" placeholder="email" id="email" v-model.trim="loginForm.email")
        label(for="password") Password:
        input(type="password" placeholder="password" id="password" v-model.trim="loginForm.password")
        button(type="submit" @click="login") Login
</template>

<script>
const fb = require('../firebaseConfig.js')
export default {
  name: 'login',
  components: {
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
        this.$router.push('/dashboard')
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    padding-top: 180px;
    max-width: 1200px;
    margin: 0 auto 440px auto;

    .form-elements {
      background-color: #ddd;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 500px;
      margin: 0 auto;
      padding: 22px;

      label {
        text-transform: uppercase;
        width: 55%;
        display: block;
      }

      input {
        background-color: #ddd;
        display: block;
        margin: 20px 0;
        padding: 5px 0;
        border: 0;
        width: 55%;
        outline: 0;
        border-bottom: 1px dashed #444;
      }

      button {
        display: block;
        width: 55%;
      }

    }




  }


</style>
