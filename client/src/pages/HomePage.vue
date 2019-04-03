<template lang="pug">
  div#app
    AnimatedHeader
    LargeHero
    CallToAction
    Features
    Teams
    AboutUs
    GreaterHeights
</template>

<script>
import LargeHero from '@/components/LargeHero.vue'
import CallToAction from '@/components/CallToAction.vue'
import Features from '@/components/Features.vue'
import Teams from '@/components/Teams.vue'
import AboutUs from '@/components/AboutUs.vue'
import GreaterHeights from '@/components/GreaterHeights.vue'
import AnimatedHeader from '@/components/AnimatedHeader.vue'

export default {
  name: 'app',
  components: {
    LargeHero,
    CallToAction,
    Features,
    Teams,
    AboutUs,
    GreaterHeights,
    AnimatedHeader,
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
