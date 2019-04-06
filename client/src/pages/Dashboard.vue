<template lang="pug">
  div.padding-top
    div.container-dash
      h1.dash-title Dashboard
      div.flex.space-between
        div.card.flex-wrap
          h2.card-title Add Blog Post
          p.card-instructions Click this to make a new post
          div.card-link-container
            router-link.card-link(to="addBlog") New Post
        div.card.flex-wrap
          h2.card-title contact submissions
          p.card-instructions Click this to see our contact submissions
          div.card-link-container
            router-link.card-link(to="contacts") Show Contacts

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
  .padding-top {
    padding-top: 120px;
  }

  .container-dash {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .dash-title {
    font-family: SweetSans-Light;
    text-decoration: underline;
    font-size: 3rem;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .card {
    background-color: #eee;
    padding: 30px;
    margin: 60px 10px 300px 10px;
    flex: 1 1 0;



    .card-title {
      font-family: SweetSans-Light;
      text-transform: uppercase;
    }

    .card-instructions {
      font-family: SweetSans-Light;
      color: #000;
    }

    .card-link-container {

    }

    .card-link {
      display: block;
      width: 100%;
      height: 100%;
      padding: 20px 0;
      text-decoration: none;
      background-color: yellow;
      color: blue;
      text-transform: uppercase;
      font-family: inherit;

      &:hover {
        background-color: blue;
        color: yellow;
      }
    }
  }
</style>
