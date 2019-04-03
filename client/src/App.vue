<template lang="pug">
  div
    Navigation
    router-view
    TheFooter
</template>

<script>
import { mapState } from 'vuex'
import Navigation from './components/Navigation'
import TheFooter from './components/TheFooter'
export default {
  name: 'app',
  components: {
    Navigation,
    TheFooter
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style>

#app {

}
</style>
