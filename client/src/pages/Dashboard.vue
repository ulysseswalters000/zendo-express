<template lang="pug">
  div
    div.nav-padding
      div.container
        h1 Dashboard
        div.flex.space-between
          div.card.flex-wrap
            h2 Add Blog Post
            p Click this to make a new post
            router-link(to="addBlog") New Post
          div.card.flex-wrap
            h2 contact submissions
            p Click this to see our contact submissions
            router-link(to="contacts") Show Contacts

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
  .nav-padding {
    padding-top: 120px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .flex {
    display: flex;
  }

  .space-between {
    justify-content: space-between;
    margin: 0 300px;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }
</style>
