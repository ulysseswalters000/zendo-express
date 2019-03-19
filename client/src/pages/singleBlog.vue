<template lang="pug">
  div
    Navigation
    div.nav-separator
    div.blog
      h1 {{ blog.title }}
      div.line
      p.blog-body {{ blog.body }}
    TheFooter
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import TheFooter from '@/components/TheFooter.vue'
const fb = require('../firebaseConfig')

export default {
  name: 'singleBlog',
  components: {
    Navigation,
    TheFooter
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
.nav-separator {
  padding-top: 95px;
}

.blog {
  max-width: 1200px;
  margin: 0 auto;
}

.line {
  border: 1px solid black;
}

</style>
