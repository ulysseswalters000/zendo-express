<template lang="pug">
  div#app
    LargeHero
    CallToAction
</template>

<script>
import LargeHero from './components/LargeHero.vue'
import CallToAction from './components/CallToAction.vue'

export default {
  name: 'app',
  components: {
    LargeHero,
    CallToAction
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
