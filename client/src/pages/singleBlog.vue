<template lang="pug">
  div
    div.blog
      img(:src="blog.imgUrl")
      div(v-html="blog.content")
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'

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

<style lang="scss">

.blog {
  padding-top: 120px;
  max-width: 1200px;
  margin: 0 auto;

  .ql-align-center {
    text-align: center;
  }
}



</style>
