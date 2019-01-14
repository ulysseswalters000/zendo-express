<template lang="pug">
  div#app
    Navigation
    LargeHero
    CallToAction
    Features
</template>

<script>
import Navigation from './components/Navigation.vue'
import LargeHero from './components/LargeHero.vue'
import CallToAction from './components/CallToAction.vue'
import Features from './components/Features.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    LargeHero,
    CallToAction,
    Features
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
}
</style>
