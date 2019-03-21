<template lang="pug">
  div#adminNav
    div(v-if="currentUser != null")
      h1 hello
      h1 hello
      h1 hello
      h1 hello
      h1 hello

</template>

<script>
export default {
  name: 'adminNav',
  currentUser: null,
  created() {
    this.currentUser = this.$store.currentUser
  }
}
</script>

<style lang="scss" scoped>
</style>
