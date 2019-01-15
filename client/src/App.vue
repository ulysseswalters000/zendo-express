<template lang="pug">
  div#app
    Navigation
    LargeHero
    CallToAction
    Features
    Teams
    ContactForm
    AboutUs
    GreaterHeights
    TheFooter
</template>

<script>
import Navigation from './components/Navigation.vue'
import LargeHero from './components/LargeHero.vue'
import CallToAction from './components/CallToAction.vue'
import Features from './components/Features.vue'
import Teams from './components/Teams.vue'
import ContactForm from './components/ContactForm.vue'
import AboutUs from './components/AboutUs.vue'
import GreaterHeights from './components/GreaterHeights.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    LargeHero,
    CallToAction,
    Features,
    Teams,
    ContactForm,
    AboutUs,
    GreaterHeights,
    TheFooter
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
