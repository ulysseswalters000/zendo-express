<template lang="pug">
  div
    div.blog
      h1 {{ blog.title }}
      div.line
      p.blog-body {{ blog.body }}
</template>

<script>
const fb = require('../firebaseConfig')

export default {
  name: 'singleBlog',
  components: {
  },
  data () {
    return {
      id: this.$route.params.id,
      blog: {}
    }
  },
  created () {
    fb.blogCollection.doc(this.id).get().then( doc => {
      this.blog = doc.data();
    }).catch( err => {
      console.log(err);
    })
  }
}
</script>

<style lang="scss" scoped>

.blog {
  max-width: 1200px;
  margin: 0 auto;
}

.line {
  border: 1px solid black;
}

</style>
